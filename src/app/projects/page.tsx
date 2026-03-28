'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

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

const ProjectRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="project-row block px-6 sm:px-10 lg:px-16 py-10"
    style={{ borderBottom: '1px solid var(--border-hi)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 * index, duration: 0.5 }}
  >
    <div className="flex items-start gap-6 sm:gap-10">
      {/* Number */}
      <span
        className="project-number font-mono font-black leading-none shrink-0 mt-1"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
      >
        {project.number}
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
              className="font-mono text-[0.6rem] font-bold tracking-[0.15em] px-2 py-0.5"
              style={{
                border: '1px solid var(--accent-y)',
                color: 'var(--accent-y)',
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
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.6rem] font-medium tracking-wider px-2 py-1 uppercase"
              style={{
                border: '1px solid var(--border-hi)',
                color: 'var(--muted)',
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
      className="project-github flex items-center gap-2 mt-6"
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
        className="px-6 sm:px-10 lg:px-16 pt-16 pb-14"
        style={{ borderBottom: '1px solid var(--border-hi)' }}
      >
        <motion.span
          className="block font-mono text-xs tracking-[0.25em] uppercase mb-5"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          04 / Projects
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            className="font-mono font-black tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              color: 'var(--fg)',
              clipPath: 'inset(0)',
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
      </div>

      {/* Projects list */}
      <div style={{ borderTop: '1px solid var(--border-hi)' }}>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        className="px-6 sm:px-10 lg:px-16 py-12"
        style={{ borderTop: '1px solid var(--border-hi)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p
          className="font-mono text-xs tracking-wider"
          style={{ color: 'var(--muted)' }}
        >
          More projects coming. Constantly building.
        </p>
      </motion.div>
    </main>
  );
}
