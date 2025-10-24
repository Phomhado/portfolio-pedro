'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 'devotional-api',
    title: 'Devotional API',
    description: 'A RESTful API built with Ruby that allows users to perform CRUD operations on devotionals. Each devotional includes a verse, a quick message, and a title, providing a complete spiritual resource management system. (P.S: For now I need to add all devotionals manually, but that will change soon)',
    technologies: ['Ruby', 'Rails', 'REST API', 'CRUD Operations'],
    githubUrl: 'https://github.com/Phomhado/devotional-api',
  },
  {
    id: 'todo-webapp',
    title: 'To-Do Webapp (In progress)',
    description: 'A full-stack to-do application (in progress) with a Ruby on Rails/PostgreSQL backend and a TypeScript/Next.js frontend. Features include user authentication (login), JWT-based security, and full CRUD operations for managing tasks.',
    technologies: ['Ruby', 'Rails', 'PostgreSQL', 'TypeScript', 'Next.js', 'JWT', 'CRUD', 'Authentication'],
    githubUrl: 'https://github.com/Phomhado/todo-app', 
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-page pt-16 text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.h1
            className="mb-6 text-4xl font-bold md:text-6xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-3xl text-xl text-muted-foreground"
          >
            Here are some of the projects I've built! Some of them are still being built, so be patient!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="bg-card text-card-foreground overflow-hidden rounded-xl border border-muted shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-muted bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-muted bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card-soft"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-soft flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-muted-foreground">
            More projects coming soon! I'm constantly working on new ideas and learning new technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/experience"
              className="bg-primary hover:bg-primary-soft rounded-lg px-6 py-3 text-primary-foreground transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-muted bg-card px-6 py-3 text-foreground transition-colors hover:bg-card-soft"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 