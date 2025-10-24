'use client';

import { useEffect } from 'react';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="bg-card text-card-foreground relative mx-4 w-full max-w-md transform rounded-2xl border border-muted p-8 shadow-2xl shadow-black/20 transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close modal"
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
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-6">
          {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; 