'use client';

import { motion } from 'framer-motion';

const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Styled Components',
  'Tailwind CSS',
  'Git',
  'CI/CD',
];

const RESPONSIBILITIES = [
  'Create and edit components and webpages',
  'Develop landing pages',
  'Debug and fix errors in the application',
  'Implement responsive designs and ensure cross-browser compatibility',
  'Optimize application performance and loading times',
  'Collaborate with UX/UI designers to implement pixel-perfect interfaces',
  'Write clean, maintainable, and well-documented code',
  'Participate in code reviews and maintain code quality standards',
  'Work closely with backend developers to integrate APIs and services',
  'Configure and maintain CI/CD pipelines for automated testing and deployment',
  'Set up and manage automated build processes and deployment workflows',
  'Manage version control workflows and branching strategies',
];

const ACHIEVEMENTS = [
  'Co-architected Barihaus — a React Design System based on Ant Design and Tailwind CSS using atomic design principles. Established a centralized Design Token system to enforce UI consistency and accelerate component reuse through Storybook.',
  'Developed a cross-platform NPM logging library with Backend engineers, implementing 4 severity levels (Warning, Fatal, Error, Info) and automated DataDog integration — improving production incident response time with real-time telemetry across multiple products.',
];

const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: (i: number) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

export default function Experience() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="px-6 sm:px-10 lg:px-16 pt-16 pb-14"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        <motion.span
          className="block font-mono text-xs tracking-[0.25em] uppercase mb-5"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          05 / Experience
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            className="font-mono font-black tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              color: 'var(--fg)',
            }}
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
          >
            EXPERIENCE
          </motion.h1>
        </div>
      </div>

      {/* Experience entry */}
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        {/* Date bar */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span
            className="font-mono font-black"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--muted)',
            }}
          >
            NOV 2023
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'var(--accent-r)' }}
          />
          <span
            className="font-mono font-black"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--accent-r)',
            }}
          >
            PRESENT
          </span>
        </motion.div>

        {/* Role + Company */}
        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 mb-3">
          <div className="overflow-hidden">
            <motion.h2
              className="font-mono font-black tracking-tight leading-none"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                color: 'var(--fg)',
              }}
              custom={0}
              variants={clipReveal}
              initial="hidden"
              animate="visible"
            >
              FRONTEND DEVELOPER
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="font-mono font-bold tracking-wide block"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                color: 'var(--accent-r)',
              }}
              custom={1}
              variants={clipReveal}
              initial="hidden"
              animate="visible"
            >
              @ BANCO BARI
            </motion.span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-14"
          style={{ background: 'var(--border-hi)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p
              className="font-mono text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--muted)' }}
            >
              Responsibilities
            </p>
            <ul className="space-y-3">
              {RESPONSIBILITIES.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: 'var(--fg)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.04 }}
                >
                  <span
                    className="font-mono font-bold mt-0.5 shrink-0"
                    style={{ color: 'var(--accent-r)' }}
                  >
                    →
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p
              className="font-mono text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: 'var(--muted)' }}
            >
              Notable Achievements
            </p>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={i}
                  className="p-5"
                  style={{ border: '1px solid var(--border-hi)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                >
                  <span
                    className="font-mono font-black text-2xl block mb-3 leading-none"
                    style={{ color: 'var(--accent-r)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <p
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--muted)' }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.6rem] font-bold tracking-wider px-3 py-1.5 uppercase"
                    style={{
                      border: '1px solid var(--border-hi)',
                      color: 'var(--fg)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
