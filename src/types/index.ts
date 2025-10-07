import {ReactNode} from "react";
import {ComponentType} from "react";

export interface ContactInfo {
  type: 'email' | 'phone' | 'github' | 'linkedin';
  label: string;
  value: string;
  href: string;
  icon: ComponentType;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType;
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