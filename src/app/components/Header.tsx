'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';
import { NAV_ITEMS } from '@/constants';

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="group relative font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200"
    style={{ color: 'var(--muted)' }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
  >
    {label}
    <span
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      style={{ background: 'var(--accent-r)' }}
    />
  </Link>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const handleContactOpen = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleContactClose = () => setIsContactModalOpen(false);

  return (
    <>
      <header
        className="fixed w-full z-50"
        style={{
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border-hi)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-mono text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ color: 'var(--fg)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-r)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
            >
              PO<span style={{ color: 'var(--accent-r)' }}>_</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
              <button
                onClick={handleContactOpen}
                className="font-mono text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 transition-all duration-200"
                style={{
                  border: '1px solid var(--accent-r)',
                  color: 'var(--accent-r)',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'var(--accent-r)';
                  el.style.color = 'var(--bg)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'transparent';
                  el.style.color = 'var(--accent-r)';
                }}
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--muted)' }}
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center px-10"
            style={{ background: 'var(--bg)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-mono text-4xl font-bold tracking-tight transition-colors duration-200"
                    style={{ color: 'var(--fg)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-r)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.07 + 0.1 }}
              >
                <button
                  onClick={handleContactOpen}
                  className="font-mono text-4xl font-bold tracking-tight transition-colors duration-200 text-left"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-r)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
                >
                  Contact
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactModalOpen} onClose={handleContactClose} />
    </>
  );
}
