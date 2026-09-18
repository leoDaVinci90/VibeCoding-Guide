import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Prose,
  Callout,
  CodeBlock,
  DataTable,
  Steps,
} from "@/components/content";

export function Briefing() {
  return (
    <ChapterView
      slug="briefing"
      lede="The original six-part brief remains useful. For building software, add a seventh part: Validation."
    >
      <Sub id="seven-part-brief" title="The seven-part brief">
        <DataTable
          columns={["Question", "Section", "What it contributes"]}
          rows={[
            {
              head: "Who should the AI act as?",
              cells: ["Role", "Relevant expertise and perspective"],
            },
            {
              head: "Why does this exist?",
              cells: ["Context", "Product and problem understanding"],
            },
            {
              head: "Who is it for?",
              cells: ["User", "Needs, situation, and capability"],
            },
            {
              head: "What should be produced?",
              cells: ["Requirements", "Scope, behaviour, and deliverables"],
            },
            {
              head: "What limits apply?",
              cells: ["Constraints", "Boundaries, risks, and exclusions"],
            },
            {
              head: "What does good look like?",
              cells: ["Success", "Quality and outcome"],
            },
            {
              head: "How will we check it?",
              cells: ["Validation", "Tests, inspection, and evidence"],
            },
          ]}
        />
        <Callout tone="warn" title="Weak request">
          Make me a modern recommendation page with some nice animations.
        </Callout>
        <Prose>
          <p>
            <strong>Strong brief:</strong>
          </p>
        </Prose>
        <CodeBlock
          label="strong brief · markdown"
          variant="code"
          lines={[
            { t: "# Role", kind: "heading" },
            { t: "You are a senior product designer and frontend developer creating a small educational prototype." },
            { t: "" },
            { t: "# Context", kind: "heading" },
            { t: "Creative Recharge helps desk-based workers choose a short break based on their available time and energy." },
            { t: "" },
            { t: "# User", kind: "heading" },
            { t: "A busy person who feels mentally stuck and wants a suggestion in under 30 seconds." },
            { t: "" },
            { t: "# Requirements", kind: "heading" },
            { t: "Create a one-page flow: introduction → three questions → one recommendation → start again. Use local sample data only." },
            { t: "" },
            { t: "# Constraints", kind: "heading" },
            { t: "No sign-in, database, health claims, location access, or external API. Use semantic HTML and do not add decorative UI that slows the flow." },
            { t: "" },
            { t: "# Success", kind: "heading" },
            { t: "The experience feels calm, playful, and complete. A first-time user can reach a useful result without explanation." },
            { t: "" },
            { t: "# Validation", kind: "heading" },
            { t: "Check the flow using keyboard only, at 320px and 1440px widths, with reduced motion enabled, and confirm the production build succeeds." },
          ]}
        />
      </Sub>

      <Sub id="discipline-layers" title="Discipline-specific layers">
        <Prose>
          <p>
            The shared structure stays the same. Add the layer that carries your
            craft.
          </p>
          <p>
            <strong>Product design — interaction model.</strong> Describe
            sequence, decisions, states, navigation, system feedback, error
            recovery, and what should remain persistent.
          </p>
          <p>
            <strong>Visual design — visual direction.</strong> Describe
            hierarchy, grid, typography, palette, density, imagery, component
            character, and what to avoid. Translate taste into observable
            properties rather than stacking adjectives such as “modern, premium,
            clean.”
          </p>
          <p>
            <strong>Content design — language system.</strong> Describe user
            knowledge, tone, terminology, reading level, message hierarchy,
            content patterns, and examples. Specify what the interface must help
            the person understand or do.
          </p>
          <p>
            <strong>User research — evidence layer.</strong> Separate observed
            evidence from interpretation and assumption. Include research
            questions, sample limits, known behavioural signals, and what the
            prototype is intended to learn.
          </p>
        </Prose>
      </Sub>

      <Sub id="thinking-vs-building" title="Separate thinking from building">
        <Prose>
          <p>
            Do not force planning, selection, implementation, and critique into
            one request. Use four moments:
          </p>
        </Prose>
        <Steps
          items={[
            { title: "Inspect", body: "What exists? What is unclear?" },
            {
              title: "Propose",
              body: "What approaches are possible and what are the trade-offs?",
            },
            {
              title: "Choose",
              body: "Which direction are we taking and why?",
            },
            {
              title: "Implement",
              body: "Build the agreed slice and validate it.",
            },
          ]}
        />
        <Prose>
          <p>Useful prompt:</p>
        </Prose>
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Do not edit yet. Analyse the request and current project. List assumptions and open" },
            { t: "questions, then propose two approaches with trade-offs. Recommend one. After I choose," },
            { t: "produce a short implementation plan." },
          ]}
        />
      </Sub>

      <Sub id="small-slices" title="Build in small slices">
        <Prose>
          <p>
            A <strong>vertical slice</strong> is one thin, complete path through
            the experience. For the home project, that might be: answer three
            questions and receive one recommendation. It is more valuable than
            building five beautiful disconnected screens.
          </p>
          <p>
            After the slice works, add visual refinement, more suggestions,
            motion, sharing, or extra states one at a time.
          </p>
        </Prose>
      </Sub>

      <Sub id="feedback-moves" title="Four useful feedback moves">
        <Callout tone="context" title="Improve — preserve the direction and raise its quality">
          “Keep the structure. Strengthen hierarchy by reducing supporting-copy
          prominence and giving the recommendation more space.”
        </Callout>
        <Callout tone="context" title="Change — replace an incorrect decision">
          “Replace the modal with an inline result because it is the main
          outcome, not an interruption.”
        </Callout>
        <Callout tone="context" title="Explain — expose assumptions and trade-offs">
          “Explain why you created a new component instead of using the existing
          Surface component.”
        </Callout>
        <Callout tone="context" title="Review — inspect against explicit criteria">
          “Review this at 200% zoom, using keyboard only and with reduced motion.
          List issues before changing anything.”
        </Callout>
        <Prose>
          <p>
            Feedback becomes more effective when it names the observation,
            impact, and intended outcome:
          </p>
        </Prose>
        <Callout tone="action" title="Try it">
          “On mobile, the primary action falls below the first viewport, so the
          next step is easy to miss. Reduce non-essential vertical space while
          preserving a comfortable reading rhythm.”
        </Callout>
      </Sub>

      <Sub id="debugging-prompts" title="Debugging prompts">
        <Prose>
          <p>
            “It doesn’t work” gives the agent very little evidence. Use this
            structure:
          </p>
        </Prose>
        <CodeBlock
          label="debugging brief · markdown"
          variant="code"
          lines={[
            { t: "# Expected", kind: "heading" },
            { t: "What should happen?" },
            { t: "" },
            { t: "# Actual", kind: "heading" },
            { t: "What happened instead?" },
            { t: "" },
            { t: "# Reproduction", kind: "heading" },
            { t: "Exact steps, viewport, device/browser, and data." },
            { t: "" },
            { t: "# Evidence", kind: "heading" },
            { t: "Error text, console output, screenshot, or recording." },
            { t: "" },
            { t: "# Recent change", kind: "heading" },
            { t: "What changed immediately before the problem appeared?" },
            { t: "" },
            { t: "# Request", kind: "heading" },
            { t: "Diagnose the root cause before editing. Propose the smallest safe fix. After" },
            { t: "implementing, repeat the reproduction steps and report the result." },
          ]}
        />
        <Callout tone="warn" title="Watch out">
          Never solve an error by asking the agent to suppress it without
          understanding its cause.
        </Callout>
      </Sub>
    </ChapterView>
  );
}
