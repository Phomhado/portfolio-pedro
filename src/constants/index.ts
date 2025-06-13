import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ContactInfo, NavItem } from '@/types';

export const CONTACT_INFO: ContactInfo[] = [
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
    href: 'https://www.linkedin.com/in/pedro-henrique-de-oliveira-b4b984239',
    icon: FaLinkedin
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/experience',
    label: 'Experience'
  },
  {
    href: '/projects',
    label: 'Projects'
  }
]; 