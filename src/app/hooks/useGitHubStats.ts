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

        // Fetch all commits ever made by the user
        // Sum commits across all repos owned by the user
        const allReposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        let totalCommits = 0;

        if (allReposRes.ok) {
          const allRepos = await allReposRes.json();
          // Iterate through repos and count commits
          for (const repo of allRepos) {
            try {
              const repoCommitsRes = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
                {
                  headers: {
                    'Accept': 'application/vnd.github.v3+json',
                  },
                }
              );
              if (repoCommitsRes.ok) {
                const linkHeader = repoCommitsRes.headers.get('link');
                if (linkHeader) {
                  // Extract last page number from Link header
                  const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                  if (match) {
                    totalCommits += parseInt(match[1], 10);
                  }
                } else {
                  // If no pagination, only 1 commit or fewer
                  const commits = await repoCommitsRes.json();
                  totalCommits += Array.isArray(commits) ? commits.length : 0;
                }
              }
            } catch (e) {
              // Silently fail on individual repo queries
            }
          }
        }

        setStats({
          commits: totalCommits > 0 ? totalCommits : 42,
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
