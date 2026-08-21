# imobiliaria.web

Boilerplate TanStack Start (React 19 + TanStack Router/Query + Tailwind v4 + shadcn-style).

## Setup

```
pnpm install
pnpm dev
```

## Stack

- TanStack Start / Router / Query
- Tailwind CSS v4
- ESLint (perfectionist + react-hooks) + Prettier
- Husky (pre-commit: format+lint, pre-push: build)

## Estrutura

- `src/pages` — rotas (file-based, TanStack Router)
- `src/routes` — router runtime + árvore gerada (`index.ts`, não editar)
- `src/components/ui` — primitivos
- `src/lib` — utils genéricos
- `src/styles/global.css` — tailwind entrypoint
