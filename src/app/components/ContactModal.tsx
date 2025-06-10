'use client';

import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent scrolling when modal is open
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
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
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
          <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          
          <div className="space-y-4">
            <a
              href="mailto:pedro.he.oli10@gmail.com"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <FaEnvelope className="h-5 w-5" />
              <span>pedro.he.oli10@gmail.com</span>
            </a>

            <a
              href="tel:+5541999695984"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <FaPhone className="h-5 w-5" />
              <span>+55 (41) 99969-5984</span>
            </a>

            <a
              href="https://github.com/Phomhado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <FaGithub className="h-5 w-5" />
              <span>github.com/Phomhado</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-henrique-de-oliveira-b4b984239"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <FaLinkedin className="h-5 w-5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 