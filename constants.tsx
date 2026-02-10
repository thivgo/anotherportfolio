import { Experience, Education, Project, Service, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Thiago Maués",
  email: "thiago.mauess@gmail.com",
  location: "Brasil",
  github: "github.com/thivgo",
  linkedin: "www.linkedin.com/in/thiagomvues",
  avatar: "https://github.com/thivgo.png",
  bio: {
    pt: "Estudante de Ciência da Computação com base sólida em desenvolvimento web, UI/UX e fundamentos de programação. Experiência prática em projetos front-end, versionamento com Git e foco em usabilidade, desempenho e código limpo. Busca oportunidade de estágio ou vaga júnior para crescimento técnico e profissional.",
    en: "Computer Science student with a solid foundation in web development, UI/UX, and programming fundamentals. Practical experience in front-end projects, Git version control, focusing on usability, performance, and clean code. Seeking an internship or junior position for technical and professional growth."
  }
};

export const SERVICES: Service[] = [
  {
    title: { pt: "UI/UX Design", en: "UI/UX Design" },
    description: {
      pt: "Criação de interfaces intuitivas e experiências de usuário envolventes, desde wireframes até protótipos de alta fidelidade.",
      en: "Creation of intuitive interfaces and engaging user experiences, from wireframes to high-fidelity prototypes."
    },
    icon: "layout"
  },
  {
    title: { pt: "Web Design", en: "Web Design" },
    description: {
      pt: "Desenvolvimento de layouts modernos e atraentes, priorizando a estética visual e a identidade da marca.",
      en: "Development of modern and attractive layouts, prioritizing visual aesthetics and brand identity."
    },
    icon: "palette"
  },
  {
    title: { pt: "Web Development", en: "Web Development" },
    description: {
      pt: "Construção de sites responsivos e performáticos utilizando React e tecnologias modernas.",
      en: "Building responsive and performant websites using React and modern technologies."
    },
    icon: "code"
  },
  {
    title: { pt: "Mobile First", en: "Mobile First" },
    description: {
      pt: "Abordagem focada em garantir a melhor experiência em dispositivos móveis.",
      en: "Approach focused on ensuring the best experience on mobile devices."
    },
    icon: "smartphone"
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: { pt: "Bacharelado em Ciência da Computação", en: "Bachelor of Computer Science" },
    institution: "Faculdade Ideal Wyden - FACI",
    period: { pt: "3º Semestre", en: "3rd Semester" },
    description: {
      pt: "Foco em Lógica e Algoritmos, Programação, Estruturas de Dados, Sistemas Operacionais, Redes de Computadores, Inteligência Artificial, Segurança da Informação e Banco de Dados.",
      en: "Focus on Logic and Algorithms, Programming, Data Structures, Operating Systems, Computer Networks, Artificial Intelligence, Information Security, and Databases."
    }
  },
  {
    id: 2,
    degree: { pt: "Profissão UI/UX Designer", en: "UI/UX Designer Profession" },
    institution: "Escola Britânica de Artes Criativas & Tecnologia - EBAC",
    period: { pt: "Concluído em 2025", en: "Completed in 2025" },
    description: {
      pt: "Especialização completa em User Experience e User Interface Design, incluindo pesquisa, arquitetura de informação e prototipagem.",
      en: "Complete specialization in User Experience and User Interface Design, including research, information architecture, and prototyping."
    }
  },
  {
    id: 3,
    degree: { pt: "Curso de Nuxt.js", en: "Nuxt.js Course" },
    institution: "Udemy",
    period: { pt: "Concluído em 2025", en: "Completed in 2025" },
    description: {
      pt: "Desenvolvimento de aplicações web completas utilizando o framework Nuxt.js (Vue.js), focando em renderização do lado do servidor (SSR) e geração de sites estáticos.",
      en: "Development of complete web applications using the Nuxt.js (Vue.js) framework, focusing on Server-Side Rendering (SSR) and Static Site Generation."
    }
  },
  {
    id: 4,
    degree: { pt: "Curso de React", en: "React Course" },
    institution: "Udemy",
    period: { pt: "Concluído em 2024", en: "Completed in 2024" },
    description: {
      pt: "Desenvolvimento de interfaces dinâmicas com React.js, incluindo manipulação de estado, hooks, e integração com APIs.",
      en: "Development of dynamic interfaces with React.js, including state management, hooks, and API integration."
    }
  },
  {
    id: 5,
    degree: { pt: "Curso de Python", en: "Python Course" },
    institution: "Universidade de São Paulo - USP",
    period: { pt: "Concluído em 2023", en: "Completed in 2023" },
    description: {
      pt: "Fundamentos de Ciência da Computação, lógica de programação e desenvolvimento de algoritmos com Python.",
      en: "Fundamentals of Computer Science, programming logic, and algorithm development with Python."
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: { pt: "Freelancer", en: "Freelancer" },
    company: "Design e Web",
    period: { pt: "Atualmente", en: "Currently" },
    description: {
      pt: "Desenvolvimento de interfaces, layouts, identidades visuais e páginas web, com foco em clareza visual e experiência do usuário.",
      en: "Development of interfaces, layouts, visual identities, and web pages, focusing on visual clarity and user experience."
    }
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
    title: "Full Roleplay Website",
    category: "Web Dev",
    image: "/images/fullroleplay.png",
    description: {
      pt: "Site desenvolvido para o servidor de Roleplay. Interface moderna criada com React para apresentar informações, regras e atualizações da comunidade.",
      en: "Website developed for the Roleplay server. Modern interface created with React to showcase information, rules, and community updates."
    },
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/thivgo/fullroleplay",
    demoUrl: "https://github.com/thivgo/fullroleplay"
  },
  {
    id: 2,
    title: "Generic E-commerce",
    category: "E-commerce",
    image: "/images/generic-ecommerce.png",
    description: {
      pt: "Simulação de loja virtual com funcionalidades essenciais: carrinho de compras, listagem de produtos e fluxo de checkout.",
      en: "Virtual store simulation with essential features: shopping cart, product listing, and checkout flow."
    },
    tech: ["React", "Context API", "CSS Modules", "PHP"],
    githubUrl: "https://github.com/thivgo/Generic-E-commerce"
  },
  {
    id: 3,
    title: "Raio Rifas",
    category: "Web App",
    image: "/images/raio-rifas.png",
    description: {
      pt: "Sistema digital para criação, gerenciamento e venda de rifas online, oferecendo interface intuitiva para organizadores.",
      en: "Digital system for creating, managing, and selling online raffles, offering an intuitive interface for organizers."
    },
    tech: ["React", "Tailwind", "MySQL", "Python"],
    githubUrl: "https://github.com/thivgo/RaioRifas"
  },
  {
    id: 4,
    title: "Uffizi",
    category: "Web Design",
    image: "/images/uffizi-landing.png",
    description: {
      pt: "Landing page desenvolvida para a Galeria Uffizi, priorizando a estética visual clássica e layout totalmente responsivo.",
      en: "Landing page developed for Uffizi Gallery, prioritizing classic visual aesthetics and fully responsive layout."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "Nuxt"],
    githubUrl: "https://github.com/thivgo/uffizi-landingpage",
    demoUrl: "https://thivgo.github.io/uffizi-landingpage/"
  }
];