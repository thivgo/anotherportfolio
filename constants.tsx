import { Experience, Education, Project, Service, Skill } from './types';
import { Layout, Code, Smartphone, Palette } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Thiago Maués",
  role: "Estudante de Ciência da Computação",
  email: "thiago.mauess@gmail.com",
  location: "Brasil",
  github: "github.com/thivgo",
  linkedin: "www.linkedin.com/in/thiagomvues",
  avatar: "https://github.com/thivgo.png",
  bio: "Estudante de Ciência da Computação com base sólida em desenvolvimento web, UI/UX e fundamentos de programação. Experiência prática em projetos front-end, versionamento com Git e foco em usabilidade, desempenho e código limpo. Busca oportunidade de estágio ou vaga júnior para crescimento técnico e profissional."
};

export const SERVICES: Service[] = [
  {
    title: "UI/UX Design",
    description: "Criação de interfaces intuitivas e experiências de usuário envolventes, desde wireframes até protótipos de alta fidelidade.",
    icon: "layout"
  },
  {
    title: "Web Design",
    description: "Desenvolvimento de layouts modernos e atraentes, priorizando a estética visual e a identidade da marca.",
    icon: "palette"
  },
  {
    title: "Web Development",
    description: "Construção de sites responsivos e performáticos utilizando React e tecnologias modernas.",
    icon: "code"
  },
  {
    title: "Mobile First",
    description: "Abordagem focada em garantir a melhor experiência em dispositivos móveis.",
    icon: "smartphone"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Bacharelado em Ciência da Computação",
    institution: "Faculdade Ideal Wyden - FACI",
    period: "3º Semestre",
    description: "Foco em Lógica e Algoritmos, Programação, Estruturas de Dados, Sistemas Operacionais, Redes de Computadores, Inteligência Artificial, Segurança da Informação e Banco de Dados."
  },
  {
    id: 2,
    degree: "Profissão UI/UX Designer",
    institution: "Escola Britânica de Artes Criativas & Tecnologia - EBAC",
    period: "Concluído em 2025",
    description: "Especialização completa em User Experience e User Interface Design, incluindo pesquisa, arquitetura de informação e prototipagem."
  },
  {
    id: 3,
    degree: "Curso de Nuxt.js",
    institution: "Udemy",
    period: "Concluído em 2025",
    description: "Desenvolvimento de aplicações web completas utilizando o framework Nuxt.js (Vue.js), focando em renderização do lado do servidor (SSR) e geração de sites estáticos."
  },
  {
    id: 4,
    degree: "Curso de React",
    institution: "Udemy",
    period: "Concluído em 2024",
    description: "Desenvolvimento de interfaces dinâmicas com React.js, incluindo manipulação de estado, hooks, e integração com APIs."
  },
  {
    id: 5,
    degree: "Curso de Python",
    institution: "Universidade de São Paulo - USP",
    period: "Concluído em 2023",
    description: "Fundamentos de Ciência da Computação, lógica de programação e desenvolvimento de algoritmos com Python."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Freelancer",
    company: "Design e Web",
    period: "Atualmente",
    description: "Desenvolvimento de interfaces, layouts, identidades visuais e páginas web, com foco em clareza visual e experiência do usuário."
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML5 / CSS3", level: 90 },
  { name: "JavaScript / React", level: 80 },
  { name: "Git / GitHub", level: 85 },
  { name: "UI/UX Design", level: 95 },
  { name: "Algoritmos", level: 83 }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CareSync",
    category: "Care Management",
    image: "/images/caresync-dashboard.png",
    description: "Gerenciador de rotinas de cuidado. Funciona como um 'Jira' para saúde, ajudando jovens a organizar a semana, tarefas e necessidades diárias de idosos dependentes.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/thivgo/caresync",
    demoUrl: "https://github.com/thivgo/caresync"
  },
  {
    id: 2,
    title: "Generic E-commerce",
    category: "E-commerce",
    image: "/images/generic-ecommerce.png",
    description: "Simulação de loja virtual com funcionalidades essenciais: carrinho de compras, listagem de produtos e fluxo de checkout.",
    tech: ["React", "Context API", "CSS Modules", "PHP"],
    githubUrl: "https://github.com/thivgo/Generic-E-commerce"
  },
  {
    id: 3,
    title: "Raio Rifas",
    category: "Web App",
    image: "/images/raio-rifas.png",
    description: "Sistema digital para criação, gerenciamento e venda de rifas online, oferecendo interface intuitiva para organizadores.",
    tech: ["React", "Tailwind", "MySQL", "Python"],
    githubUrl: "https://github.com/thivgo/RaioRifas"
  },
  {
    id: 4,
    title: "Uffizi",
    category: "Web Design",
    image: "/images/uffizi-landing.png",
    description: "Landing page desenvolvida para a Galeria Uffizi, priorizando a estética visual clássica e layout totalmente responsivo.",
    tech: ["HTML5", "CSS3", "JavaScript", "Nuxt"],
    githubUrl: "https://github.com/thivgo/uffizi-landingpage",
    demoUrl: "https://thivgo.github.io/uffizi-landingpage/"
  }
];