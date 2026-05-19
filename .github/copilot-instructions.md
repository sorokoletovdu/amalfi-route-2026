This is a TypeScript + Astro sailing route guide. One Markdown file
(`src/content/route/amalfi.md`) is the single source of truth for all outputs: web page
(Astro → GitHub Pages) and downloadable PDF (`@react-pdf/renderer`, no browser).

## Session Start Protocol

Read `BOOT.md` (project context, invariants, REVIEW protocol) then `WAL.md` (current
project state, pending work, what NOT to touch) before taking any action.

## WAL Update Protocol

Before ending a session, update `WAL.md`:
1. Collapse completed items to one-line summaries (details belong in git history).
2. Add any REVIEW markers created this session under `## Open REVIEW Items`.
3. Update area status if any area changed state.
4. Keep WAL under 3,000 tokens total.

## REVIEW Marker Protocol

When encountering an ambiguity, contradiction, or decision requiring author input:
1. Implement as specified — do not invent alternatives.
2. Add `<!-- REVIEW: [reason] -->` at the relevant location.
3. Record the item in `WAL.md` under `## Open REVIEW Items`.
4. Report to the author at end of session.

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
