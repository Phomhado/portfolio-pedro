'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
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
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
                  <span className="text-sm text-gray-500">November 2023 - Present</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-2">Banco Bari</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Main Responsibilities:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
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
                    <h5 className="font-semibold text-gray-800 mb-2">Notable Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Co-architected Barihaus, a React Design System based on Ant Design and Tailwind CSS, utilizing atomic design principles. Established a centralized Design Token system to enforce UI consistency and reduce frontend development cycles by eliminating hard-coded values and accelerating component reuse through Storybook</li>
                      <li>Developed a cross-platform NPM logging library in collaboration with Backend engineers, implementing 4 severity levels (Warning, Fatal, Error, Info) and automated DataDog integration. This improved production incident response time by providing real-time telemetry on Browser metadata, User IDs, and environment-specific logs across multiple products."</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Styled Components
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
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