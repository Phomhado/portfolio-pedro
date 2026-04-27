'use client';

import { useLiveTime } from '../hooks/useLiveTime';

export default function SystemBar() {
  const time = useLiveTime();

  return (
    <div
      className="fixed top-16 left-0 right-0 z-30 hidden md:block pointer-events-none"
      style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border-hi)',
      }}
    >
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-7 font-mono text-[0.6rem] tracking-[0.2em] uppercase">
          <span style={{ color: 'var(--muted)' }}>
            [ PORTFOLIO::Pedro ] 
          </span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full blink-strong"
              style={{ background: 'var(--accent-g)' }}
            />
            <span style={{ color: 'var(--accent-g)' }}>LIVE</span>
            <span style={{ color: 'var(--border-hi)' }}>·</span>
            <span style={{ color: 'var(--muted)' }}>{time}</span>
            <span style={{ color: 'var(--border-hi)' }}>·</span>
            <span style={{ color: 'var(--muted)' }}>CURITIBA_BR-PR</span>
          </span>
        </div>
      </div>
    </div>
  );
}
