# The Vibe Coding Field Guide

A premium, editorial web version of the **Vibe Coding Field Guide** — a friendly
pre-course primer for product designers, visual designers, content designers, and
user researchers who are new to vibe coding.

Built as a twelve-chapter documentation site with per-chapter routes, a
collapsible tree-view sidebar, subchapter deep links, scroll-spy highlighting,
reading-progress, previous/next navigation, and light / dark themes.

## The twelve chapters

1. Welcome
2. Vibe coding, properly understood
3. The language of AI
4. Just enough web technology
5. Context engineering
6. Briefing and collaborating with AI
7. The designer-led build workflow
8. Craft by discipline
9. Quality, safety, and responsible practice
10. Git, GitHub, and the terminal
11. Home project — the Creative Recharge Generator
12. Reference (checklists, prompt patterns, command cheat sheet, glossary)

Content is sourced from the manuscript and kept in a structured content layer
(`src/chapters/*`), with the navigation model in
[`src/data/guide.ts`](src/data/guide.ts) as the single source of truth for routes
and anchors.

## Design

- **Editorial field-guide aesthetic** — disciplined grid, bold sans-serif
  hierarchy, generous whitespace, restrained accents.
- **Learning callouts** map to the guide's colour code: Key idea (red), In
  practice (blue), Try it (green), Watch out (amber).
- **Design tokens** with a primitive → semantic → theme structure in
  [`src/app/tokens.css`](src/app/tokens.css). Every component reads from tokens.
- **Geometric placeholder illustrations** mark where final artwork can be added
  later ([`Placeholder.tsx`](src/components/content/Placeholder.tsx)).
- **Accessibility**: skip link, semantic landmarks, visible focus, keyboard
  operation, horizontally scrollable tables, and `prefers-reduced-motion` support.

## Tech

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Motion](https://motion.dev) for micro-interactions and transitions
- CSS Modules + CSS custom-property design tokens

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    layout.tsx         root layout — wraps every route in the AppShell
    page.tsx           cover / landing page
    [chapter]/page.tsx dynamic chapter route (generateStaticParams over the 12 chapters)
    tokens.css, globals.css
  chapters/            one component per chapter + slug→component registry (index.ts)
  components/
    cover/             the landing cover
    layout/            AppShell, Sidebar (route-aware tree), ChapterView, PrevNext, theme
    content/           editorial primitives (Sub, Callout, CodeBlock, DataTable,
                       StudyCheck, HomeProjectChecklist, Placeholder, GlossaryList, …)
    icons/             Streamline icon components + UI glyphs
  data/guide.ts        navigation + routing model (single source of truth)
  lib/useScrollSpy.ts  active-subchapter tracking within a chapter page
```

## Placeholders

Per the brief, icons and illustrations are intentional placeholders (simple
geometry) with clear replacement points — swap in final visual assets later.
