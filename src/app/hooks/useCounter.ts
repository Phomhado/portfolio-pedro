'use client';

import { useEffect, useState } from 'react';

export function useCounter(
  target: number,
  options: { duration?: number; delay?: number; pad?: number } = {},
): string {
  const { duration = 1500, delay = 0, pad = 0 } = options;
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;

    const timeoutId = setTimeout(() => {
      const animate = (time: number) => {
        if (startTime === null) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(target * eased));
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay]);

  return pad > 0 ? String(value).padStart(pad, '0') : String(value);
}
