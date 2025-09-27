'use client';

import { motion } from 'framer-motion';

import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTailwindcss, 
  SiStyledcomponents,
  SiGit,
  SiGithubactions,
  SiVercel,
  SiFigma,
  SiJest,
  SiTestinglibrary,
  SiRedux,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiNpm,
  SiYarn,
  SiDocker,
  SiPostman,
  SiStorybook,
  SiRuby,
  SiAmazon,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiRubyonrails,
  SiRust,
  SiCplusplus,
  SiC
} from 'react-icons/si';


const Skills = () => {
  const webdev = [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
    { name: 'Ruby on Rails', icon: SiRuby, color: '#9d0000'}
  ]; 

  const lowlevel = [
    { name: 'Rust', icon: SiRust, color: '#f74c00'},
    { name: 'C', icon: SiC, color: '#00108c'},
    { name: 'C++', icon: SiCplusplus, color: '#00108c'},
  ]

  const tools = [
    { name: 'AWS', icon: SiAmazon, color: '#232F3E' },
    { name: 'Design Systems', icon: SiFigma, color: '#F24E1E' },
    { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ];

  const testing = [
    { name: 'Jest', icon: SiJest, color: '#C21325' },
    { name: 'Testing Library', icon: SiTestinglibrary, color: '#E33332' },
    { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
    { name: 'RSpec',  icon: SiRubyonrails, color: '#CE2D2D' },
  ];

  const development = [
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
    { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
    { name: 'npm', icon: SiNpm, color: '#CB3837' },
    { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
    { name: 'Cargo', icon: SiRust, color: '#b56d00'}
  ];

  const databases = [
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCard = ({ title, items }: { title: string; items: any[] }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            className="group"
          >
            <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
              <item.icon 
                className="w-12 h-12 mb-3" 
                style={{ color: item.color }}
              />
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life! As a Software Engineer, I spend much time studying Algorithms, training my problem-solving skills and also training my way of thinking into how a computer thinks! These tech I listed below are tools, and as tools, I know maaany more Programming languages, Dev tools... But I decided to list only those which I am proficient and more comfortable working with!
            <br />
            <br />
            My favorite languages are: Rust (by far my favorite!), C++ and Ruby on Rails. I also like JS/TS, specially how versatile JS is! But I have way more fun creating something with C and C++ using Arduino, solving challenges with Rust or even doing Full-Stack web apps with Rails
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SkillCard title="Web Development" items={webdev} />
          <SkillCard title="Low-Level" items={lowlevel} />
          <SkillCard title="Tools & Practices" items={tools} />
          <SkillCard title="Testing & Quality" items={testing} />
          <SkillCard title="Development Tools" items={development} />
          <SkillCard title="Databases" items={databases} />
        </div>
      </div>
    </section>
  );
};

export default Skills; 