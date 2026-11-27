'use client';

import { useEffect, useState } from 'react';

type Metric = number | 'loading' | 'unavailable';

function readMetric(value: unknown): Metric {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0
    ? value
    : 'unavailable';
}

export function useGitHubStats() {
  const [stats, setStats] = useState<{ repos: Metric; commits: Metric }>({
    repos: 'loading',
    commits: 'loading',
  });

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeoutId = window.setTimeout(() => controller.abort(), 14000);

    async function load() {
      try {
        const response = await fetch('/api/github-stats', { signal: controller.signal });
        if (!response.ok) throw new Error('GitHub stats unavailable');

        const data = await response.json();
        if (active) {
          setStats({ repos: readMetric(data.repos), commits: readMetric(data.commits) });
        }
      } catch {
        if (active) setStats({ repos: 'unavailable', commits: 'unavailable' });
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    void load();
    return () => {
      active = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return stats;
}
