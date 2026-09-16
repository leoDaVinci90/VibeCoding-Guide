# The Vibe Coding Field Guide

A premium, editorial web version of the **Vibe Coding Field Guide** — a
pre-course primer for designers covering AI terminology, prompt structure,
Git & GitHub, terminal basics and a set of deep dives.

Built as a single, long-form reading experience with a collapsible tree-view
sidebar, anchored navigation, scroll-spy highlighting, and light / dark themes.

## Design

- **Swiss minimalism × Apple 2026 visual identity** — disciplined grid, bold
  sans-serif hierarchy, generous whitespace, restrained accents.
- **Editorial colour code** carried from the source guide: red = essentials,
  blue = context, green = "do this", amber = watch out.
- **Design tokens** with a clean primitive → semantic → theme structure in
  [`src/app/tokens.css`](src/app/tokens.css). Every component reads from tokens.
- **Streamline "Core Line"** icons for the chapters and UI, normalized to
  inherit theme colour ([`StreamlineIcons.tsx`](src/components/icons/StreamlineIcons.tsx)).

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
```

## Structure

```
src/
  app/                 layout, tokens.css, globals.css, page.tsx
  components/
    layout/            AppShell, Sidebar (tree), ThemeProvider, ThemeToggle, Footer
    content/           editorial primitives (Section, TermCard, Callout, CodeBlock, …)
    sections/          Hero + one component per guide chapter
    icons/             generated Streamline icon components + UI glyphs
  data/guide.ts        navigation model (single source of truth for the tree & anchors)
  lib/useScrollSpy.ts  active-section tracking
```
