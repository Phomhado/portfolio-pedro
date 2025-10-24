'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

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
    SiC,
} from 'react-icons/si';

// === Types ===
export type SkillItem = {
    name: string;
    icon: IconType;
    color: string;
};

export type SkillCardProps = {
    title: string;
    items: SkillItem[];
};

const Skills = () => {
    // You can keep these as const to preserve literal types for name/color.
    const webdev: SkillItem[] = [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Styled Components', icon: SiStyledcomponents, color: '#DB7093' },
        { name: 'Ruby on Rails', icon: SiRuby, color: '#9d0000' },
    ];

    const lowlevel: SkillItem[] = [
        { name: 'Rust', icon: SiRust, color: '#f74c00' },
        { name: 'C', icon: SiC, color: '#00108c' },
        { name: 'C++', icon: SiCplusplus, color: '#00108c' },
    ];

    const tools: SkillItem[] = [
        { name: 'AWS', icon: SiAmazon, color: '#232F3E' },
        { name: 'Design Systems', icon: SiFigma, color: '#F24E1E' },
        { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ];

    const testing: SkillItem[] = [
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Testing Library', icon: SiTestinglibrary, color: '#E33332' },
        { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
        { name: 'RSpec', icon: SiRubyonrails, color: '#CE2D2D' },
    ];

    const development: SkillItem[] = [
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
        { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
        { name: 'Prettier', icon: SiPrettier, color: '#F7B93E' },
        { name: 'npm', icon: SiNpm, color: '#CB3837' },
        { name: 'Yarn', icon: SiYarn, color: '#2C8EBB' },
        { name: 'Cargo', icon: SiRust, color: '#b56d00' },
    ];

    const databases: SkillItem[] = [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    } as const;

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    } as const;

    const SkillCard = ({ title, items }: SkillCardProps) => (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card text-card-foreground rounded-2xl p-8 shadow-lg shadow-black/5"
        >
            <h3 className="mb-6 text-2xl font-semibold text-foreground">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {items.map((item) => (
                    <motion.div key={item.name} variants={itemVariants} className="group">
                        <div className="bg-card hover:bg-card-soft flex flex-col items-center rounded-xl p-4 transition-colors duration-200">
                            <item.icon className="mb-3 h-12 w-12" style={{ color: item.color }} />
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{item.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="bg-page py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Skills & Expertise</h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        Technologies and tools I use to bring ideas to life! As a Software Engineer, I spend much time studying Algorithms, training my problem-solving skills and also training my way of thinking into how a computer thinks! These tech I listed below are tools, and as tools, I know maaany more Programming languages, Dev tools... But I decided to list only those which I am proficient and more comfortable working with!
                        <br />
                        <br />
                        My favorite languages are: Rust (by far my favorite!), C++ and Ruby on Rails. I also like JS/TS, specially how versatile JS is! But I have way more fun creating something with C and C++ using Arduino, solving challenges with Rust or even doing Full-Stack web apps with Rails
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
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
