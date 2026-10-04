export type Lang = 'pt' | 'en';

export const PROFILE = {
  name: 'Thiago Maués',
  email: 'thiago.mauess@gmail.com',
  github: 'https://github.com/thivgo',
  linkedin: 'https://www.linkedin.com/in/thiagomvues',
  cv: '/thiago-maues-curriculo.pdf',
};

export interface Project {
  title: string;
  year?: string;
  description: string;
  stack: string[];
  image?: string;
  repo?: string;
  demo?: string;
}

export interface Job {
  org: string;
  role: string;
  period?: string;
  points: string[];
}

export interface Content {
  meta: { title: string };
  nav: { projects: string; experience: string; stack: string; contact: string };
  ui: {
    switchLang: string;
    themeToLight: string;
    themeToDark: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    place: string;
    summary: string;
    ctaProjects: string;
    ctaCv: string;
    status: string;
    hintPointer: string;
    hintTouch: string;
    resetTiles: (n: number) => string;
  };
  about: {
    label: string;
    title: string;
    body: string[];
    facts: { term: string; value: string }[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    featured: Project[];
    more: string;
    others: Project[];
    clientsTitle: string;
    clientsNote: string;
    clients: Project[];
    code: string;
    live: string;
  };
  experience: { label: string; title: string; jobs: Job[] };
  stack: {
    label: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  education: {
    label: string;
    title: string;
    degree: { title: string; place: string; status: string };
    coursesTitle: string;
    courses: { title: string; place: string; year: string }[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: { built: string; source: string };
}

const stackItems = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  react: ['React 18/19', 'Hooks e custom hooks', 'Context API', 'React Router', 'Next.js'],
  reactEn: ['React 18/19', 'Hooks & custom hooks', 'Context API', 'React Router', 'Next.js'],
  vue: ['Vue 3', 'Nuxt 3 (SSR/SSG)', 'Pinia'],
  motion: ['GSAP', 'Three.js'],
  tools: ['Git / GitHub', 'Vite', 'Vercel (CI/CD)', 'date-fns'],
};

const images = {
  calendario: '/images/calendario.png',
  caresync: '/images/caresyncv2.png',
  ecommerce: '/images/generic-ecommerce.png',
  roleplay: '/images/fullroleplay.png',
  uffizi: '/images/uffizi-landing.png',
};

const repos = {
  calendario: 'https://github.com/thivgo/calendario-municipal',
  caresync: 'https://github.com/thivgo/caresyncv2',
  ecommerce: 'https://github.com/thivgo/Generic-E-commerce',
  roleplay: 'https://github.com/thivgo/fullroleplay',
  uffizi: 'https://github.com/thivgo/uffizi-landingpage',
};

export const content: Record<Lang, Content> = {
  pt: {
    meta: { title: 'Thiago Maués — Desenvolvedor front-end' },
    nav: { projects: 'Projetos', experience: 'Experiência', stack: 'Stack', contact: 'Contato' },
    ui: {
      switchLang: 'Switch to English',
      themeToLight: 'Usar tema claro',
      themeToDark: 'Usar tema escuro',
      skip: 'Pular para o conteúdo',
    },
    hero: {
      eyebrow: 'Desenvolvedor front-end',
      place: 'Belém · Pará',
      summary:
        'Construo interfaces em React e Vue/Nuxt com TypeScript — de um dashboard para o Governo do Pará a sites para clientes aqui de Belém.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Baixar currículo (PDF)',
      status: 'Procurando estágio ou vaga júnior em front-end',
      hintPointer: 'Passe o mouse nos azulejos',
      hintTouch: 'Toque nos azulejos',
      resetTiles: (n) =>
        n === 1 ? 'Recolocar 1 azulejo' : `Recolocar ${n} azulejos`,
    },
    about: {
      label: 'Sobre',
      title: 'Da faculdade para o Governo do Pará',
      body: [
        'Estudo Ciência da Computação na Faculdade Ideal Wyden e trabalho como desenvolvedor júnior na SEAC-PA, onde fiz um dashboard em Nuxt 3 que coleta os feriados publicados pelo governo e os mostra em calendário.',
        'Fora da secretaria, faço sites e dashboards para clientes: integro Supabase e APIs, cuido do deploy na Vercel e, como tenho formação em UI/UX pela EBAC, desenho o fluxo antes de abrir o editor.',
      ],
      facts: [
        { term: 'Base', value: 'Belém, PA' },
        { term: 'Agora', value: 'Dev júnior na SEAC-PA' },
        { term: 'Curso', value: 'Ciência da Computação, 4º semestre' },
        { term: 'Idiomas', value: 'Português nativo, inglês fluente' },
      ],
    },
    projects: {
      label: 'Projetos',
      title: 'O que já está no ar',
      intro: 'Projetos com código aberto no GitHub. Os de clientes ficam no fim da lista.',
      featured: [
        {
          title: 'Calendário Municipal',
          year: '2026',
          description:
            'Todos os feriados municipais, estaduais e nacionais de Belém em 2026, além dos pontos facultativos. Os dados são coletados com Cheerio a partir das publicações oficiais e exibidos em calendário, com contagem para as próximas datas.',
          stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Cheerio', 'date-fns'],
          image: images.calendario,
          repo: repos.calendario,
        },
        {
          title: 'CareSync',
          year: '2026',
          description:
            'PWA mobile-first para famílias organizarem o cuidado de idosos: calendário compartilhado, divisão de tarefas entre parentes e perfis para cada pessoa cuidada.',
          stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
          image: images.caresync,
          repo: repos.caresync,
        },
      ],
      more: 'Outros projetos',
      others: [
        {
          title: 'Generic E-commerce',
          description: 'Loja virtual com catálogo, carrinho e checkout.',
          stack: ['React', 'Context API', 'CSS Modules', 'PHP'],
          image: images.ecommerce,
          repo: repos.ecommerce,
        },
        {
          title: 'Full Roleplay',
          description: 'Site de um servidor de roleplay com informações, regras e atualizações da comunidade.',
          stack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
          image: images.roleplay,
          repo: repos.roleplay,
        },
        {
          title: 'Uffizi',
          description: 'Landing page responsiva com estética clássica, inspirada na galeria de Florença.',
          stack: ['HTML5', 'CSS3', 'JavaScript'],
          image: images.uffizi,
          repo: repos.uffizi,
          demo: 'https://thivgo.github.io/uffizi-landingpage/',
        },
      ],
      clientsTitle: 'Para clientes',
      clientsNote: 'Código privado',
      clients: [
        {
          title: 'Alucar',
          description: 'Redesign do site de uma locadora de veículos de Belém, com animações em GSAP e elementos 3D.',
          stack: ['Nuxt 3', 'GSAP', 'Three.js'],
        },
        {
          title: 'Gestão de apoiadores',
          description:
            'Dashboard para campanha eleitoral: login por CPF, acesso controlado por perfil e análise de pagamentos.',
          stack: ['React', 'TypeScript', 'Supabase'],
        },
      ],
      code: 'Código',
      live: 'Ver no ar',
    },
    experience: {
      label: 'Experiência',
      title: 'Onde já trabalhei',
      jobs: [
        {
          org: 'SEAC-PA · Governo do Pará',
          role: 'Desenvolvedor júnior',
          period: '2026 — atual',
          points: [
            'Desenvolvi um dashboard em Nuxt 3 que coleta via scraping os feriados e pontos facultativos publicados pelo governo e os exibe em calendário.',
            'Automatizo relatórios internos e apoio a operação dos sistemas da secretaria.',
            'Dou suporte técnico: instalação de sistemas e softwares, diagnóstico de falhas em equipamentos e redes.',
          ],
        },
        {
          org: 'Freelancer',
          role: 'Desenvolvedor front-end e designer',
          period: 'atual',
          points: [
            'Dashboard de gestão de apoiadores em React, TypeScript e Supabase.',
            'Redesign do site da Alucar em Nuxt 3, com GSAP e Three.js.',
            'Identidades visuais, layouts e landing pages.',
          ],
        },
        {
          org: 'LTD · Faculdade Ideal Wyden',
          role: 'Desenvolvedor front-end',
          points: [],
        },
        {
          org: 'ENACTUS · Faculdade Ideal Wyden',
          role: 'Desenvolvedor full stack',
          points: [],
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'Com o que eu trabalho',
      groups: [
        { name: 'Linguagens', items: stackItems.languages },
        { name: 'React', items: stackItems.react },
        { name: 'Vue', items: stackItems.vue },
        { name: 'Estilo', items: ['Tailwind CSS', 'CSS Modules', 'Responsivo e mobile-first'] },
        { name: 'Animação e 3D', items: stackItems.motion },
        {
          name: 'Dados e back-end',
          items: ['Supabase (Auth, PostgreSQL)', 'APIs REST', 'Node.js', 'PHP', 'MySQL', 'Scraping com Cheerio'],
        },
        { name: 'Ferramentas', items: stackItems.tools },
        {
          name: 'Design',
          items: ['Pesquisa e arquitetura de informação', 'Wireframes', 'Protótipos de alta fidelidade', 'Acessibilidade web'],
        },
      ],
    },
    education: {
      label: 'Formação',
      title: 'Estudo',
      degree: {
        title: 'Bacharelado em Ciência da Computação',
        place: 'Faculdade Ideal Wyden (FACI), Belém',
        status: '4º semestre, em andamento',
      },
      coursesTitle: 'Cursos',
      courses: [
        { title: 'UI/UX Designer', place: 'EBAC', year: '2025' },
        { title: 'Nuxt.js', place: 'Udemy', year: '2025' },
        { title: 'React', place: 'Udemy', year: '2024' },
        { title: 'Python', place: 'USP', year: '2023' },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Tem uma vaga de front-end?',
      body: 'Estou procurando estágio ou vaga júnior, presencial em Belém ou remoto. O jeito mais rápido de falar comigo é por e-mail.',
      copy: 'Copiar e-mail',
      copied: 'E-mail copiado',
      cv: 'Currículo em PDF',
    },
    footer: {
      built: 'Feito em Belém com React, TypeScript e Vite.',
      source: 'Azulejos desenhados em SVG, um componente por peça.',
    },
  },

  en: {
    meta: { title: 'Thiago Maués — Front-end developer' },
    nav: { projects: 'Projects', experience: 'Experience', stack: 'Stack', contact: 'Contact' },
    ui: {
      switchLang: 'Mudar para português',
      themeToLight: 'Use light theme',
      themeToDark: 'Use dark theme',
      skip: 'Skip to content',
    },
    hero: {
      eyebrow: 'Front-end developer',
      place: 'Belém · Pará · Brazil',
      summary:
        'I build interfaces with React and Vue/Nuxt in TypeScript — from a dashboard for the Pará state government to websites for local clients in Belém.',
      ctaProjects: 'See projects',
      ctaCv: 'Download résumé (PDF)',
      status: 'Looking for a front-end internship or junior role',
      hintPointer: 'Hover over the tiles',
      hintTouch: 'Tap the tiles',
      resetTiles: (n) => (n === 1 ? 'Put 1 tile back' : `Put ${n} tiles back`),
    },
    about: {
      label: 'About',
      title: 'From college to the state government',
      body: [
        'I study Computer Science at Faculdade Ideal Wyden and work as a junior developer at SEAC-PA, a Pará state department, where I built a Nuxt 3 dashboard that scrapes the official holiday announcements and shows them on a calendar.',
        'Outside the department I build websites and dashboards for clients: I wire up Supabase and APIs, ship to Vercel and, since I trained in UI/UX at EBAC, I sketch the flow before opening the editor.',
      ],
      facts: [
        { term: 'Based in', value: 'Belém, Brazil' },
        { term: 'Now', value: 'Junior dev at SEAC-PA' },
        { term: 'Studying', value: 'Computer Science, 4th semester' },
        { term: 'Languages', value: 'Portuguese (native), English (fluent)' },
      ],
    },
    projects: {
      label: 'Projects',
      title: 'Things that are live',
      intro: 'Open-source projects on GitHub. Client work is at the end of the list.',
      featured: [
        {
          title: 'Calendário Municipal',
          year: '2026',
          description:
            'Every municipal, state and national holiday in Belém for 2026, plus optional days off. The data is scraped with Cheerio from official announcements and shown on a calendar with a countdown to the next dates.',
          stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Cheerio', 'date-fns'],
          image: images.calendario,
          repo: repos.calendario,
        },
        {
          title: 'CareSync',
          year: '2026',
          description:
            'A mobile-first PWA that helps families organise care for elderly relatives: a shared calendar, tasks split between family members and a profile for each person being cared for.',
          stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
          image: images.caresync,
          repo: repos.caresync,
        },
      ],
      more: 'More projects',
      others: [
        {
          title: 'Generic E-commerce',
          description: 'An online store with a product catalogue, cart and checkout.',
          stack: ['React', 'Context API', 'CSS Modules', 'PHP'],
          image: images.ecommerce,
          repo: repos.ecommerce,
        },
        {
          title: 'Full Roleplay',
          description: 'Website for a roleplay game server with info, rules and community updates.',
          stack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
          image: images.roleplay,
          repo: repos.roleplay,
        },
        {
          title: 'Uffizi',
          description: 'A responsive landing page with a classical look, inspired by the Florence gallery.',
          stack: ['HTML5', 'CSS3', 'JavaScript'],
          image: images.uffizi,
          repo: repos.uffizi,
          demo: 'https://thivgo.github.io/uffizi-landingpage/',
        },
      ],
      clientsTitle: 'Client work',
      clientsNote: 'Private code',
      clients: [
        {
          title: 'Alucar',
          description: 'Redesign of a car rental company website in Belém, with GSAP animations and 3D elements.',
          stack: ['Nuxt 3', 'GSAP', 'Three.js'],
        },
        {
          title: 'Supporter management',
          description:
            'Dashboard for an election campaign: login by CPF (Brazilian ID), role-based access and payment analysis.',
          stack: ['React', 'TypeScript', 'Supabase'],
        },
      ],
      code: 'Code',
      live: 'Live site',
    },
    experience: {
      label: 'Experience',
      title: 'Where I have worked',
      jobs: [
        {
          org: 'SEAC-PA · Pará State Government',
          role: 'Junior developer',
          period: '2026 — now',
          points: [
            'Built a Nuxt 3 dashboard that scrapes the holidays and optional days off published by the government and shows them on a calendar.',
            'Automate internal reports and support the department’s systems.',
            'Provide tech support: OS and software installs, hardware and network troubleshooting.',
          ],
        },
        {
          org: 'Freelance',
          role: 'Front-end developer and designer',
          period: 'now',
          points: [
            'Supporter management dashboard in React, TypeScript and Supabase.',
            'Alucar website redesign in Nuxt 3 with GSAP and Three.js.',
            'Visual identities, layouts and landing pages.',
          ],
        },
        {
          org: 'LTD · Faculdade Ideal Wyden',
          role: 'Front-end developer',
          points: [],
        },
        {
          org: 'ENACTUS · Faculdade Ideal Wyden',
          role: 'Full stack developer',
          points: [],
        },
      ],
    },
    stack: {
      label: 'Stack',
      title: 'What I work with',
      groups: [
        { name: 'Languages', items: stackItems.languages },
        { name: 'React', items: stackItems.reactEn },
        { name: 'Vue', items: stackItems.vue },
        { name: 'Styling', items: ['Tailwind CSS', 'CSS Modules', 'Responsive, mobile-first'] },
        { name: 'Motion & 3D', items: stackItems.motion },
        {
          name: 'Data & back-end',
          items: ['Supabase (Auth, PostgreSQL)', 'REST APIs', 'Node.js', 'PHP', 'MySQL', 'Scraping with Cheerio'],
        },
        { name: 'Tools', items: stackItems.tools },
        {
          name: 'Design',
          items: ['Research & information architecture', 'Wireframes', 'High-fidelity prototypes', 'Web accessibility'],
        },
      ],
    },
    education: {
      label: 'Education',
      title: 'Studies',
      degree: {
        title: 'BSc in Computer Science',
        place: 'Faculdade Ideal Wyden (FACI), Belém',
        status: '4th semester, in progress',
      },
      coursesTitle: 'Courses',
      courses: [
        { title: 'UI/UX Designer', place: 'EBAC', year: '2025' },
        { title: 'Nuxt.js', place: 'Udemy', year: '2025' },
        { title: 'React', place: 'Udemy', year: '2024' },
        { title: 'Python', place: 'USP', year: '2023' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Hiring for front-end?',
      body: 'I’m looking for an internship or junior role, on-site in Belém or remote. Email is the fastest way to reach me.',
      copy: 'Copy email',
      copied: 'Email copied',
      cv: 'Résumé (PDF)',
    },
    footer: {
      built: 'Made in Belém with React, TypeScript and Vite.',
      source: 'Tiles drawn in SVG, one component per piece.',
    },
  },
};
