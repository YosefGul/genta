import { Users, GraduationCap, BookOpen, Layout, Activity, Image, FileText, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react'
import { TypeIcon as type, type LucideIcon } from 'lucide-react'

export interface NavItem {
  name: string;
  icon: LucideIcon;
  url?: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

export const navItems: NavItem[] = [
  { name: 'Akademik Eğitimci', icon: GraduationCap },
  { name: 'Komite Klavuzları', icon: BookOpen },
  { name: 'Komiteler', icon: Layout },
  { name: 'Akış', icon: Activity },
  { name: 'Galeri', icon: Image },
  { name: 'Başvuru', icon: FileText },
];

export const socialLinks: SocialLink[] = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/genta.calistay/' },
];

