'use client';

import Link from 'next/link';
import { useState } from 'react';
import ContactModal from './ContactModal';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleContactModalOpen = (): void => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleContactModalClose = (): void => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 ${className ?? ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                PEDRO OLIVEIRA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/experience" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Experience
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                Projects
              </Link>
              <button 
                onClick={handleContactModalOpen}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none cursor-pointer"
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
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/experience"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="/projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <button
                  onClick={handleContactModalOpen}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
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