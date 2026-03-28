'use client';

const MARQUEE_ITEMS = [
  'WEB DEV',
  'RUST',
  'SYSTEMS ENGINEERING',
  'WEB PERFORMANCE',
  'TYPESCRIPT',
  'REACT',
  'NEXT.JS',
];

const text = MARQUEE_ITEMS.join(' · ') + ' · ';

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-2.5 border-y"
      style={{
        background: 'var(--accent-r)',
        borderColor: 'var(--accent-r)',
      }}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <span
          className="font-mono text-xs font-bold tracking-[0.2em] uppercase shrink-0"
          style={{ color: 'var(--bg)', paddingRight: '2rem' }}
        >
          {text.repeat(6)}
        </span>
        <span
          className="font-mono text-xs font-bold tracking-[0.2em] uppercase shrink-0"
          style={{ color: 'var(--bg)', paddingRight: '2rem' }}
        >
          {text.repeat(6)}
        </span>
      </div>
    </div>
  );
}
