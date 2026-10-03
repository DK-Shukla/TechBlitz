// ============================================================
// TechBlitz 2026 — Data Type Definitions
// ============================================================

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  company: string;
  domain: string;
  sessions: number;
  linkedin?: string;
  image: string;
  bio?: string;
  sessionTopics?: string[];
}

export interface Session {
  id: string;
  number: number;
  date?: string;
  time?: string;
  topic?: string;
  title?: string;
  gmeetLink?: string;
  domain?: string;
  speakerId?: string;
  speakerName?: string;
  duration?: string;
  description?: string;
}

export interface Domain {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface OutreachPartner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  description?: string;
  instagram?: string;
  website?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'team' | 'inauguration';
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyLogo {
  id: string;
  name: string;
  logo: string;
}
