'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const clipReveal = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: (i: number) => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

export default function CallToAction() {
  return (
    <section
      className="py-24 px-6 sm:px-10 lg:px-16"
      style={{
        background: 'var(--accent-r)',
        borderBottom: '1px solid var(--border-hi)',
      }}
    >
      {/* Section label */}
      <div className="overflow-hidden mb-8">
        <motion.span
          className="block font-mono text-xs tracking-[0.25em] uppercase"
          style={{ color: 'rgba(10,10,10,0.5)' }}
          custom={0}
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          03 / Contact
        </motion.span>
      </div>

      {/* Heading */}
      <div className="overflow-hidden mb-12">
        <motion.h2
          className="font-mono font-black tracking-tight leading-none"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            color: 'var(--bg)',
          }}
          custom={1}
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          LET&apos;S TALK
        </motion.h2>
      </div>

      {/* Sub text */}
      <div className="overflow-hidden mb-14">
        <motion.p
          className="font-mono text-sm max-w-md"
          style={{ color: 'rgba(10,10,10,0.65)' }}
          custom={2}
          variants={clipReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore my journey as a dev and see some of my projects.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-start gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <Link
          href="/experience"
          className="group font-mono text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-200 w-full sm:w-auto text-center sm:text-left"
          style={{
            background: 'var(--bg)',
            color: 'var(--fg)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = 'var(--fg)';
            el.style.color = 'var(--bg)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'var(--bg)';
            el.style.color = 'var(--fg)';
          }}
        >
          View Experience ↗
        </Link>

        <Link
          href="/projects"
          className="group font-mono text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 transition-all duration-200 w-full sm:w-auto text-center sm:text-left"
          style={{
            border: '1px solid var(--bg)',
            color: 'var(--bg)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = 'var(--bg)';
            el.style.color = 'var(--accent-r)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'transparent';
            el.style.color = 'var(--bg)';
          }}
        >
          See Projects ↗
        </Link>
      </motion.div>
    </section>
  );
}
