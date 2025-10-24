'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import {NAV_ITEMS} from "@/constants";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-muted bg-card text-muted-foreground">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-blue-600 bg-clip-text text-transparent">
                            PEDRO OLIVEIRA
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Coding it and loving it!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {/* Skills link extra */}
                            <li>
                                <Link
                                    href="/#skills"
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Skills
                                </Link>
                            </li>

                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Connect</h4>
                        <div className="flex space-x-4 text-foreground">
                            <motion.a
                                href="https://github.com/Phomhado"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/pedro-he-oli-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </motion.a>
                            <motion.a
                                href="mailto:pedro.he.oli10@gmail.com"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEnvelope className="w-6 h-6" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-muted mt-12 border-t pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {currentYear} Pedro Oliveira. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
