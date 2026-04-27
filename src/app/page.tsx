'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import Marquee from './components/Marquee';
import { useScramble } from './hooks/useScramble';
import { useCounter } from './hooks/useCounter';
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

// ─── Clip-path reveal variant ─────────────────────────────────────────────────
const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: (i: number) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.75,
      delay: i * 0.12,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const scrambledName = useScramble('PEDRO OLIVEIRA', { delay: 600 });
  const yearsCount = useCounter(4, { duration: 1800, delay: 1200, pad: 3 });
  const { commits: githubCommits, repos: githubRepos } = useGitHubStats('Phomhado');
  const projectsCount = useCounter(githubRepos, { duration: 1800, delay: 1300, pad: 3 });
  const commitsCount = useCounter(githubCommits, { duration: 2000, delay: 1400, pad: 4 });
  const github = useMagnetic();
  const linkedin = useMagnetic();
  const year = new Date().getFullYear();

  return (
    <main style={{ background: 'var(--bg)' }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-12 pb-12 overflow-hidden"
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

        {/* Section marker + year */}
        <div className="flex justify-between items-center mb-12 relative z-10">
          <span
            className="font-mono text-xs tracking-[0.25em] flex items-center gap-2"
            style={{ color: 'var(--accent-r)' }}
          >
            <span className="pulse-bracket">[</span>
            <span style={{ color: 'var(--muted)' }}>SECTION_01 // INTRO.tsx</span>
            <span className="pulse-bracket">]</span>
          </span>
          <span
            className="font-mono text-xs tracking-[0.25em]"
            style={{ color: 'var(--muted)' }}
          >
            // {year}
          </span>
        </div>

        {/* Floating tilted sticker */}
        <motion.div
          className="absolute right-6 sm:right-12 top-24 sm:top-28 z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div
            className="font-mono text-[0.6rem] sm:text-xs font-black tracking-[0.2em] uppercase px-3 py-2 wiggle"
            style={{
              background: 'var(--accent-y)',
              color: 'var(--bg)',
              boxShadow: '4px 4px 0 0 var(--bg)',
              ['--wiggle-base' as string]: '-5deg',
            }}
          >
            // FRONTEND_DEV
          </div>
        </motion.div>

        {/* Main headings */}
        <div className="space-y-1 mb-8 relative z-10">
          {(['SOFTWARE', 'ENGINEER'] as const).map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                className="font-mono font-black leading-none tracking-tighter"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 9.5rem)',
                  color: 'var(--fg)',
                }}
                custom={i}
                variants={clipReveal}
                initial="hidden"
                animate="visible"
              >
                {word}
                {i === 1 && (
                  <span
                    className="cursor-blink"
                    style={{ color: 'var(--accent-r)' }}
                  >
                    _
                  </span>
                )}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Scrambled name */}
        <motion.p
          className="font-mono text-base sm:text-xl font-semibold tracking-[0.25em] mb-6 relative z-10"
          style={{ color: 'var(--accent-r)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {scrambledName}
        </motion.p>

        {/* Live counters */}
        <motion.div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--border-hi)' }}>[</span>
            <span style={{ color: 'var(--accent-g)' }}> {yearsCount} </span>
            YRS_CODING
            <span style={{ color: 'var(--border-hi)' }}> ]</span>
          </span>
          <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--border-hi)' }}>[</span>
            <span style={{ color: 'var(--accent-g)' }}> {projectsCount} </span>
            PROJECTS_SHIPPED
            <span style={{ color: 'var(--border-hi)' }}> ]</span>
          </span>
          <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--border-hi)' }}>[</span>
            <span style={{ color: 'var(--accent-g)' }}> {commitsCount} </span>
            COMMITS_YTD
            <span style={{ color: 'var(--border-hi)' }}> ]</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <div className="overflow-hidden mb-10 relative z-10">
          <motion.p
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: 'var(--muted)' }}
            custom={3}
            variants={clipReveal}
            initial="hidden"
            animate="visible"
          >
            Frontend Dev @Bari · Rust · C++ · Systems Engineering
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 mb-14 relative z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
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
        </motion.div>

        {/* Bio */}
        <motion.div
          className="max-w-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div
            className="h-px w-8 mb-5"
            style={{ background: 'var(--accent-r)' }}
          />
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Software Engineer with a strong foundation in Web Development and a
            deep passion for Systems Engineering. Building high-performance Web
            interfaces while exploring Low-Level programming with Rust and C++.
          </p>
        </motion.div>

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
