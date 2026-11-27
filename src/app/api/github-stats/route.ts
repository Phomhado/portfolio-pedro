const ACCOUNT = 'phomhado';

interface Profile {
  viewer: {
    login: string;
    repositories: { totalCount: number };
    contributionsCollection: { contributionYears: number[] };
  };
}

async function githubQuery<T>(token: string, query: string): Promise<T> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
    signal: AbortSignal.timeout(6000),
  });
  if (!response.ok) throw new Error('GitHub request failed');

  const result: { data?: T; errors?: unknown[] } = await response.json();
  if (!result.data || result.errors?.length) throw new Error('GitHub query failed');
  return result.data;
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return Response.json({ repos: null, commits: null }, { status: 503 });

  let repos: number | null = null;
  let commits: number | null = null;

  try {
    const { viewer } = await githubQuery<Profile>(token, `{
      viewer {
        login
        repositories(first: 1, ownerAffiliations: [OWNER]) { totalCount }
        contributionsCollection { contributionYears }
      }
    }`);
    if (viewer.login.toLowerCase() !== ACCOUNT) throw new Error('Unexpected GitHub account');

    repos = viewer.repositories.totalCount;
    const now = new Date();
    const years = [...new Set(viewer.contributionsCollection.contributionYears)];
    if (years.some((year) => !Number.isInteger(year) || year < 2008 || year > now.getUTCFullYear())) {
      throw new Error('Unexpected GitHub contribution year');
    }

    commits = 0;
    if (years.length) {
      // GitHub limits contribution queries to a year at a time.
      const fields = years.map((year) => {
        const from = new Date(Date.UTC(year, 0, 1)).toISOString();
        const to = new Date(Math.min(Date.UTC(year + 1, 0, 1) - 1000, now.getTime())).toISOString();
        return `year${year}: contributionsCollection(from: "${from}", to: "${to}") {
          totalCommitContributions
        }`;
      });
      const history = await githubQuery<{
        viewer: Record<string, { totalCommitContributions: number }>;
      }>(token, `{ viewer { ${fields.join('\n')} } }`);
      commits = years.reduce((total, year) => total + history.viewer[`year${year}`].totalCommitContributions, 0);
    }
  } catch {
    commits = null;
  }

  return Response.json({ repos, commits }, {
    status: repos === null ? 502 : 200,
    headers: {
      'Cache-Control': repos !== null && commits !== null
        ? 'public, max-age=300, s-maxage=900, stale-while-revalidate=3600'
        : 'no-store',
    },
  });
}
