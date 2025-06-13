export interface ContactInfo {
  type: 'email' | 'phone' | 'github' | 'linkedin';
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
} 