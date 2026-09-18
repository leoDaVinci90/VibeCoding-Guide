/**
 * Navigation + routing model for the Vibe Coding Field Guide.
 *
 * Single source of truth for:
 *   - the sidebar tree,
 *   - the per-chapter route slugs (`/<slug>`),
 *   - the in-page anchor targets for every subchapter (deep links).
 *
 * Every child `id` here must match an `id` rendered in that chapter's content
 * (via <Section> or <Subhead id=…>) so deep links and the subchapter scroll-spy
 * line up.
 */

import type { ComponentType } from "react";
import { chapterIcons, type IconProps } from "@/components/icons/StreamlineIcons";

export type NavLeaf = {
  id: string;
  label: string;
};

export type NavChapter = {
  /** URL slug — the page lives at `/<slug>`. */
  slug: string;
  /** Two-digit chapter number, or null for front/back matter. */
  index: string | null;
  label: string;
  summary: string;
  icon: ComponentType<IconProps>;
  children: NavLeaf[];
};

export const chapters: NavChapter[] = [
  {
    slug: "welcome",
    index: "01",
    label: "Welcome",
    summary: "What this guide is, and how to read it.",
    icon: chapterIcons.welcome,
    children: [
      { id: "what-this-guide-is", label: "What this guide is" },
      { id: "how-to-use-it", label: "How to use it" },
      { id: "what-you-can-do", label: "What you will be able to do" },
    ],
  },
  {
    slug: "vibe-coding-understood",
    index: "02",
    label: "Vibe coding, properly understood",
    summary: "The mindset, your changing role, and the core loop.",
    icon: chapterIcons.vibe,
    children: [
      { id: "what-vibe-coding-is", label: "What vibe coding is" },
      { id: "your-role-changing", label: "Your role is changing" },
      { id: "chat-vs-agent", label: "AI chat versus an AI coding agent" },
      { id: "where-each-discipline", label: "Where each discipline contributes" },
      { id: "the-core-loop", label: "The core loop" },
    ],
  },
  {
    slug: "language-of-ai",
    index: "03",
    label: "The language of AI",
    summary: "The vocabulary of models, tokens, agents, and MCP.",
    icon: chapterIcons.language,
    children: [
      { id: "models-llms", label: "Models, LLMs, and reasoning models" },
      { id: "tokens-context", label: "Tokens and context windows" },
      { id: "multimodal", label: "Multimodal AI" },
      { id: "prompts-instructions", label: "Prompts, instructions, and examples" },
      { id: "agents-tools-mcp", label: "Agents, tools, skills, and MCP" },
      { id: "hallucinations", label: "Hallucinations and verification" },
    ],
  },
  {
    slug: "web-technology",
    index: "04",
    label: "Just enough web technology",
    summary: "How the web works — only the parts you need.",
    icon: chapterIcons.web,
    children: [
      { id: "how-webpage-works", label: "How a webpage works" },
      { id: "frontend-backend", label: "Frontend and backend" },
      { id: "html-css-js", label: "HTML, CSS, and JavaScript" },
      { id: "react-typescript", label: "React, TypeScript, and frameworks" },
      { id: "node-npm", label: "Node.js, npm, and packages" },
      { id: "apis-json-databases", label: "APIs, JSON, and databases" },
      { id: "localhost-github-deploy", label: "Localhost, GitHub, and deployment" },
    ],
  },
  {
    slug: "context-engineering",
    index: "05",
    label: "Context engineering",
    summary: "Setting up the whole studio, not just one prompt.",
    icon: chapterIcons.context,
    children: [
      { id: "prompting-vs-context", label: "Prompting is one moment" },
      { id: "context-stack", label: "The context stack" },
      { id: "project-vs-task", label: "Project context versus task prompt" },
      { id: "persistent-instructions", label: "Persistent project instructions" },
      { id: "existing-product", label: "Context for an existing product" },
      { id: "figma-context", label: "Context from Figma and references" },
      { id: "context-hygiene", label: "Context hygiene" },
      { id: "context-template", label: "A reusable context template" },
    ],
  },
  {
    slug: "briefing",
    index: "06",
    label: "Briefing and collaborating with AI",
    summary: "The seven-part brief and how to give feedback.",
    icon: chapterIcons.briefing,
    children: [
      { id: "seven-part-brief", label: "The seven-part brief" },
      { id: "discipline-layers", label: "Discipline-specific layers" },
      { id: "thinking-vs-building", label: "Separate thinking from building" },
      { id: "small-slices", label: "Build in small slices" },
      { id: "feedback-moves", label: "Four useful feedback moves" },
      { id: "debugging-prompts", label: "Debugging prompts" },
    ],
  },
  {
    slug: "build-workflow",
    index: "07",
    label: "The designer-led build workflow",
    summary: "Seven steps from framing to shipping.",
    icon: chapterIcons.workflow,
    children: [
      { id: "frame-problem", label: "Frame the problem" },
      { id: "plan-experience", label: "Plan the experience" },
      { id: "establish-foundations", label: "Establish foundations" },
      { id: "first-slice", label: "Build the first vertical slice" },
      { id: "expand-refine", label: "Expand and refine" },
      { id: "validate", label: "Validate" },
      { id: "ship-learn", label: "Ship and learn" },
    ],
  },
  {
    slug: "craft-by-discipline",
    index: "08",
    label: "Craft by discipline",
    summary: "How each discipline goes one level deeper.",
    icon: chapterIcons.craft,
    children: [
      { id: "product-design", label: "Product design" },
      { id: "visual-design", label: "Visual design" },
      { id: "content-design", label: "Content design" },
      { id: "user-research", label: "User research" },
      { id: "one-team", label: "Working as one team" },
    ],
  },
  {
    slug: "quality-and-safety",
    index: "09",
    label: "Quality, safety, and responsible practice",
    summary: "Accessibility, states, privacy, motion, and review.",
    icon: chapterIcons.quality,
    children: [
      { id: "accessibility", label: "Accessibility" },
      { id: "responsive", label: "Responsive behaviour" },
      { id: "states-edge-cases", label: "States and edge cases" },
      { id: "privacy-security", label: "Privacy and security" },
      { id: "performance-motion", label: "Performance and motion" },
      { id: "human-review", label: "Human review" },
    ],
  },
  {
    slug: "git-and-terminal",
    index: "10",
    label: "Git, GitHub, and the terminal",
    summary: "Version control and the command line, without fear.",
    icon: chapterIcons.git,
    children: [
      { id: "mental-model", label: "The mental model" },
      { id: "everyday-git-loop", label: "The everyday Git loop" },
      { id: "terminal-essentials", label: "Terminal essentials" },
      { id: "safe-habits", label: "Safe habits" },
    ],
  },
  {
    slug: "home-project",
    index: "11",
    label: "Home project",
    summary: "Build the Creative Recharge Generator.",
    icon: chapterIcons.project,
    children: [
      { id: "the-task", label: "The Creative Recharge Generator" },
      { id: "boundaries", label: "Brief and boundaries" },
      { id: "step-by-step", label: "Step-by-step guide" },
      { id: "role-lenses", label: "Role-specific lenses" },
      { id: "definition-of-done", label: "Definition of done" },
      { id: "reflection", label: "Reflection" },
    ],
  },
  {
    slug: "reference",
    index: "12",
    label: "Reference",
    summary: "Checklists, prompt patterns, commands, and glossary.",
    icon: chapterIcons.reference,
    children: [
      { id: "project-start-checklist", label: "Project-start checklist" },
      { id: "prompt-patterns", label: "Prompt patterns" },
      { id: "command-cheat-sheet", label: "Command cheat sheet" },
      { id: "glossary-list", label: "Glossary" },
    ],
  },
];

/** Look a chapter up by its URL slug. */
export function chapterBySlug(slug: string): NavChapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

/** The previous / next chapter for a given slug (for chapter-to-chapter nav). */
export function prevNext(slug: string): {
  prev: NavChapter | null;
  next: NavChapter | null;
} {
  const i = chapters.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? chapters[i - 1] : null,
    next: i < chapters.length - 1 ? chapters[i + 1] : null,
  };
}

/** Every subchapter anchor id for a chapter, in document order (for scroll-spy). */
export function sectionIdsFor(slug: string): string[] {
  const chapter = chapterBySlug(slug);
  if (!chapter) return [];
  return chapter.children.map((child) => child.id);
}
