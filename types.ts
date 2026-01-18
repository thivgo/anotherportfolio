export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export enum Page {
  ABOUT = 'Sobre',
  RESUME = 'Currículo',
  PORTFOLIO = 'Portfólio',
  CONTACT = 'Contato'
}