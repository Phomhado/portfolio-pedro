'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Modal from './Modal';
import { ContactInfo } from '@/types';

const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'pedro.he.oli10@gmail.com',
    href: 'mailto:pedro.he.oli10@gmail.com',
    icon: FaEnvelope
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+55 (41) 99969-5984',
    href: 'tel:+5541999695984',
    icon: FaPhone
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'github.com/Phomhado',
    href: 'https://github.com/Phomhado',
    icon: FaGithub
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/pedro-he-oli-dev',
    icon: FaLinkedin
  }
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get in Touch">
      <div className="space-y-4">
        {contactInfo.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type === 'email' || contact.type === 'phone' ? undefined : '_blank'}
              rel={contact.type === 'email' || contact.type === 'phone' ? undefined : 'noopener noreferrer'}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span className="h-5 w-5">
                <Icon />
              </span>
              <span>{contact.value}</span>
            </a>
          );
        })}
      </div>
    </Modal>
  );
};

export default ContactModal; 