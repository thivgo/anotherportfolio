# Thiago Maués · portfólio

Meu portfólio de front-end. React 19, TypeScript e Vite, sem biblioteca de UI.

Aperte **I** em qualquer lugar do site (ou toque em **Inspecionar** no celular) para ligar o modo inspeção.
Ele mostra o grid de 12 colunas e, ao passar o mouse em qualquer elemento, o nome do componente, o tamanho,
a fonte, as cores e o padding, lidos direto do CSS computado. O código fica em `src/inspect/`.

- Bilíngue (PT/EN) com context e custom hook (`src/i18n.tsx`). Os textos ficam em `src/data/content.ts`
- Tema claro e escuro sem flash na primeira pintura
- Respeita `prefers-reduced-motion`

## Rodar

```bash
npm install
npm run dev
```

## Deploy

A Vercel faz o build sozinha a cada push na `main` (`npm run build`, saída em `dist`).
