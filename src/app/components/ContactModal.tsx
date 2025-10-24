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
              className="flex cursor-pointer items-center space-x-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-5 w-5">
                <Icon className="h-full w-full" />
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