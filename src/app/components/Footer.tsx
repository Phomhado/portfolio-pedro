'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NAV_ITEMS } from '@/constants';

const SOCIALS = [
  { href: 'https://github.com/Phomhado', icon: FaGithub, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/pedro-he-oli-dev',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:pedro.he.oli10@gmail.com', icon: FaEnvelope, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border-hi)',
      }}
    >
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
          <nav className="flex items-center gap-6">
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
                whileHover={{ y: -2 }}
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
