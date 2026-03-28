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

// ─── Types ────────────────────────────────────────────────────────────────────
type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
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
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
];

// ─── Skill Item ───────────────────────────────────────────────────────────────
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
    className="relative overflow-hidden p-8"
    style={{
      borderRight: '1px solid var(--border-hi)',
      borderBottom: '1px solid var(--border-hi)',
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
  >
    {/* Background number */}
    <span
      className="absolute top-2 right-4 font-mono font-black select-none pointer-events-none leading-none"
      style={{
        fontSize: '5rem',
        color: 'transparent',
        WebkitTextStroke: '1px var(--border-hi)',
      }}
    >
      {String(index + 1).padStart(2, '0')}
    </span>

    {/* Category label */}
    <p
      className="font-mono text-xs tracking-[0.2em] uppercase mb-6 relative z-10"
      style={{ color: 'var(--muted)' }}
    >
      {String(index + 1).padStart(2, '0')} · {category.title}
    </p>

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
      className="py-20 px-6 sm:px-10 lg:px-16"
      style={{ borderBottom: '1px solid var(--border-hi)' }}
    >
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="font-mono text-xs tracking-[0.25em] uppercase block mb-4"
          style={{ color: 'var(--muted)' }}
        >
          02 / Skills
        </span>
        <h2
          className="font-mono font-black tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--fg)',
          }}
        >
          SKILLS &amp;{' '}
          <span style={{ color: 'var(--accent-r)' }}>EXPERTISE</span>
        </h2>
        <div
          className="mt-6 max-w-xl text-sm leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Technologies are tools. My core is Full-Stack Web Development with
          TypeScript and Ruby on Rails. And I have a deep passion in Systems
          Programming with Rust and C++.
        </div>
      </motion.div>

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
