'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <main className="min-h-screen bg-page pt-16 text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-4xl font-bold">
            Professional Experience
          </h1>
          
          {/* Experience Timeline */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 border-l-2 border-blue-600"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
              <div className="bg-card text-card-foreground rounded-lg p-6 shadow-sm shadow-black/10">
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">Frontend Developer</h3>
                  <span className="text-sm text-muted-foreground">November 2023 - Present</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-2">Banco Bari</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="mb-2 font-semibold text-foreground">Main Responsibilities:</h5>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                      <li>Create and edit components and webpages</li>
                      <li>Develop landing pages</li>
                      <li>Debug and fix errors in the application</li>
                      <li>Implement responsive designs and ensure cross-browser compatibility</li>
                      <li>Optimize application performance and loading times</li>
                      <li>Collaborate with UX/UI designers to implement pixel-perfect interfaces</li>
                      <li>Write clean, maintainable, and well-documented code</li>
                      <li>Participate in code reviews and maintain code quality standards</li>
                      <li>Work closely with backend developers to integrate APIs and services</li>
                      <li>Stay up-to-date with the latest frontend technologies and best practices</li>
                      <li>Configure and maintain CI/CD pipelines for automated testing and deployment</li>
                      <li>Set up and manage automated build processes and deployment workflows</li>
                      <li>Manage version control workflows and branching strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 font-semibold text-foreground">Notable Achievements:</h5>
                    <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                      <li>Created and maintained design system library</li>
                      <li>Developed logger library for better debugging and monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    React
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    Next.js
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    TypeScript
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    Styled Components
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    Git
                  </span>
                  <span className="rounded-full border border-muted bg-card px-3 py-1 text-sm text-muted-foreground">
                    CI/CD
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 