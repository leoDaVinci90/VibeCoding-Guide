import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Subhead,
  Prose,
  CodeBlock,
  HomeProjectChecklist,
  GlossaryList,
  type GlossaryEntry,
} from "@/components/content";

const glossary: GlossaryEntry[] = [
  { term: "Acceptance criteria", def: "Observable conditions that define whether work is complete." },
  { term: "Agent", def: "AI system that can plan and use tools to take actions." },
  { term: "API", def: "A contract through which software systems exchange requests and responses." },
  { term: "Backend", def: "Server-side logic, data, and protected operations." },
  { term: "Branch", def: "An independent line of work in Git." },
  { term: "Commit", def: "A named checkpoint in a Git repository." },
  { term: "Component", def: "A reusable piece of an interface with defined structure and behaviour." },
  { term: "Context engineering", def: "Designing the information, instructions, examples, tools, and feedback available to AI." },
  { term: "Context window", def: "The information a model can use for one response." },
  { term: "Database", def: "Organised persistent storage for data." },
  { term: "Dependency/package", def: "Reusable external code included in a project." },
  { term: "Deployment", def: "Building and hosting an application so others can access it." },
  { term: "Design token", def: "A named design decision such as a colour, spacing value, or motion duration." },
  { term: "Environment variable", def: "Configuration supplied outside the main code, often used for secrets or environment-specific values." },
  { term: "Few-shot prompting", def: "Giving examples for a model to imitate." },
  { term: "Framework", def: "An organised set of conventions and tools for building applications." },
  { term: "Frontend", def: "The part of an application rendered for and operated by the user." },
  { term: "Git", def: "Version-control software that records project history." },
  { term: "GitHub", def: "An online platform for Git repositories and collaboration." },
  { term: "Hallucination", def: "Plausible AI output that is unsupported or false." },
  { term: "JSON", def: "A common text format for structured data." },
  { term: "LLM", def: "A model trained to process and generate language." },
  { term: "Localhost", def: "An application running on your own computer." },
  { term: "MCP", def: "A standard for connecting AI applications to tools and data sources." },
  { term: "Model", def: "A trained mathematical system that recognises or generates patterns." },
  { term: "Motion.dev", def: "A JavaScript animation library suited to interface motion and interactions." },
  { term: "Node.js", def: "A runtime that executes JavaScript outside the browser." },
  { term: "npm", def: "The package manager commonly bundled with Node.js." },
  { term: "Prompt", def: "The immediate request or instruction given to AI." },
  { term: "Pull request", def: "A proposal to review and merge one branch into another." },
  { term: "Repository", def: "A project tracked by Git." },
  { term: "Responsive design", def: "Designing behaviour and layout that adapt to available space and input methods." },
  { term: "Semantic HTML", def: "HTML elements chosen according to meaning and function." },
  { term: "Token", def: "A chunk of information processed by an AI model." },
  { term: "TypeScript", def: "JavaScript extended with type information." },
  { term: "Vibe coding", def: "Building software conversationally with AI while directing and reviewing the work." },
  { term: "Vertical slice", def: "A small end-to-end path through a product that works completely." },
];

export function Reference() {
  return (
    <ChapterView
      slug="reference"
      lede="Checklists, prompt patterns, a command cheat sheet, and a glossary — return here during the practical work."
    >
      <Sub id="project-start-checklist" title="Project-start checklist">
        <Subhead kicker="Before building" kickerTone="action" title="Set the foundations" />
        <HomeProjectChecklist
          storageKey="ref-before-building"
          title="Before building"
          items={[
            "State the problem, user, outcome, evidence, and assumptions.",
            "Define the smallest useful journey.",
            "Choose the lightest suitable stack.",
            "Create persistent project instructions.",
            "Define content, visual, interaction, accessibility, and responsive rules.",
            "Write observable acceptance criteria.",
          ]}
        />

        <Subhead kicker="During building" kickerTone="action" title="Keep quality visible" />
        <HomeProjectChecklist
          storageKey="ref-during-building"
          title="During building"
          items={[
            "Ask the agent to inspect and plan first.",
            "Build one vertical slice.",
            "Review the actual rendered experience.",
            "Keep changes small and commit checkpoints.",
            "Provide evidence when debugging.",
            "Check agent-created dependencies and commands.",
          ]}
        />

        <Subhead kicker="Before sharing" kickerTone="action" title="Final review" />
        <HomeProjectChecklist
          storageKey="ref-before-sharing"
          title="Before sharing"
          items={[
            "Test key flows and states.",
            "Test keyboard, focus, zoom, contrast, and reduced motion.",
            "Test agreed viewport sizes and long content.",
            "Run checks and production build.",
            "Inspect for secrets and personal data.",
            "Explain prototype limitations.",
          ]}
        />
      </Sub>

      <Sub id="prompt-patterns" title="Prompt patterns">
        <Subhead title="Inspect a project" />
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Inspect the project before editing. Identify its stack, structure, design-system" },
            { t: "sources, relevant patterns, test commands, and risks. Tell me what you need to" },
            { t: "clarify. Then propose a small plan and wait." },
          ]}
        />
        <Subhead title="Implement a feature" />
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Implement only [feature]. Reuse [components/patterns]. Handle [states]. Do not" },
            { t: "change [boundaries]. Validate with [commands and manual checks]. Summarise files," },
            { t: "decisions, results, and remaining uncertainty." },
          ]}
        />
        <Subhead title="Review a result" />
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Do not edit yet. Review the rendered experience against these criteria: [list]." },
            { t: "Separate critical issues, improvements, and optional polish. Cite the screen," },
            { t: "state, or file supporting each observation." },
          ]}
        />
        <Subhead title="Debug a problem" />
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Expected: [result]. Actual: [result]. Reproduction: [steps]. Evidence: [error or" },
            { t: "screenshot]. Recent change: [change]. Diagnose before editing, then make the" },
            { t: "smallest safe fix and repeat the reproduction steps." },
          ]}
        />
      </Sub>

      <Sub id="command-cheat-sheet" title="Command cheat sheet">
        <CodeBlock
          label="bash"
          lines={[
            { t: "# Where am I?", kind: "comment" },
            { t: "pwd", kind: "cmd" },
            { t: "ls", kind: "cmd" },
            { t: "" },
            { t: "# Start the project", kind: "comment" },
            { t: "npm install", kind: "cmd" },
            { t: "npm run dev", kind: "cmd" },
            { t: "" },
            { t: "# Stop the server", kind: "comment" },
            { t: "Ctrl + C", kind: "output" },
            { t: "" },
            { t: "# Check a production build", kind: "comment" },
            { t: "npm run build", kind: "cmd" },
            { t: "" },
            { t: "# Git checkpoint", kind: "comment" },
            { t: "git status", kind: "cmd" },
            { t: "git diff", kind: "cmd" },
            { t: "git add .", kind: "cmd" },
            { t: 'git commit -m "Describe the outcome"', kind: "cmd" },
            { t: "git push", kind: "cmd" },
          ]}
        />
      </Sub>

      <Sub id="glossary-list" title="Glossary">
        <Prose>
          <p>
            Every key term from the guide, in one place. Use it during the
            practical classes when a word comes up and you just need a one-line
            reminder.
          </p>
        </Prose>
        <GlossaryList entries={glossary} />
      </Sub>
    </ChapterView>
  );
}
