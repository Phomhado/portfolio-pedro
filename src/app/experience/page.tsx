'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionMarker from '../components/SectionMarker';
import { useCounter } from '../hooks/useCounter';

const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Styled Components',
  'Tailwind CSS',
  'Jest',
  'React Testing Library',
  'Gitlab CI',
  'Docker',
  'AWS (ECS, S3)',
  'Strapi',
  'Storybook',
];

const RESPONSIBILITIES = [
  'Built and maintained reusable component libraries and landing pages using React, Next.js, TypeScript, and Tailwind CSS',
  'Integrated front-end features with internal REST APIs, including dynamic HTML-to-PDF report generation',
  'Collaborated directly with designers via Figma for design handoff, ensuring pixel-accurate implementation',
  'Configured and maintained CI/CD pipelines using GitLab CI and Docker, managing deployments across dev, QA, and production environments',
  'Managed CMS content structures and publishing workflows using Strapi',
  'Wrote unit and integration tests with Jest and React Testing Library, increasing coverage on critical UI components',
  'Participated actively in agile ceremonies alongside POs and other devs, aligning technical decisions with business priorities',
];

const ACHIEVEMENTS = [
  'Co-architected Barihaus, a React + TypeScript Design System built on Ant Design and Tailwind CSS, serving the entire web product team. Established a centralized Design Token system and documented components via Storybook, reducing redundant componentization across squads. Led the Ant Design v5 → v6 major version migration, ensuring backward compatibility across the system.',
  'Designed and published an internal NPM logging library (via private registry) in collaboration with backend engineers, integrating with the DataDog observability platform. Supports 4 severity levels (info, warn, error, fatal), captures contextual metadata (UUID, browser, environment), and transmits encoded payloads — improving production incident visibility across multiple products.',
  'Led the migration of a legacy admin portal, rebuilding static reports into dynamic, API-driven HTML-to-PDF documents integrated into the internal Backoffice platform. Collaborated directly with backend engineers to design the document generation pipeline, significantly improving data access speed for internal teams.',
  'Configured and maintained CI/CD pipelines using GitLab CI and Docker, managing environment variables, AWS integrations (ECS, S3), and deployment steps across dev, QA, and production environments.',
];

const TILTS = ['-1.5deg', '1.5deg', '-1deg', '1deg'];

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

// ─── Months between Nov 2023 and now ─────────────────────────────────────────
function monthsActive(): number {
  const start = new Date(2023, 10, 1); // Nov 2023
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return Math.max(0, months);
}

// Vertical marquee text
const VERT_MARQUEE = '· BANCO_BARI · BANCO_BARI · BANCO_BARI ';

