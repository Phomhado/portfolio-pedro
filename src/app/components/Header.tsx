'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactModal from './ContactModal';
import ThemeToggle from './ThemeToggle';
import { NAV_ITEMS } from '@/constants';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

    const handleContactModalOpen = () => {
        setIsContactModalOpen(true);
        setIsMenuOpen(false);
    };

    const handleContactModalClose = () => setIsContactModalOpen(false);

    return (
        <>
            <header
                className={`fixed z-50 w-full border-b border-muted backdrop-blur-md shadow-sm ${className ?? ''}`}
                style={{ background: 'var(--header-background)' }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex cursor-pointer items-center">
                            <span className="bg-blue-600 bg-clip-text text-2xl font-bold text-transparent">
                                PEDRO OLIVEIRA
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center space-x-4 md:flex">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <ThemeToggle />
                            <button
                                onClick={handleContactModalOpen}
                                className="bg-primary text-primary-foreground hover:bg-primary-soft cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className="cursor-pointer rounded-md p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground focus:outline-none md:hidden"
                            onClick={handleMenuToggle}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="hover:bg-card-soft block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="px-3 py-2">
                                    <ThemeToggle className="w-full" />
                                </div>
                                <button
                                    onClick={handleContactModalOpen}
                                    className="hover:bg-card-soft w-full cursor-pointer rounded-md px-3 py-2 text-left text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={handleContactModalClose}
            />
        </>
    );
};

export default Header;
