# AGENTS.md - v-image

> **For AI Coding Assistants (Claude Code, Cursor, Copilot, etc.)**

---

## Overview

**v-image** (`v-image`) -- Tiny little component for input type=file.

- **Owner**: vinayakkulkarni
- **npm**: `v-image`
- **Framework**: Vue 3 (Composition API + `<script setup>`)

---

## Project Structure

```
v-image/
├── src/
│   ├── components/     # VImage component
│   ├── index.ts        # Public exports
│   └── install.ts      # Vue plugin installer
├── dist/               # Built output (ESM only)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── AGENTS.md
```

---

## Tech Stack & Tooling

| Need        | Tool                                 |
|-------------|--------------------------------------|
| Build       | Vite (lib mode)                      |
| Types       | vue-tsc                              |
| Linting     | oxlint                               |
| Formatting  | oxfmt                                |
| Package Mgr | Bun                                  |
| Git Hooks   | Husky + lint-staged + commitlint     |
| Release     | release-please                       |
| Node        | 24                                   |

---

## Commands

```bash
bun run lint          # oxlint
bun run lint:fix      # oxlint --fix
bun run format        # oxfmt
bun run format:check  # oxfmt --check
bun run build         # vite build + vue-tsc declarations
bun run test          # Tests
```

---

## Rules

### Rule #1: TypeScript Required
All code must be TypeScript. No `.js` files except configs.

### Rule #2: No `any` Type
Use proper types. Never use `as any`, `@ts-ignore`, or `@ts-expect-error`.

### Rule #3: Vue 3 Composition API Only
Use `<script setup lang="ts">` exclusively. No Options API.

### Rule #4: ESM Only
Output is ES modules only. No CommonJS or UMD.

### Rule #5: Compiler Macros
`defineProps`, `defineEmits`, `defineModel`, `defineExpose` are compiler macros -- do NOT import them from 'vue'.

### Rule #6: Conventional Commits
All commits must follow conventional commit format with `Signed-off-by` trailer.

---

## Dependencies

| Dependency | Type |
|------------|------|
| `vue`      | peer |

---

**Last Updated:** 2026-02-08
**Maintainer:** Vinayak Kulkarni
