# Project Rules for AI Agents

## Session Start Protocol

**Read in this order before taking any action:**

1. `BOOT.md` — project context, tech stack, architectural invariants, REVIEW protocol
2. `WAL.md` — current project state, pending work, what NOT to touch

All project-wide rules are in `BOOT.md`. The sections below apply specifically to agents
that cannot follow file redirects at session start.

---

## AI Presence Disclosure

AI tools working in this repository must **never** leave unambiguous indicators of AI
involvement in any artefact visible to humans outside this project, unless the author
explicitly approves it for a specific artefact within the session.

**Prohibited** (without explicit per-artefact approval):
- `Co-Authored-By:` trailers naming an AI model in commit messages
- Subject lines, body text, or footers stating AI authorship
- Inline code comments attributing code to an AI tool

**Always permitted**: This file (`AGENTS.md`) and equivalents, internal docs.

---

## Git Commit Conventions

- Format: `<type>(<scope>): <description>` — concise subject line
- Body required for non-trivial commits — explain *why*
- Common types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`, `ci`, `build`

---

## Tech Stack

| Concern | Choice |
|---|---|
| Package manager | **pnpm** — always use `pnpm`, never npm or yarn |
| Framework | Astro 5 with TypeScript strict mode throughout |
| Styling | Tailwind CSS v4 — CSS-based `@theme` in `global.css`, no `tailwind.config.js` |
| PDF | `@react-pdf/renderer` — programmatic, Node-only, no browser/Playwright in CI |
| Fonts | Inter + Playfair Display TTFs in `public/fonts/`, registered in `src/pdf/fonts.ts` |
| Data | Astro Content Collections — YAML front matter in `src/content/route/amalfi.md` |
| CI/CD | GitHub Actions — single `deploy.yml` workflow |

## Key File Paths

- `BOOT.md` — universal AI entry point; read this first every session
- `WAL.md` — session continuation state; current phase, pending work, REVIEW items
- `src/content/route/amalfi.md` — route data (YAML front matter); source of truth for web + PDF
- `src/schemas/route.ts` — shared Zod types used by both content collection and PDF script
- `src/content/config.ts` — Astro content collection wired to `RouteSchema`
- `src/pdf/AmalfiRoutePDF.tsx` — React-PDF document (separate visual implementation)
- `src/pdf/fonts.ts` — `Font.register()` with `path.resolve()` absolute paths
- `scripts/generate-pdf.tsx` — reads front matter, validates, renders PDF → `public/amalfi-route.pdf`

## Architectural Constraints

- **Data vs presentation are decoupled**: web (Astro) and PDF (React-PDF) share data, not components.
- **No browser in CI for PDF**: `@react-pdf/renderer` runs as pure Node.js.
- **Tailwind v4**: integrated via `@tailwindcss/vite` Vite plugin in `astro.config.ts`. Do NOT use `@astrojs/tailwind`.
- **Font paths**: `Font.register()` must use `path.resolve()` — relative paths fail silently in CI.
- **Single source of truth**: `src/content/route/amalfi.md` drives both web and PDF outputs.
