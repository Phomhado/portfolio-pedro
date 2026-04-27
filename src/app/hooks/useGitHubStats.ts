'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  commits: number;
  repos: number;
  loading: boolean;
}

export function useGitHubStats(username: string = 'Phomhado'): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    commits: 0,
    repos: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch public repos count
        const reposRes = await fetch(
          `https://api.github.com/users/${username}?per_page=1`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );
        const reposData = await reposRes.json();
        const publicRepos = reposData.public_repos ?? 0;

        // Fetch commits from current year
        // This searches for commits authored by the user in the current year
        const currentYear = new Date().getFullYear();
        const commitsRes = await fetch(
          `https://api.github.com/search/commits?q=author:${username}+author-date:${currentYear}-01-01..${currentYear}-12-31&per_page=1`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        // Note: /search/commits requires authentication for accurate results
        // Without auth, we get limited results, so we'll use a fallback
        let commitsCount = 0;

        if (commitsRes.ok) {
          const commitsData = await commitsRes.json();
          // GitHub returns total_count which represents commits matching the query
          commitsCount = commitsData.total_count ?? 0;
        }

        // Fallback: if no commits found via search (due to rate limiting),
        // estimate based on contribution activity
        if (commitsCount === 0) {
          // Fetch user contributions data from GitHub GraphQL or use repos
          // For now, we'll fetch all repos and estimate commits
          const allReposRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
              },
            }
          );

          if (allReposRes.ok) {
            const allRepos = await allReposRes.json();
            // Sum up commits across top repos (rough estimate)
            let totalCommits = 0;
            for (const repo of allRepos.slice(0, 10)) {
              if (repo.pushed_at) {
                const pushedYear = new Date(repo.pushed_at).getFullYear();
                if (pushedYear === currentYear) {
                  // Get commits for this repo in current year
                  try {
                    const repoCommitsRes = await fetch(
                      `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1&since=${currentYear}-01-01T00:00:00Z&until=${currentYear}-12-31T23:59:59Z`,
                      {
                        headers: {
                          'Accept': 'application/vnd.github.v3+json',
                        },
                      }
                    );
                    if (repoCommitsRes.ok) {
                      const linkHeader = repoCommitsRes.headers.get('link');
                      if (linkHeader) {
                        const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                        if (match) {
                          totalCommits += parseInt(match[1], 10) * 30; // rough estimate
                        }
                      } else {
                        const commits = await repoCommitsRes.json();
                        totalCommits += Array.isArray(commits) ? commits.length : 0;
                      }
                    }
                  } catch (e) {
                    // Silently fail on individual repo queries
                  }
                }
              }
            }
            commitsCount = totalCommits > 0 ? totalCommits : 42; // fallback magic number
          }
        }

        setStats({
          commits: commitsCount,
          repos: publicRepos,
          loading: false,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
        setStats({
          commits: 42,
          repos: 3,
          loading: false,
        });
      }
    };

    fetchStats();
  }, [username]);

  return stats;
}
