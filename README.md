<div align="center">

# ⚡ Boilerplate TanStack

**Base enxuta e pronta pra produção pra construir apps full-stack rápido.**

TanStack Start · React 19 · TypeScript · Tailwind CSS v4

[![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square&logo=reactrouter&logoColor=white)](https://tanstack.com/start)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-managed-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)

</div>

---

## Sobre

Template genérico de frontend, sem lógica de negócio nem domínio específico. Serve de ponto de partida pra qualquer app full-stack em React — só clonar, renomear e começar a construir.

## Stack

| Camada              | Escolha                                                   | Por quê                                                     |
| -------------------- | ----------------------------------------------------------- | -------------------------------------------------------------- |
| Framework             | [TanStack Start](https://tanstack.com/start)                | Router + Query + SSR integrados, file-based routing            |
| Linguagem             | TypeScript (`strict`)                                        | Segurança de tipos sem fricção                                  |
| Estilo                | [Tailwind CSS v4](https://tailwindcss.com)                   | Via `@tailwindcss/vite`, sem arquivo de config extra            |
| Ícones                | [`@phosphor-icons/react`](https://github.com/phosphor-icons/react) | Set único e consistente, weight por prop, zero dependência solta |
| Variantes de classe   | `tailwind-variants` + `tailwind-merge`                        | Componentes com variantes sem conflito de classes               |
| Formulário            | `react-hook-form` + `@hookform/resolvers` (zod)               | Campos controlados com validação tipada                         |
| Lint                  | ESLint (flat config) + `eslint-plugin-perfectionist`          | Import/objeto/interface sempre ordenados                        |
| Formatação            | Prettier + `prettier-plugin-tailwindcss`                      | Classes Tailwind sempre na ordem canônica                       |
| Git hooks             | Husky                                                         | Lint + format automático no `pre-commit`, build no `pre-push`   |

## Setup

```
pnpm install
pnpm dev
```

## Estrutura

- `src/pages` — rotas (file-based, TanStack Router)
- `src/routes` — router runtime + árvore gerada (`index.ts`, não editar)
- `src/components/ui` — primitivos (button, dialog, inputs, typography, etc.)
- `src/components/controlled` — campos plugados no `react-hook-form`
- `src/utils` — helpers genéricos
- `src/styles/global.css` — tailwind entrypoint + design tokens

## Usando como template

1. Clone ou use "Use this template" no GitHub.
2. Renomeie `name` em `package.json`.
3. Apague/adapte rotas de exemplo em `src/pages` pro seu domínio.
4. Ajuste design tokens em `src/styles/global.css`.

Contribuições, issues e forks são bem-vindos.
