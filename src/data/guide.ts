/**
 * Navigation model for the Vibe Coding Field Guide.
 * Single source of truth for the sidebar tree AND the in-page anchor targets.
 * Every `id` here must match a matching `id` rendered in the page content.
 */

import type { ComponentType } from "react";
import { chapterIcons, type IconProps } from "@/components/icons/StreamlineIcons";

export type NavLeaf = {
  id: string;
  label: string;
};

export type NavChapter = {
  id: string;
  index: string | null;
  label: string;
  summary: string;
  icon: ComponentType<IconProps>;
  children: NavLeaf[];
};

export const chapters: NavChapter[] = [
  {
    id: "introduction",
    index: null,
    label: "Introduction",
    summary: "What this guide is and how to read it.",
    icon: chapterIcons.overview,
    children: [
      { id: "contents", label: "What's inside" },
      { id: "how-to-use", label: "How to use this guide" },
    ],
  },
  {
    id: "terminology",
    index: "01",
    label: "AI Terminology",
    summary: "The vocabulary of the AI era, in plain language.",
    icon: chapterIcons.ai,
    children: [
      { id: "foundations", label: "The foundations" },
      { id: "talking", label: "How you talk to it" },
      { id: "autonomy", label: "Tools & autonomy" },
      { id: "frontier", label: "The frontier" },
      { id: "terminology-study", label: "Study check" },
    ],
  },
  {
    id: "prompts",
    index: "02",
    label: "Prompt Structure",
    summary: "Briefing AI like a teammate — the six-part framework.",
    icon: chapterIcons.prompt,
    children: [
      { id: "two-ways", label: "The same request, two ways" },
      { id: "framework", label: "The six-part framework" },
      { id: "universal-layer", label: "The universal trick" },
      { id: "worked-examples", label: "Worked examples" },
      { id: "mindset", label: "One prompt is not enough" },
      { id: "thinking-execution", label: "Thinking vs execution" },
      { id: "prompts-study", label: "Study check" },
    ],
  },
  {
    id: "git",
    index: "03",
    label: "Git & GitHub",
    summary: "Version control without the intimidation.",
    icon: chapterIcons.git,
    children: [
      { id: "git-problem", label: "The problem" },
      { id: "git-vs-github", label: "Git vs GitHub" },
      { id: "git-workflow", label: "The four-act workflow" },
      { id: "git-rhythm", label: "The daily rhythm" },
      { id: "git-faq", label: "Frequently asked" },
      { id: "git-scenario", label: "Two days with Maya" },
      { id: "git-study", label: "Study check" },
    ],
  },
  {
    id: "terminal",
    index: "04",
    label: "Terminal Basics",
    summary: "The commands you'll actually use.",
    icon: chapterIcons.terminal,
    children: [
      { id: "term-around", label: "Getting around" },
      { id: "term-files", label: "Making & managing files" },
      { id: "term-search", label: "Looking & searching" },
      { id: "term-projects", label: "Running projects" },
      { id: "term-power", label: "Power & help" },
      { id: "term-session", label: "One session, start to finish" },
      { id: "terminal-study", label: "Study check" },
    ],
  },
  {
    id: "deep-dives",
    index: "05",
    label: "Deep Dives",
    summary: "Four things worth understanding properly.",
    icon: chapterIcons.deepdive,
    children: [
      { id: "dd-api", label: "Reading an API docs page" },
      { id: "dd-getpost", label: "GET vs POST" },
      { id: "dd-mcp", label: "MCP, in detail" },
      { id: "dd-llm", label: "How an LLM is made" },
      { id: "dd-rag", label: "RAG — fresh knowledge" },
      { id: "deepdives-study", label: "Study check" },
    ],
  },
  {
    id: "glossary",
    index: null,
    label: "Glossary",
    summary: "Every key term, A–Z.",
    icon: chapterIcons.glossary,
    children: [{ id: "glossary-list", label: "A–Z quick lookup" }],
  },
  {
    id: "closing",
    index: null,
    label: "You're ready",
    summary: "The one-page cheat sheet.",
    icon: chapterIcons.closing,
    children: [{ id: "cheat-sheet", label: "One-page cheat sheet" }],
  },
];

/** Flat list of every anchor id in document order — used by the scroll-spy. */
export const allSectionIds: string[] = chapters.flatMap((c) => [
  c.id,
  ...c.children.map((child) => child.id),
]);
