'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionMarker from '../components/SectionMarker';

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  status?: 'IN PROGRESS';
}

const PROJECTS: Project[] = [
  {
    id: 'devotional-api',
    number: '01',
    title: 'DEVOTIONAL API',
    description:
      'A RESTful API built with Ruby that allows users to perform CRUD operations on devotionals. Each devotional includes a verse, a quick message, and a title.',
    technologies: ['Ruby', 'Rails', 'REST API', 'CRUD'],
    githubUrl: 'https://github.com/Phomhado/devotional-api',
  },
  {
    id: 'todo-webapp',
    number: '02',
    title: 'TO-DO WEBAPP',
    description:
      'Full-stack to-do application with a Ruby on Rails/PostgreSQL backend and a TypeScript/Next.js frontend. Features user authentication, JWT-based security, and full CRUD operations.',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TypeScript', 'Next.js', 'JWT'],
    githubUrl: 'https://github.com/Phomhado/todo-app',
    status: 'IN PROGRESS',
  },
  {
    id: 'sentinel',
    number: '03',
    title: 'SENTINEL',
    description:
      'Task Manager webapp with Rust/Tauri backend and React/TypeScript frontend. Monitor memory, CPU, disk usage and terminate tasks with live system updates.',
    technologies: ['Rust', 'Tauri', 'TypeScript', 'React', 'Vite'],
    githubUrl: 'https://github.com/Phomhado/sentinel',
    status: 'IN PROGRESS',
  },
];

const TAG_ROTATIONS = ['-2deg', '1.5deg', '-1deg', '2.5deg', '-1.5deg', '1deg'];

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="project-row block px-6 sm:px-10 lg:px-16 py-12 relative overflow-hidden"
    style={{ borderBottom: '1px solid var(--border-hi)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 * index, duration: 0.5 }}
  >
    {/* Massive outline number */}
    <span
      className="absolute font-mono font-black select-none pointer-events-none leading-none project-number"
      style={{
        fontSize: 'clamp(6rem, 16vw, 14rem)',
        color: 'transparent',
        WebkitTextStroke: '1.5px var(--border-hi)',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-50%) rotate(-5deg)',
        zIndex: 0,
      }}
    >
      {project.number}
    </span>

    <div className="relative z-10 flex items-start gap-6 sm:gap-10">
      {/* Inline number */}
      <span
        className="font-mono font-black leading-none shrink-0 mt-1"
        style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          color: 'var(--accent-r)',
        }}
      >
        [{project.number}]
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h2
            className="font-mono font-black tracking-tight"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
              color: 'var(--fg)',
            }}
          >
            {project.title}
          </h2>
          {project.status && (
            <span
              className="font-mono text-[0.6rem] font-bold tracking-[0.15em] px-2 py-0.5 slow-spin-fast inline-block"
              style={{
                border: '2px solid var(--accent-y)',
                color: 'var(--accent-y)',
                background: 'var(--bg)',
                boxShadow: '2px 2px 0 0 var(--accent-y)',
                transformOrigin: 'center',
                animationDuration: '12s',
              }}
            >
              {project.status}
            </span>
          )}
        </div>

        <p
          className="text-sm leading-relaxed mb-5 max-w-2xl"
          style={{ color: 'var(--muted)' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className="project-tech-tag font-mono text-[0.6rem] font-medium tracking-wider px-2 py-1 uppercase"
              style={{
                border: '1px solid var(--border-hi)',
                color: 'var(--muted)',
                transform: `rotate(${TAG_ROTATIONS[i % TAG_ROTATIONS.length]})`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="shrink-0 flex items-center justify-center mt-2">
        <span
          className="project-arrow font-mono font-bold"
          style={{ fontSize: '1.5rem' }}
        >
          ↗
        </span>
      </div>
    </div>

    {/* GitHub indicator */}
    <div
      className="project-github relative z-10 flex items-center gap-2 mt-6"
      style={{ color: 'var(--muted)' }}
    >
      <FaGithub className="w-3.5 h-3.5" />
      <span className="font-mono text-xs tracking-wider">View on GitHub</span>
    </div>
  </motion.a>
);

export default function Projects() {
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
          // PROJECT_REGISTRY.git
        </span>

        <SectionMarker code="04" label="PROJECTS_INDEX" ext="json" />

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
            PROJECTS
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 text-sm max-w-md"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Things I&apos;ve built. Some still being hammered together.
        </motion.p>

        <motion.p
          className="mt-4 font-mono text-[0.65rem] tracking-[0.2em] uppercase"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <span style={{ color: 'var(--border-hi)' }}>[</span>
          <span style={{ color: 'var(--accent-g)' }}> {PROJECTS.length} </span>
          REPOSITORIES
          <span style={{ color: 'var(--border-hi)' }}> ]</span>
          <span style={{ color: 'var(--border-hi)' }}> · </span>
          <span style={{ color: 'var(--accent-y)' }}>
            {PROJECTS.filter((p) => p.status === 'IN PROGRESS').length}
          </span>{' '}
          IN_PROGRESS
        </motion.p>
      </div>

      {/* Projects list */}
      <div style={{ borderTop: '1px solid var(--border-hi)' }}>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        className="px-6 sm:px-10 lg:px-16 py-12 flex items-center gap-3"
        style={{ borderTop: '1px solid var(--border-hi)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full blink-strong"
          style={{ background: 'var(--accent-g)' }}
        />
        <p
          className="font-mono text-xs tracking-wider"
          style={{ color: 'var(--muted)' }}
        >
          More projects incoming. Constantly building.
        </p>
      </motion.div>
    </main>
  );
}
