import {ReactNode} from "react";
import {ComponentType} from "react";

export interface ContactInfo {
  type: 'email' | 'phone' | 'github' | 'linkedin';
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
} 