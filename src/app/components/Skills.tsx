'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiTypescript, SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiStyledcomponents, SiGit, SiGithubactions, SiVercel, SiFigma,
  SiJest, SiTestinglibrary, SiRedux, SiWebpack, SiEslint, SiPrettier,
  SiNpm, SiYarn, SiDocker, SiPostman, SiStorybook, SiRuby, SiAmazon,
  SiMysql, SiMongodb, SiPostgresql, SiRubyonrails, SiRust, SiCplusplus, SiC,
} from 'react-icons/si';
import SectionMarker from './SectionMarker';

// ─── Types ────────────────────────────────────────────────────────────────────
type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
  badge?: { text: string; color: 'r' | 'y' | 'g' };
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    badge: { text: '// FAVORITE', color: 'r' },
    items: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#F0F0F0' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Styled Comp.', icon: SiStyledcomponents, color: '#DB7093' },
      { name: 'Ruby on Rails', icon: SiRuby, color: '#CC342D' },
    ],
  },
  {
    title: 'Low-Level',
    badge: { text: '// LEARNING', color: 'y' },
    items: [
      { name: 'Rust', icon: SiRust, color: '#F74C00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    ],
  },
  {
    title: 'Tools & Practices',
    items: [
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Design Systems', icon: SiFigma, color: '#F24E1E' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Vercel', icon: SiVercel, color: '#F0F0F0' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    title: 'Testing & Quality',
    items: [
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'Testing Library', icon: SiTestinglibrary, color: '#E33332' },
      { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
      { name: 'RSpec', icon: SiRubyonrails, color: '#CE2D2D' },
    ],
  },
  {
    title: 'Dev Tools',
    items: [
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
      { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
      { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
      { name: 'Cargo', icon: SiRust, color: '#F74C00' },
    ],
  },
  {
    title: 'Databases',
    badge: { text: '// CORE', color: 'g' },
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
];

const TOTAL_SKILLS = CATEGORIES.reduce((acc, c) => acc + c.items.length, 0);

const BADGE_COLOR: Record<'r' | 'y' | 'g', string> = {
  r: 'var(--accent-r)',
  y: 'var(--accent-y)',
  g: 'var(--accent-g)',
};

// ─── Skill Tile ───────────────────────────────────────────────────────────────
const SkillTile = ({ item }: { item: SkillItem }) => (
  <div
    className="skill-tile flex flex-col items-center justify-center p-4 gap-2"
    style={{
      borderRight: '1px solid var(--border-hi)',
      borderBottom: '1px solid var(--border-hi)',
    }}
  >
    <item.icon
      className="w-7 h-7 skill-tile-icon"
      style={{ color: item.color }}
    />
    <span
      className="skill-tile-label font-mono text-[0.6rem] font-medium tracking-wider text-center leading-tight"
      style={{ color: 'var(--muted)' }}
    >
      {item.name}
    </span>
  </div>
);

// ─── Skill Card ───────────────────────────────────────────────────────────────
const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.div
    className="relative p-8 pt-14"
    style={{
      borderRight: '1px solid var(--border-hi)',
      borderBottom: '1px solid var(--border-hi)',
    }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
  >
    {/* Massive escaping outline number */}
    <motion.span
      className="absolute font-mono font-black select-none pointer-events-none leading-none"
      style={{
        fontSize: 'clamp(5rem, 12vw, 9rem)',
        color: 'transparent',
        WebkitTextStroke: '1.5px var(--border-hi)',
        top: '-1.5rem',
        right: '-0.5rem',
        transform: index % 2 === 0 ? 'rotate(-3deg)' : 'rotate(4deg)',
        zIndex: 0,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 + 0.2 }}
    >
      {String(index + 1).padStart(2, '0')}
    </motion.span>

    {/* Category label + optional sticker */}
    <div className="relative z-10 flex items-center gap-3 flex-wrap mb-6">
      <p
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: 'var(--muted)' }}
      >
        <span style={{ color: 'var(--accent-r)' }}>[{String(index + 1).padStart(2, '0')}]</span>{' '}
        {category.title}
      </p>
      {category.badge && (
        <motion.span
          className="hidden sm:inline-block font-mono text-[0.55rem] font-bold tracking-[0.2em] uppercase px-2 py-1"
          style={{
            background: BADGE_COLOR[category.badge.color],
            color: 'var(--bg)',
            transform: index % 2 === 0 ? 'rotate(-4deg)' : 'rotate(3deg)',
            boxShadow: '2px 2px 0 0 var(--bg)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 + 0.4 }}
        >
          {category.badge.text}
        </motion.span>
      )}
    </div>

    {/* Skills grid */}
    <div
      className="grid grid-cols-3 sm:grid-cols-4 relative z-10"
      style={{ borderLeft: '1px solid var(--border-hi)', borderTop: '1px solid var(--border-hi)' }}
    >
      {category.items.map((item) => (
        <SkillTile key={item.name} item={item} />
      ))}
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-10 lg:px-16"
      style={{ borderBottom: '1px solid var(--border-hi)' }}
    >
      {/* Header */}
      <div className="mb-14">
        <SectionMarker code="02" label="SKILLS_REGISTRY" ext="json" />
        <motion.h2
          className="font-mono font-black tracking-tight mt-3"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--fg)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SKILLS &amp;{' '}
          <span style={{ color: 'var(--accent-r)' }}>EXPERTISE</span>
        </motion.h2>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6">
          <p
            className="max-w-xl text-sm leading-relaxed"
            style={{ color: 'var(--muted)' }}
          >
            Technologies are tools. My core is Full-Stack Web Development with
            TypeScript and Ruby on Rails. And I have a deep passion in Systems
            Programming with Rust and C++.
          </p>
          {/* Live counter */}
          <motion.div
            className="font-mono text-[0.65rem] tracking-[0.2em] uppercase shrink-0"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span style={{ color: 'var(--border-hi)' }}>[</span>
            <span style={{ color: 'var(--accent-g)' }}> {TOTAL_SKILLS} </span>
            TECHNOLOGIES_TRACKED
            <span style={{ color: 'var(--border-hi)' }}> ]</span>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: '1px solid var(--border-hi)', borderLeft: '1px solid var(--border-hi)' }}
      >
        {CATEGORIES.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
