'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-foreground">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h1
              className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              >
                Pedro Oliveira
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-muted-foreground sm:text-xl md:text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              A Software Engineer that loves programming and creating new stuff
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <motion.a
                href="https://github.com/Phomhado"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-muted bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card-soft"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pedro-he-oli-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-soft flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-primary-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I started coding back in 2019/2020. I was in the middle of high school and after writing some code at my Robotics class (Lego Mindstorm Ev3! I used to love it) I decided to give it a try on my computer at home. That is when I learnt HTML and CSS mainly. I decided to pursue a Software Engineering Bachelor's degree after I finished high school and well, the rest is history. I work as a Web Dev, but I also love low-level programming and cool concepts like Robotics, Embedded Systems, Sistems Engineering...
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Call to Action Section */}
      <CallToAction />
    </main>
  );
}
