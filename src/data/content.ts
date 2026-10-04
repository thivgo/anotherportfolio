export type Lang = 'pt' | 'en';

export const PROFILE = {
  name: 'Thiago Maués',
  email: 'thiago.mauess@gmail.com',
  github: 'https://github.com/thivgo',
  linkedin: 'https://www.linkedin.com/in/thiagomvues',
  cv: '/thiago-maues-curriculo.pdf',
  photo: '/images/thiago.jpg',
};

export interface Project {
  title: string;
  kind: string;
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
  period: string;
  points: string[];
}

export interface Content {
  meta: { title: string };
  nav: { work: string; about: string; contact: string; };
  ui: { switchLang: string; themeToLight: string; themeToDark: string; skip: string };
  hero: {
    role: string;
    intro: string;
    specs: { term: string; value: string }[];
    status: string;
    ctaWork: string;
    ctaCv: string;
  };
  work: {
    label: string;
    title: string;
    featured: Project[];
    moreLabel: string;
    others: Project[];
    clientsLabel: string;
    clientsNote: string;
    clients: Project[];
    code: string;
    live: string;
    openRepo: string;
    openLive: string;
  };
  about: {
    label: string;
    title: string;
    body: string[];
    photoCaption: string;
    photoAlt: string;
  };
  experience: { label: string; jobs: Job[] };
  skills: {
    label: string;
    groups: { name: string; items: string[] }[];
    eduLabel: string;
    degree: { title: string; place: string; status: string };
    courses: { title: string; place: string; year: string }[];
  };
  contact: {
    label: string;
    title: [string, string];
    body: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: { made: string; time: string; top: string };
}

const img = {
  calendario: '/images/calendario.png',
  caresync: '/images/caresyncv2.png',
  apex: '/images/apex-gym.jpg',
  roleplay: '/images/fullroleplay.jpg',
  uffizi: '/images/uffizi.jpg',
};

const repo = {
  calendario: 'https://github.com/thivgo/calendario-municipal',
  caresync: 'https://github.com/thivgo/caresyncv2',
  apex: 'https://github.com/thivgo/apex_gym_website',
  roleplay: 'https://github.com/thivgo/fullroleplay',
  uffizi: 'https://github.com/thivgo/uffizi-nuxt-build',
};

const live = {
  calendario: 'https://calendario-municipal.vercel.app',
  caresync: 'https://caresyncv2.vercel.app',
  apex: 'https://apexgym-one.vercel.app',
  roleplay: 'https://fullroleplay.vercel.app',
};

export const content: Record<Lang, Content> = {
  pt: {
    meta: { title: 'Thiago Maués · Front-end e UI' },
    nav: { work: 'Trabalho', about: 'Sobre', contact: 'Contato' },
    ui: {
      switchLang: 'Switch to English',
      themeToLight: 'Usar tema claro',
      themeToDark: 'Usar tema escuro',
      skip: 'Pular para o conteúdo',
    },
    hero: {
      role: 'Front-end e UI design',
      intro:
        'Faço interfaces em React e Vue, do layout no Figma até o deploy. Hoje trabalho na SEAC-PA, no Governo do Pará, e estou procurando uma vaga de estágio ou júnior em front-end.',
      specs: [
        { term: 'Agora', value: 'Dev júnior na SEAC-PA' },
        { term: 'Uso no dia a dia', value: 'React, Nuxt, TypeScript' },
        { term: 'Estudo', value: 'Ciência da Computação' },
      ],
      status: 'Disponível para estágio ou júnior',
      ctaWork: 'Ver trabalhos',
      ctaCv: 'Currículo (PDF)',
    },
    work: {
      label: 'Trabalho',
      title: 'Alguns projetos que eu fiz',
      featured: [
        {
          title: 'Calendário Municipal',
          kind: 'Web app',
          year: '2026',
          description:
            'Junta num só lugar os feriados municipais, estaduais e nacionais de Belém e os pontos facultativos de 2026. Os dados vêm das publicações oficiais, coletados com Cheerio, e o app mostra quanto tempo falta para cada data.',
          stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Cheerio', 'date-fns'],
          image: img.calendario,
          repo: repo.calendario,
          demo: live.calendario,
        },
        {
          title: 'CareSync',
          kind: 'PWA',
          year: '2026',
          description:
            'Um app para famílias que cuidam de alguém mais velho. Tem calendário compartilhado, tarefas divididas entre os parentes e um perfil para cada pessoa cuidada. Pensado primeiro para o celular.',
          stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
          image: img.caresync,
          repo: repo.caresync,
          demo: live.caresync,
        },
        {
          title: 'Apex Gym',
          kind: 'Site e laboratório',
          year: '2026',
          description:
            'Site de uma academia fictícia que virou meu laboratório. O front é em TypeScript com Vite, e uso o mesmo projeto pra testar serviços de back-end em Go, Rust e Python ligados à mesma interface.',
          stack: ['TypeScript', 'Vite', 'Go', 'Rust', 'Python'],
          image: img.apex,
          repo: repo.apex,
          demo: live.apex,
        },
      ],
      moreLabel: 'Outros projetos',
      others: [
        {
          title: 'Full Roleplay',
          kind: 'Portal de comunidade',
          description: 'Portal de um servidor de GTA V roleplay, com status do servidor em tempo real e as regras da comunidade.',
          stack: ['React', 'TypeScript', 'React Router'],
          image: img.roleplay,
          repo: repo.roleplay,
          demo: live.roleplay,
        },
        {
          title: 'Uffizi Uniformes',
          kind: 'Site institucional',
          description: 'Site de uma fábrica de uniformes corporativos. Fiz a landing page e depois reconstruí tudo em Nuxt 3 com SSR e Tailwind.',
          stack: ['Nuxt 3', 'Vue 3', 'Tailwind', 'TypeScript'],
          image: img.uffizi,
          repo: repo.uffizi,
        },
      ],
      clientsLabel: 'Para clientes',
      clientsNote: 'Código fechado',
      clients: [
        {
          title: 'Alucar',
          kind: 'Redesign',
          description: 'Site novo para uma locadora de carros, com animações em GSAP e elementos 3D.',
          stack: ['Nuxt 3', 'GSAP', 'Three.js'],
        },
        {
          title: 'Gestão de pessoas',
          kind: 'Dashboard',
          description: 'Painel para organizar cadastros de pessoas e pagamentos, com login por CPF, acesso por perfil e relatórios.',
          stack: ['React', 'TypeScript', 'Supabase'],
        },
      ],
      code: 'Código',
      live: 'Ver no ar',
      openRepo: 'Abrir no GitHub',
      openLive: 'Abrir o site',
    },
    about: {
      label: 'Sobre',
      title: 'Oi, eu sou o Thiago.',
      body: [
        'Estudo Ciência da Computação na Faculdade Ideal Wyden e trabalho como desenvolvedor júnior na SEAC-PA. Lá eu fiz um dashboard em Nuxt que busca sozinho os feriados publicados pelo governo e mostra tudo num calendário, o que acabou virando o Calendário Municipal.',
        'Fora do trabalho eu pego freelas de sites, landing pages e dashboards. Quase sempre uso React ou Nuxt, Supabase no back e Vercel pro deploy. Também fiz a formação de UI/UX da EBAC, então consigo cuidar do layout e do código no mesmo projeto.',
        'Falo inglês fluente e gosto de trabalhar perto de quem desenha o produto.',
      ],
      photoCaption: 'Eu, em algum dia frio',
      photoAlt: 'Foto do Thiago de boné, óculos escuros e moletom preto',
    },
    experience: {
      label: 'Experiência',
      jobs: [
        {
          org: 'SEAC-PA, Governo do Pará',
          role: 'Desenvolvedor júnior',
          period: '2026 até hoje',
          points: [
            'Fiz um dashboard em Nuxt 3 que coleta os feriados e pontos facultativos publicados pelo governo e mostra num calendário.',
            'Automatizo relatórios internos e ajudo na operação dos sistemas da secretaria.',
            'Dou suporte técnico: instalo sistemas, resolvo problema de rede, de máquina e de programa.',
          ],
        },
        {
          org: 'Freelancer',
          role: 'Front-end e design',
          period: 'Hoje',
          points: [
            'Dashboard de gestão de pessoas e pagamentos, em React, TypeScript e Supabase.',
            'Redesign do site da Alucar em Nuxt 3, com GSAP e Three.js.',
            'Identidade visual, layouts e landing pages.',
          ],
        },
        {
          org: 'LTD, Faculdade Ideal Wyden',
          role: 'Desenvolvedor front-end',
          period: 'Na faculdade',
          points: [],
        },
        {
          org: 'ENACTUS, Faculdade Ideal Wyden',
          role: 'Desenvolvedor full stack',
          period: 'Na faculdade',
          points: [],
        },
      ],
    },
    skills: {
      label: 'Ferramentas',
      groups: [
        { name: 'Linguagens', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'React', items: ['React 18 e 19', 'Hooks', 'Context API', 'React Router', 'Next.js'] },
        { name: 'Vue', items: ['Vue 3', 'Nuxt 3', 'Pinia'] },
        { name: 'Estilo', items: ['Tailwind', 'CSS Modules', 'Mobile first'] },
        { name: 'Movimento', items: ['GSAP', 'Three.js'] },
        { name: 'Dados', items: ['Supabase', 'APIs REST', 'Node.js', 'PHP', 'MySQL', 'Cheerio'] },
        { name: 'Design', items: ['Figma', 'Pesquisa', 'Wireframes', 'Protótipos', 'Acessibilidade'] },
        { name: 'Rotina', items: ['Git', 'Vite', 'Vercel'] },
      ],
      eduLabel: 'Formação',
      degree: {
        title: 'Ciência da Computação',
        place: 'Faculdade Ideal Wyden, Belém',
        status: '4º semestre',
      },
      courses: [
        { title: 'UI/UX Designer', place: 'EBAC', year: '2025' },
        { title: 'Nuxt.js', place: 'Udemy', year: '2025' },
        { title: 'React', place: 'Udemy', year: '2024' },
        { title: 'Python', place: 'USP', year: '2023' },
      ],
    },
    contact: {
      label: 'Contato',
      title: ['Tem uma vaga?', 'Me chama.'],
      body: 'Topo presencial em Belém ou remoto. E-mail é o jeito mais rápido de falar comigo, mas o LinkedIn também funciona.',
      copy: 'Copiar e-mail',
      copied: 'Copiado',
      cv: 'Currículo (PDF)',
    },
    footer: {
      made: 'Desenhado e programado por mim, com React e TypeScript.',
      time: 'Agora em Belém',
      top: 'Voltar ao topo',
    },
  },

  en: {
    meta: { title: 'Thiago Maués · Front-end & UI' },
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    ui: {
      switchLang: 'Mudar para português',
      themeToLight: 'Use light theme',
      themeToDark: 'Use dark theme',
      skip: 'Skip to content',
    },
    hero: {
      role: 'Front-end & UI design',
      intro:
        'I build interfaces with React and Vue, from the Figma file to the deploy. Right now I work at SEAC-PA, a Pará state government department in Brazil, and I’m looking for a front-end internship or junior role.',
      specs: [
        { term: 'Now', value: 'Junior dev at SEAC-PA' },
        { term: 'Daily tools', value: 'React, Nuxt, TypeScript' },
        { term: 'Studying', value: 'Computer Science' },
      ],
      status: 'Open to internships and junior roles',
      ctaWork: 'See my work',
      ctaCv: 'Résumé (PDF)',
    },
    work: {
      label: 'Work',
      title: 'Some things I’ve built',
      featured: [
        {
          title: 'Calendário Municipal',
          kind: 'Web app',
          year: '2026',
          description:
            'Every municipal, state and national holiday in Belém for 2026 in one place, plus the optional days off. The data comes from official announcements, scraped with Cheerio, and the app counts down to each date.',
          stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Cheerio', 'date-fns'],
          image: img.calendario,
          repo: repo.calendario,
          demo: live.calendario,
        },
        {
          title: 'CareSync',
          kind: 'PWA',
          year: '2026',
          description:
            'An app for families looking after an older relative. It has a shared calendar, tasks split between family members and a profile for each person being cared for. Built for phones first.',
          stack: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Supabase'],
          image: img.caresync,
          repo: repo.caresync,
          demo: live.caresync,
        },
        {
          title: 'Apex Gym',
          kind: 'Site and playground',
          year: '2026',
          description:
            'A website for a made-up gym that turned into my playground. The front end is TypeScript with Vite, and I use the same project to try back-end services in Go, Rust and Python wired to the same interface.',
          stack: ['TypeScript', 'Vite', 'Go', 'Rust', 'Python'],
          image: img.apex,
          repo: repo.apex,
          demo: live.apex,
        },
      ],
      moreLabel: 'More projects',
      others: [
        {
          title: 'Full Roleplay',
          kind: 'Community portal',
          description: 'Portal for a GTA V roleplay server, with live server status and the community rules.',
          stack: ['React', 'TypeScript', 'React Router'],
          image: img.roleplay,
          repo: repo.roleplay,
          demo: live.roleplay,
        },
        {
          title: 'Uffizi Uniformes',
          kind: 'Company website',
          description: 'Website for a corporate uniform maker. I built the landing page first, then rebuilt everything in Nuxt 3 with SSR and Tailwind.',
          stack: ['Nuxt 3', 'Vue 3', 'Tailwind', 'TypeScript'],
          image: img.uffizi,
          repo: repo.uffizi,
        },
      ],
      clientsLabel: 'Client work',
      clientsNote: 'Private code',
      clients: [
        {
          title: 'Alucar',
          kind: 'Redesign',
          description: 'A new website for a car rental company, with GSAP animations and 3D elements.',
          stack: ['Nuxt 3', 'GSAP', 'Three.js'],
        },
        {
          title: 'People management',
          kind: 'Dashboard',
          description: 'A dashboard to manage people records and payments, with login by Brazilian ID, role-based access and reports.',
          stack: ['React', 'TypeScript', 'Supabase'],
        },
      ],
      code: 'Code',
      live: 'Live site',
      openRepo: 'Open on GitHub',
      openLive: 'Open the site',
    },
    about: {
      label: 'About',
      title: 'Hi, I’m Thiago.',
      body: [
        'I study Computer Science at Faculdade Ideal Wyden and work as a junior developer at SEAC-PA. There I built a Nuxt dashboard that pulls the holidays published by the government and puts them on a calendar, which later became Calendário Municipal.',
        'Outside of work I take freelance jobs: websites, landing pages and dashboards. I usually reach for React or Nuxt, Supabase on the back end and Vercel to ship. I also did the UI/UX program at EBAC, so I can handle both the layout and the code on the same project.',
        'I speak fluent English and I like working close to the people who design the product.',
      ],
      photoCaption: 'Me, on a cold day',
      photoAlt: 'Photo of Thiago wearing a cap, sunglasses and a black hoodie',
    },
    experience: {
      label: 'Experience',
      jobs: [
        {
          org: 'SEAC-PA, Pará State Government',
          role: 'Junior developer',
          period: '2026 to now',
          points: [
            'Built a Nuxt 3 dashboard that collects the holidays and optional days off published by the government and shows them on a calendar.',
            'Automate internal reports and help run the department’s systems.',
            'Do tech support: installing systems and fixing network, hardware and software problems.',
          ],
        },
        {
          org: 'Freelance',
          role: 'Front-end and design',
          period: 'Now',
          points: [
            'People and payments management dashboard, in React, TypeScript and Supabase.',
            'Alucar website redesign in Nuxt 3, with GSAP and Three.js.',
            'Visual identity, layouts and landing pages.',
          ],
        },
        {
          org: 'LTD, Faculdade Ideal Wyden',
          role: 'Front-end developer',
          period: 'In college',
          points: [],
        },
        {
          org: 'ENACTUS, Faculdade Ideal Wyden',
          role: 'Full stack developer',
          period: 'In college',
          points: [],
        },
      ],
    },
    skills: {
      label: 'Tools',
      groups: [
        { name: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
        { name: 'React', items: ['React 18 & 19', 'Hooks', 'Context API', 'React Router', 'Next.js'] },
        { name: 'Vue', items: ['Vue 3', 'Nuxt 3', 'Pinia'] },
        { name: 'Styling', items: ['Tailwind', 'CSS Modules', 'Mobile first'] },
        { name: 'Motion', items: ['GSAP', 'Three.js'] },
        { name: 'Data', items: ['Supabase', 'REST APIs', 'Node.js', 'PHP', 'MySQL', 'Cheerio'] },
        { name: 'Design', items: ['Figma', 'Research', 'Wireframes', 'Prototypes', 'Accessibility'] },
        { name: 'Workflow', items: ['Git', 'Vite', 'Vercel'] },
      ],
      eduLabel: 'Education',
      degree: {
        title: 'Computer Science',
        place: 'Faculdade Ideal Wyden, Belém',
        status: '4th semester',
      },
      courses: [
        { title: 'UI/UX Designer', place: 'EBAC', year: '2025' },
        { title: 'Nuxt.js', place: 'Udemy', year: '2025' },
        { title: 'React', place: 'Udemy', year: '2024' },
        { title: 'Python', place: 'USP', year: '2023' },
      ],
    },
    contact: {
      label: 'Contact',
      title: ['Hiring?', 'Say hi.'],
      body: 'I’m open to on-site work in Belém or remote. Email is the fastest way to reach me, but LinkedIn works too.',
      copy: 'Copy email',
      copied: 'Copied',
      cv: 'Résumé (PDF)',
    },
    footer: {
      made: 'Designed and built by me, with React and TypeScript.',
      time: 'Right now in Belém',
      top: 'Back to top',
    },
  },
};
