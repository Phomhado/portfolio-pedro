'use client';

import { motion } from 'framer-motion';

interface Props {
  code: string; // e.g. "02"
  label: string; // e.g. "SKILLS_REGISTRY"
  ext?: string; // e.g. "json"
}

export default function SectionMarker({ code, label, ext = 'tsx' }: Props) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-4"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span
        className="font-mono text-[0.65rem] tracking-[0.25em] uppercase pulse-bracket"
        style={{ color: 'var(--accent-r)' }}
      >
        [ SECTION_{code}
      </span>
      <span
        className="font-mono text-[0.65rem] tracking-[0.25em] uppercase"
        style={{ color: 'var(--muted)' }}
      >
        // {label}.{ext} ]
      </span>
      <span
        className="hidden sm:inline-block flex-1 h-px"
        style={{ background: 'var(--border-hi)' }}
      />
    </motion.div>
  );
}
