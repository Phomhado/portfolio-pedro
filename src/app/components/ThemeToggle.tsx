'use client';

import { useCallback, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  className?: string;
}

const THEME_STORAGE_KEY = 'portfolio-theme';

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const applyTheme = useCallback((nextTheme: Theme, persist: boolean = true) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(nextTheme);
    if (persist) {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    }
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

    if (storedTheme === 'light' || storedTheme === 'dark') {
      applyTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light', false);
  }, [applyTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!storedTheme) {
        applyTheme(event.matches ? 'dark' : 'light', false);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [applyTheme]);

  const handleToggle = () => {
    if (!theme) return;
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const iconClass = 'h-5 w-5';

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`flex items-center justify-center rounded-full border border-muted bg-card px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className ?? ''}`}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        <div className="flex items-center gap-2">
          <FiSun className={iconClass} />
          <span className="hidden sm:inline">Light</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FiMoon className={iconClass} />
          <span className="hidden sm:inline">Dark</span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
