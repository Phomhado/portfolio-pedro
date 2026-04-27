'use client';

import { useEffect, useState } from 'react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function useScramble(
  finalText: string,
  options: { delay?: number; totalFrames?: number; frameDuration?: number } = {},
): string {
  const { delay = 0, totalFrames = 45, frameDuration = 35 } = options;

  const [displayText, setDisplayText] = useState(() =>
    finalText.replace(/[^ ]/g, '_'),
  );

  useEffect(() => {
    let rafId: number;
    let frame = 0;
    let lastTime = 0;

    const timeoutId = setTimeout(() => {
      const animate = (time: number) => {
        if (time - lastTime < frameDuration) {
          rafId = requestAnimationFrame(animate);
          return;
        }
        lastTime = time;
        frame++;
        const progress = Math.min(frame / totalFrames, 1);
        const revealedCount = Math.floor(progress * finalText.length);

        const result = Array.from(finalText)
          .map((char, i) => {
            if (i < revealedCount) return char;
            if (char === ' ') return ' ';
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join('');

        setDisplayText(result);

        if (frame < totalFrames) {
          rafId = requestAnimationFrame(animate);
        } else {
          setDisplayText(finalText);
        }
      };
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [finalText, delay, totalFrames, frameDuration]);

  return displayText;
}
