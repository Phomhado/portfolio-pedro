'use client';

import Modal from './Modal';
import { CONTACT_INFO } from '@/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="GET IN TOUCH">
      <div className="space-y-3 pt-2">
        {CONTACT_INFO.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.type}
              href={contact.href}
              target={
                contact.type === 'email' || contact.type === 'phone'
                  ? undefined
                  : '_blank'
              }
              rel={
                contact.type === 'email' || contact.type === 'phone'
                  ? undefined
                  : 'noopener noreferrer'
              }
              className="flex items-center gap-3 py-3 px-4 font-mono text-xs tracking-wider uppercase transition-all duration-200"
              style={{
                border: '1px solid var(--border-hi)',
                color: 'var(--muted)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--accent-r)';
                el.style.color = 'var(--accent-r)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--border-hi)';
                el.style.color = 'var(--muted)';
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{contact.value}</span>
            </a>
          );
        })}
      </div>
    </Modal>
  );
};

export default ContactModal;
