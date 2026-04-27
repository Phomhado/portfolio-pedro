'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NAV_ITEMS } from '@/constants';
import { useLiveTime } from '../hooks/useLiveTime';

const SOCIALS = [
  { href: 'https://github.com/Phomhado', icon: FaGithub, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/pedro-he-oli-dev',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:pedro.he.oli10@gmail.com', icon: FaEnvelope, label: 'Email' },
];

const STATUS_MESSAGES = [
  'BUILT_WITH: Next.js + ❤',
  'BUILT_WITH: Framer Motion',
  'BUILT_WITH: Tailwind CSS v4',
  'BUILT_WITH: TypeScript 5',
  'BUILT_WITH: caffeine + curiosity',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const time = useLiveTime();

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border-hi)',
      }}
    >
      {/* Top system bar */}
      <div
        className="px-6 sm:px-10 lg:px-16 py-3"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase">
          <span className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full blink-strong"
              style={{ background: 'var(--accent-g)' }}
            />
            <span style={{ color: 'var(--accent-g)' }}>STATUS:ONLINE</span>
            <span style={{ color: 'var(--border-hi)' }}>·</span>
            <span style={{ color: 'var(--muted)' }}>SYS_TIME {time}</span>
          </span>
          <span className="overflow-hidden whitespace-nowrap" style={{ maxWidth: '40%' }}>
            <span className="inline-block animate-marquee-slow" style={{ color: 'var(--muted)' }}>
              {STATUS_MESSAGES.join(' · ') + ' · '}{STATUS_MESSAGES.join(' · ') + ' · '}
            </span>
          </span>
          <span style={{ color: 'var(--muted)' }}>
            LAST_BUILD:{' '}
            <span style={{ color: 'var(--accent-r)' }}>{year}.04.26</span>
          </span>
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-200"
            style={{ color: 'var(--fg)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-r)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--fg)';
            }}
          >
            PO<span style={{ color: 'var(--accent-r)' }}>_</span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-6">
            <Link
              href="/#skills"
              className="font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--fg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
              }}
            >
              Skills
            </Link>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--fg)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                whileHover={{ y: -2, rotate: -8 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-g)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-6 flex items-center justify-between"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="font-mono text-[0.65rem] tracking-wider"
            style={{ color: 'var(--muted)' }}
          >
            © {year} PEDRO OLIVEIRA
          </p>
          <p
            className="font-mono text-[0.65rem] tracking-wider"
            style={{ color: 'var(--border-hi)' }}
          >
            CODING IT AND LOVING IT
          </p>
        </div>
      </div>
    </footer>
  );
}
