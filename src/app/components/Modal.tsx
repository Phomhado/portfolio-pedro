'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalProps } from '@/types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0"
            style={{ background: 'rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full mx-4 max-w-md p-8"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-hi)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 font-mono text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent-r)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
              }}
              aria-label="Close modal"
            >
              [ ESC ]
            </button>

            {/* Content */}
            <div className="space-y-6 mt-2">
              {title && (
                <h2
                  className="font-mono font-black text-xl tracking-tight"
                  style={{ color: 'var(--fg)' }}
                >
                  {title}
                </h2>
              )}
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
