'use client';

import Modal from './Modal';
import {CONTACT_INFO} from "@/constants";


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get in Touch">
      <div className="space-y-4">
        {CONTACT_INFO.map((contact) => {
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