export default function Experience() {
  const months = monthsActive();
  const monthsCount = useCounter(months, { duration: 1500, delay: 600, pad: 2 });

  // Scroll-driven date line scrubber
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.6', 'end 0.4'],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const dotX = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="relative px-6 sm:px-10 lg:px-16 pt-12 pb-14"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        {/* Coordinate corner */}
        <span
          className="absolute top-3 right-4 font-mono text-[0.55rem] tracking-wider hidden sm:inline-block"
          style={{ color: 'var(--border-hi)' }}
        >
          [ COORDINATES: 25°25&apos;S, 49°16&apos;W ]
        </span>

        <SectionMarker code="05" label="EXPERIENCE_LOG" ext="md" />

        <div className="overflow-hidden mt-4">
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

        <motion.p
          className="mt-5 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span style={{ color: 'var(--border-hi)' }}>[</span>
          <span style={{ color: 'var(--accent-g)' }}> {monthsCount} </span>
          MONTHS_ACTIVE
          <span style={{ color: 'var(--border-hi)' }}> ]</span>
          <span style={{ color: 'var(--border-hi)' }}> · </span>
          STATUS:{' '}
          <span style={{ color: 'var(--accent-g)' }} className="blink-strong">
            EMPLOYED
          </span>
        </motion.p>
      </div>

      {/* Experience entry */}
      <div ref={containerRef} className="relative px-6 sm:px-10 lg:px-16 py-16">
        {/* Vertical side marquee — desktop only */}
        <div
          className="hidden xl:flex absolute left-2 top-0 bottom-0 overflow-hidden items-center justify-center pointer-events-none"
          style={{ width: '32px' }}
        >
          <div
            className="flex flex-col animate-marquee-vertical whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            <span
              className="font-mono text-[0.6rem] font-bold tracking-[0.3em] py-4"
              style={{ color: 'var(--border-hi)' }}
            >
              {VERT_MARQUEE.repeat(10)}
            </span>
            <span
              className="font-mono text-[0.6rem] font-bold tracking-[0.3em] py-4"
              style={{ color: 'var(--border-hi)' }}
            >
              {VERT_MARQUEE.repeat(10)}
            </span>
          </div>
        </div>

        {/* Date bar with scroll scrubber */}
        <motion.div
          className="flex items-center gap-4 mb-12 relative"
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
            className="relative flex-1 h-px"
            style={{ background: 'var(--border-hi)' }}
          >
            {/* Filled portion based on scroll */}
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{ background: 'var(--accent-r)', width: lineWidth }}
            />
            {/* Scrubber dot */}
            <motion.div
              className="absolute top-1/2 w-3 h-3 rounded-full -translate-y-1/2 -translate-x-1/2 brutalist-shadow-sm"
              style={{
                background: 'var(--accent-r)',
                left: dotX,
                boxShadow: '0 0 0 4px var(--bg)',
              }}
            />
          </div>
          <span
            className="font-mono font-black blink-strong"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--accent-r)',
            }}
          >
            PRESENT
          </span>
        </motion.div>

        {/* Sticky-pinned role title */}
        <div className="sticky top-[5.75rem] md:top-[6.25rem] z-20 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16 py-4 mb-10"
          style={{
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border-hi)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-6">
            <div className="overflow-hidden">
              <motion.h2
                className="font-mono font-black tracking-tight leading-none"
                style={{
                  fontSize: 'clamp(1.5rem, 4.5vw, 3.2rem)',
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
                  fontSize: 'clamp(1rem, 2.6vw, 1.6rem)',
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p
              className="font-mono text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
            >
              <span style={{ color: 'var(--accent-r)' }}>[//]</span>
              Responsibilities
              <span
                className="inline-block flex-1 h-px"
                style={{ background: 'var(--border-hi)' }}
              />
            </p>
            <ul className="space-y-3">
              {RESPONSIBILITIES.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: 'var(--fg)' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.04 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p
              className="font-mono text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
            >
              <span style={{ color: 'var(--accent-r)' }}>[★]</span>
              Notable Achievements
              <span
                className="inline-block flex-1 h-px"
                style={{ background: 'var(--border-hi)' }}
              />
            </p>
            <div className="space-y-7">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={i}
                  className="achievement-card relative p-5 pt-6"
                  style={{
                    border: '1px solid var(--border-hi)',
                    transform: `rotate(${TILTS[i % TILTS.length]})`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  {/* Giant outline number behind */}
                  <span
                    className="absolute font-mono font-black select-none pointer-events-none leading-none"
                    style={{
                      fontSize: 'clamp(6rem, 14vw, 11rem)',
                      color: 'transparent',
                      WebkitTextStroke: '1.5px var(--border-hi)',
                      top: '-2rem',
                      right: '-1rem',
                      transform: i % 2 === 0 ? 'rotate(6deg)' : 'rotate(-5deg)',
                      zIndex: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="relative z-10 font-mono font-black text-2xl block mb-3 leading-none"
                    style={{ color: 'var(--accent-r)' }}
                  >
                    [{String(i + 1).padStart(2, '0')}]
                  </span>
                  <p
                    className="relative z-10 text-sm leading-relaxed"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p
                className="font-mono text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
                style={{ color: 'var(--muted)' }}
              >
                <span style={{ color: 'var(--accent-r)' }}>[#]</span>
                Tech Stack
                <span
                  className="inline-block flex-1 h-px border-t border-dashed"
                  style={{ borderColor: 'var(--border-hi)' }}
                />
              </p>
              <div className="flex flex-wrap gap-2.5">
                {TECH_STACK.map((tech, i) => {
                  const rotations = ['-2deg', '1.5deg', '-1deg', '2.5deg', '-1.5deg', '0.5deg'];
                  return (
                    <motion.span
                      key={tech}
                      className="tech-sticker font-mono text-[0.6rem] font-bold tracking-wider px-3 py-1.5 uppercase"
                      style={{
                        border: '1px solid var(--border-hi)',
                        color: 'var(--fg)',
                        transform: `rotate(${rotations[i % rotations.length]})`,
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55 + i * 0.03 }}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
