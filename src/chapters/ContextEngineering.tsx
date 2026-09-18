import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Prose,
  Callout,
  CodeBlock,
  Steps,
  StudyCheck,
} from "@/components/content";
import { IconIdea } from "@/components/icons/ui";

export function ContextEngineering() {
  return (
    <ChapterView
      slug="context-engineering"
      lede="If prompting is writing one good brief, context engineering is setting up the entire studio so the collaborator can work well."
    >
      <Sub id="prompting-vs-context" title="Prompting is one moment; context is the environment">
        <Prose>
          <p>
            A prompt tells the AI what you want now.{" "}
            <strong>Context engineering</strong> is the deliberate work of giving
            the AI the right information, instructions, examples, tools, and
            feedback throughout the project.
          </p>
          <p>Good context answers questions such as:</p>
          <ul>
            <li>What are we building, and why?</li>
            <li>Who is it for?</li>
            <li>What evidence do we have?</li>
            <li>What already exists?</li>
            <li>Which design and content rules are fixed?</li>
            <li>Which technical choices have already been made?</li>
            <li>What may the agent change?</li>
            <li>How will we know the result works?</li>
          </ul>
        </Prose>
        <Callout tone="essential" title="Key idea" icon={<IconIdea size={20} />}>
          More context is not automatically better. The goal is relevant,
          trustworthy, current, and well-organised context.
        </Callout>
      </Sub>

      <Sub id="context-stack" title="The context stack">
        <Prose>
          <p>
            Think of context as seven layers. The lower layers change slowly;
            the upper layers change for each task.
          </p>
        </Prose>
        <Steps
          items={[
            {
              title: "Product truth",
              body: "Purpose, audience, problem, evidence, domain language.",
            },
            {
              title: "Experience model",
              body: "Journeys, information architecture, key flows, states, and principles.",
            },
            {
              title: "Design and content system",
              body: "Tokens, components, typography, voice, patterns, and accessibility rules.",
            },
            {
              title: "Technical environment",
              body: "Framework, folder structure, data model, dependencies, commands, and constraints.",
            },
            {
              title: "Working rules",
              body: "What the agent may edit, conventions to follow, checks to run, and how to report changes.",
            },
            {
              title: "Current task",
              body: "The exact feature, bug, or outcome being worked on now.",
            },
            {
              title: "Evidence from the latest attempt",
              body: "Screenshots, errors, test results, feedback, or changed requirements.",
            },
          ]}
        />
      </Sub>

      <Sub id="project-vs-task" title="Project context versus task prompt">
        <Prose>
          <p>
            <strong>Project context</strong> is long-lived. It should not need to
            be rewritten for every change.
          </p>
          <p>Example:</p>
        </Prose>
        <CodeBlock
          label="project context · markdown"
          variant="code"
          lines={[
            { t: "# Product", kind: "heading" },
            { t: "Creative Recharge helps desk-based workers choose a short, realistic break." },
            { t: "" },
            { t: "# Audience", kind: "heading" },
            { t: "Busy people with 5–15 minutes and no specialist equipment." },
            { t: "" },
            { t: "# Experience principles", kind: "heading" },
            { t: "- Calm, quick, and non-judgemental." },
            { t: "- One question at a time." },
            { t: "- Never imply medical or therapeutic benefit." },
            { t: "" },
            { t: "# Design system", kind: "heading" },
            { t: "- 4px spacing base." },
            { t: "- High-contrast neutral palette with one green accent." },
            { t: "- Use semantic HTML and visible focus states." },
            { t: "" },
            { t: "# Technical foundation", kind: "heading" },
            { t: "- React and TypeScript." },
            { t: "- Motion.dev for restrained transitions." },
            { t: "- No backend; suggestions are stored in local data." },
          ]}
        />
        <Prose>
          <p>
            A <strong>task prompt</strong> is temporary and specific:
          </p>
        </Prose>
        <CodeBlock
          label="task prompt · markdown"
          variant="code"
          lines={[
            { t: "Build the result card shown after the three questions." },
            { t: "Use the existing Button and Surface components." },
            { t: "Include title, duration, short instruction, Start again action, and a copy-link action." },
            { t: "Do not change global styles or the question flow." },
            { t: "Verify keyboard focus and the 320px mobile layout." },
          ]}
        />
        <Prose>
          <p>
            Keeping these separate prevents the AI from reinterpreting the whole
            product every time you request a small change.
          </p>
        </Prose>
      </Sub>

      <Sub id="persistent-instructions" title="Persistent project instructions">
        <Prose>
          <p>
            Coding tools can read durable project instruction files such as{" "}
            <strong>AGENTS.md</strong>, <strong>CLAUDE.md</strong>, or
            tool-specific project rules. Names and exact behaviour differ by
            tool, but the purpose is similar: keep important guidance close to
            the work.
          </p>
          <p>Useful persistent instructions include:</p>
          <ul>
            <li>the product in one paragraph;</li>
            <li>user and experience principles;</li>
            <li>the approved stack;</li>
            <li>file and component conventions;</li>
            <li>design tokens and component sources;</li>
            <li>content and accessibility rules;</li>
            <li>commands to run after changes;</li>
            <li>files or areas that must not be modified;</li>
            <li>how the agent should summarise work and flag uncertainty.</li>
          </ul>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Do not turn the file into a museum of every decision ever made. If
          instructions conflict or become stale, the agent will struggle. Assign
          clear owners and review the document when the project changes.
        </Callout>
      </Sub>

      <Sub id="existing-product" title="Context for an existing product">
        <Prose>
          <p>
            Before changing an existing codebase, ask the agent to inspect rather
            than immediately implement:
          </p>
        </Prose>
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Before editing anything, inspect the repository and tell me:" },
            { t: "1. the framework and project structure;" },
            { t: "2. where design tokens and shared components live;" },
            { t: "3. how similar features are implemented;" },
            { t: "4. the relevant tests and run commands;" },
            { t: "5. any risks or ambiguities you see." },
            { t: "Then propose a small implementation plan. Wait for approval before editing." },
          ]}
        />
        <Prose>
          <p>
            This reduces accidental duplication and helps the new work fit the
            system already in place.
          </p>
        </Prose>
      </Sub>

      <Sub id="figma-context" title="Context from Figma, screenshots, and references">
        <Prose>
          <p>
            A picture communicates visual direction quickly, but it leaves
            important questions unanswered. Whenever you provide a design
            reference, add:
          </p>
          <ul>
            <li>what must match closely;</li>
            <li>what is only inspiration;</li>
            <li>expected behaviour and states;</li>
            <li>responsive rules;</li>
            <li>exact content versus placeholder content;</li>
            <li>available assets and licences;</li>
            <li>component and token mappings;</li>
            <li>accessibility requirements.</li>
          </ul>
        </Prose>
        <Callout tone="context" title="In practice">
          If using a Figma connection, name the exact frame or component set. Ask
          the agent to map Figma elements to existing code components before
          creating new ones.
        </Callout>
      </Sub>

      <Sub id="context-hygiene" title="Context hygiene">
        <Prose>
          <p>
            Context becomes harmful when it is stale, contradictory, sensitive,
            or enormous.
          </p>
          <p>Use these habits:</p>
          <ul>
            <li>provide the smallest complete set of relevant sources;</li>
            <li>label facts, assumptions, decisions, and open questions separately;</li>
            <li>give dates or versions to time-sensitive material;</li>
            <li>remove resolved alternatives from active instructions;</li>
            <li>never paste secrets, private participant data, or production credentials;</li>
            <li>summarise long research into traceable findings, then link to source evidence;</li>
            <li>start a fresh task conversation when an old one has accumulated irrelevant directions;</li>
            <li>ask the agent to state which files and rules it used.</li>
          </ul>
        </Prose>
      </Sub>

      <Sub id="context-template" title="A reusable context template">
        <CodeBlock
          label="context template · markdown"
          variant="code"
          lines={[
            { t: "# Role", kind: "heading" },
            { t: "Act as a senior [discipline] collaborating with our team." },
            { t: "" },
            { t: "# Objective", kind: "heading" },
            { t: "What outcome are we trying to create, and why now?" },
            { t: "" },
            { t: "# Product context", kind: "heading" },
            { t: "What is the product, its value, and its current state?" },
            { t: "" },
            { t: "# Users and evidence", kind: "heading" },
            { t: "Who is affected? What do we know, from which source? What is still an assumption?" },
            { t: "" },
            { t: "# Scope", kind: "heading" },
            { t: "What is included? What is explicitly out of scope?" },
            { t: "" },
            { t: "# Journey and information architecture", kind: "heading" },
            { t: "Where does this work sit? What happens before and after?" },
            { t: "" },
            { t: "# Requirements and states", kind: "heading" },
            { t: "What must it do? Include default, loading, empty, success, error, and permission states where relevant." },
            { t: "" },
            { t: "# Discipline layer", kind: "heading" },
            { t: "Interaction model, visual direction, tone of voice, or research evidence." },
            { t: "" },
            { t: "# Design-system context", kind: "heading" },
            { t: "Approved tokens, components, patterns, and references." },
            { t: "" },
            { t: "# Technical context", kind: "heading" },
            { t: "Stack, existing architecture, data, dependencies, and constraints." },
            { t: "" },
            { t: "# Accessibility and responsive behaviour", kind: "heading" },
            { t: "Keyboard, screen reader, contrast, reduced motion, zoom, and target viewport expectations." },
            { t: "" },
            { t: "# Constraints and risks", kind: "heading" },
            { t: "What must not change? What legal, privacy, security, time, or policy limits apply?" },
            { t: "" },
            { t: "# Acceptance criteria", kind: "heading" },
            { t: "Observable conditions that define done." },
            { t: "" },
            { t: "# Validation", kind: "heading" },
            { t: "What should be run, inspected, or tested?" },
            { t: "" },
            { t: "# Execution", kind: "heading" },
            { t: "First inspect and plan. Build one small slice. Summarise changes, evidence, and remaining uncertainty." },
          ]}
        />
        <StudyCheck
          items={[
            "Separate the project context and current task for one piece of work.",
            "Identify one stale or contradictory instruction that could confuse an agent.",
            "Write three observable acceptance criteria instead of saying “make it better.”",
          ]}
        />
      </Sub>
    </ChapterView>
  );
}
