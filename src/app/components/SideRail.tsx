'use client';

import { useEffect, useState } from 'react';

const RAIL_ITEMS = [
  '01_INTRO',
  '02_SKILLS',
  '03_CONTACT',
  '04_PROJECTS',
  '05_EXPERIENCE',
];

export default function SideRail() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const text = RAIL_ITEMS.join(' // ') + ' // ';

  return (
    <div
      className="fixed right-0 top-0 bottom-0 z-30 hidden lg:flex flex-col justify-between items-center pointer-events-none"
      style={{
        width: '36px',
        borderLeft: '1px solid var(--border-hi)',
        background: 'var(--bg)',
      }}
    >
      {/* Top: live coords */}
      <div className="pt-24 flex flex-col items-center gap-2">
        <span
          className="font-mono text-[0.55rem] tracking-wider"
          style={{
            color: 'var(--muted)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          [ X:{String(coords.x).padStart(4, '0')} Y:{String(coords.y).padStart(4, '0')} ]
        </span>
      </div>

      {/* Middle: vertical marquee */}
      <div className="flex-1 overflow-hidden flex items-center justify-center my-6 w-full">
        <div
          className="flex flex-col animate-marquee-vertical whitespace-nowrap"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span
            className="font-mono text-[0.55rem] font-bold tracking-[0.3em] py-4"
            style={{ color: 'var(--accent-r)' }}
          >
            {text.repeat(8)}
          </span>
          <span
            className="font-mono text-[0.55rem] font-bold tracking-[0.3em] py-4"
            style={{ color: 'var(--accent-r)' }}
          >
            {text.repeat(8)}
          </span>
        </div>
      </div>

      {/* Bottom: status */}
      <div className="pb-6 flex flex-col items-center gap-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full blink-strong"
          style={{ background: 'var(--accent-g)' }}
        />
        <span
          className="font-mono text-[0.55rem] tracking-[0.2em]"
          style={{
            color: 'var(--muted)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          ONLINE
        </span>
      </div>
    </div>
  );
}
