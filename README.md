# 🎓 Portfólio Acadêmico

> 
> Portfólio pessoal focado em documentar a evolução técnica e projetos práticos.
> Desenvolvido durante o 3º semestre de Ciência da Computação.
> 

[![Vite](https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Framework-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🎯 Objetivo do Projeto

Este projeto serve como meu "cartão de visitas" digital e laboratório de desenvolvimento. O foco principal é a **demonstração de competências** adquiridas na graduação, centralizando projetos acadêmicos, experimentos com algoritmos e aplicações web em um ambiente controlado e performático.

## 🏗 Arquitetura & Tech Stack

A arquitetura foi escolhida para garantir uma experiência de desenvolvimento moderna (DX) e uma entrega final otimizada para o usuário (UX), priorizando SPA (Single Page Application) e tipagem estática.

| Componente | Tecnologia Escolhida | Justificativa Arquitetural |
| :--- | :--- | :--- |
| **Build Tool** | Vite | Bundling extremamente rápido e HMR (Hot Module Replacement) instantâneo. |
| **Framework** | React 18+ | Componentização e ecossistema robusto para interfaces reativas. |
| **Linguagem** | TypeScript | Segurança de tipos em tempo de desenvolvimento e código autodocumentado. |
| **Estilização** | CSS3 / Modules | Controle granular de estilos e fundamentos de design responsivo. |
| **Deploy** | Vercel / Netlify | CI/CD automatizado e distribuição global via CDN. |

## 🗄️ Estrutura do Projeto

O projeto segue uma organização modular, separando lógica de negócios (hooks), interface (components) e utilitários, facilitando a escalabilidade.

```bash
/src
 ├── /components      # UI Components (Atomic Design)
 │    ├── /Header     # Navegação e identidade visual
 │    ├── /Projects   # Grid de exibição dos projetos
 │    └── /Footer     # Contatos e links sociais
 │
 ├── /hooks           # Custom React Hooks
 │    └── useTheme.ts # Gerenciamento de tema (Dark/Light)
 │
 ├── /utils           # Helper Functions
 │    └── format.ts   # Formatação de datas e textos
 │
 ├── App.tsx          # Entry point e roteamento
 └── main.tsx         # Injeção no DOM
