'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import Marquee from './components/Marquee';

// ─── Text scramble ────────────────────────────────────────────────────────────
const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function useTextScramble(finalText: string, delay = 500): string {
  const [displayText, setDisplayText] = useState(() =>
    finalText.replace(/[^ ]/g, '_'),
  );

  useEffect(() => {
    let rafId: number;
    let frame = 0;
    const totalFrames = 45;
    const FRAME_DURATION = 35;
    let lastTime = 0;

    const timeoutId = setTimeout(() => {
      const animate = (time: number) => {
        if (time - lastTime < FRAME_DURATION) {
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
  }, [finalText, delay]);

  return displayText;
}

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
  const scrambledName = useTextScramble('PEDRO OLIVEIRA', 600);
  const github = useMagnetic();
  const linkedin = useMagnetic();
  const year = new Date().getFullYear();

  return (
    <main style={{ background: 'var(--bg)' }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-20 pb-12 overflow-hidden"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        {/* Section marker */}
        <div className="flex justify-between items-center mb-16">
          <span
            className="font-mono text-xs tracking-[0.25em]"
            style={{ color: 'var(--muted)' }}
          >
            01 / INTRO
          </span>
          <span
            className="font-mono text-xs tracking-[0.25em]"
            style={{ color: 'var(--muted)' }}
          >
            {year}
          </span>
        </div>

        {/* Main headings */}
        <div className="space-y-1 mb-10">
          {(['SOFTWARE', 'ENGINEER'] as const).map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                className="font-mono font-black leading-none tracking-tighter"
                style={{
                  fontSize: 'clamp(3.2rem, 10vw, 9.5rem)',
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
          className="font-mono text-base sm:text-xl font-semibold tracking-[0.25em] mb-10"
          style={{ color: 'var(--accent-r)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {scrambledName}
        </motion.p>

        {/* Tagline */}
        <div className="overflow-hidden mb-12">
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
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
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
            className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 font-mono text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto"
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
            className="flex items-center justify-center sm:justify-start gap-3 px-6 py-3 font-mono text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto"
            style={{
              background: 'var(--accent-r)',
              color: 'var(--bg)',
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
          className="max-w-lg"
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
