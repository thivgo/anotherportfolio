export type Language = 'pt' | 'en';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: {
    pt: string;
    en: string;
  };
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  role: {
    pt: string;
    en: string;
  };
  company: string;
  period: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export interface Education {
  id: number;
  degree: {
    pt: string;
    en: string;
  };
  institution: string;
  period: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export interface Service {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  icon: string;
}

export enum Page {
  ABOUT = 'ABOUT',
  RESUME = 'RESUME',
  PORTFOLIO = 'PORTFOLIO',
  CONTACT = 'CONTACT'
}