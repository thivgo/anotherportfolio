# Thiago Maués — portfólio

Portfólio de desenvolvedor front-end. React 19 + TypeScript + Vite, sem bibliotecas de UI.

O topo é um muro de azulejos portugueses como os do centro histórico de Belém, desenhados em SVG
(`src/components/Azulejo.tsx`). Cada peça é um quarto do padrão; quatro peças giradas formam o desenho
inteiro. Passar o mouse (ou tocar) gira a peça e "quebra" o padrão; o botão que aparece embaixo recoloca tudo.

- Bilíngue (PT/EN) com context + custom hook (`src/i18n.tsx`); textos em `src/data/content.ts`
- Tema claro/escuro (`src/hooks/useTheme.ts`), sem flash na primeira pintura
- Respeita `prefers-reduced-motion`

## Rodar

```bash
npm install
npm run dev
```

## Deploy

Vercel detecta o Vite sozinho: build `npm run build`, saída `dist`.
