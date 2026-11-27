'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import Marquee from './components/Marquee';
import { useScramble } from './hooks/useScramble';
import TerminalReading from './components/TerminalReading';
import { useGitHubStats } from './hooks/useGitHubStats';

// ─── Magnetic button ──────────────────────────────────────────────────────────
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, onMouseMove, reset };
}

export default function Home() {
  const scrambledName = useScramble('PEDRO OLIVEIRA', { delay: 600 });
  const { commits, repos } = useGitHubStats();
  const github = useMagnetic();
  const linkedin = useMagnetic();

  return (
    <main style={{ background: 'var(--bg)' }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative hero-section flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-8 sm:py-12 overflow-hidden"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        {/* Coordinate corners */}
        <span
          className="absolute top-3 left-3 font-mono text-[0.55rem] tracking-wider hidden sm:block"
          style={{ color: 'var(--border-hi)' }}
        >
          0,0 ┐
        </span>
        <span
          className="absolute bottom-3 right-3 font-mono text-[0.55rem] tracking-wider hidden sm:block"
          style={{ color: 'var(--border-hi)' }}
        >
          └ 1920,1080
        </span>

        {/* Section marker */}
        <div className="flex items-center mb-6 sm:mb-8 relative z-10">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted)' }}>
            [ SECTION_01 // INTRO.tsx ]
          </span>
        </div>
        <div className="relative z-10 mb-5">
          <h1 className="hero-title font-mono font-black leading-none tracking-tighter">
            <span className="block">FULL-STACK</span>
            <span className="block">DEVELOPER<span aria-hidden="true" className="cursor-blink" style={{ color: 'var(--accent-r)' }}>_</span></span>
          </h1>
          <p className="hero-focus mt-4 inline-block px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest">
            Frontend-focused
          </p>
        </div>

        {/* Scrambled name */}
        <p
          className="font-mono text-base sm:text-xl font-semibold tracking-[0.25em] mb-6 relative z-10"
          style={{ color: 'var(--accent-r)' }}
        >
          <span aria-hidden="true">{scrambledName}</span>
          <span className="sr-only">Pedro Oliveira</span>
        </p>

        <p className="relative z-10 mb-6 max-w-xl text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
          I build fast web interfaces with React, Next.js, and TypeScript at Banco Bari.
          I also build backend features with Ruby on Rails.
        </p>

        <div className="hero-metrics relative z-10 mb-8 font-mono">
          <div className="hero-metric">
            <span>Years coding</span>
            <strong>04</strong>
          </div>
          <div className="hero-metric">
            <span>GitHub repos</span>
            <TerminalReading label="GitHub repository count" value={repos} />
          </div>
          <div className="hero-metric">
            <span>All-time commits</span>
            <TerminalReading label="All-time GitHub commit contributions" value={commits} />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 relative z-10">
          {/* GitHub */}
          <motion.a
            ref={github.ref}
            href="https://github.com/Phomhado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glitch flex items-center justify-center sm:justify-start gap-3 px-6 py-3 font-mono text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto"
            style={{
              border: '1px solid var(--border-hi)',
              color: 'var(--fg)',
              x: github.springX,
              y: github.springY,
            }}
            onMouseMove={github.onMouseMove}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'var(--accent-r)';
              el.style.color = 'var(--accent-r)';
            }}
            onMouseLeave={(e) => {
              github.reset();
              const el = e.currentTarget;
              el.style.borderColor = 'var(--border-hi)';
              el.style.color = 'var(--fg)';
            }}
          >
            <FaGithub />
            GitHub ↗
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            ref={linkedin.ref}
            href="https://www.linkedin.com/in/pedro-he-oli-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glitch flex items-center justify-center sm:justify-start gap-3 px-6 py-3 font-mono text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto"
            style={{
              background: 'var(--accent-r)',
              color: 'var(--bg)',
              boxShadow: '4px 4px 0 0 var(--fg)',
              x: linkedin.springX,
              y: linkedin.springY,
            }}
            onMouseMove={linkedin.onMouseMove}
            onMouseLeave={linkedin.reset}
            whileHover={{ scale: 1.02 }}
          >
            <FaLinkedin />
            LinkedIn ↗
          </motion.a>
        </div>

        {/* Decorative background text */}
        <div
          className="absolute right-6 bottom-6 font-mono font-black select-none pointer-events-none"
          style={{
            fontSize: 'clamp(5rem, 22vw, 20rem)',
            color: 'transparent',
            WebkitTextStroke: '1px var(--border-hi)',
            lineHeight: 0.9,
            transform: 'rotate(-3deg)',
          }}
        >
          PO
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <Marquee />

      {/* ── Skills ───────────────────────────────────────── */}
      <Skills />

      {/* ── CTA ──────────────────────────────────────────── */}
      <CallToAction />
    </main>
  );
}
