import {
  Section,
  SectionHeader,
  Subhead,
  Prose,
  Stack,
  Callout,
  CodeBlock,
  DataTable,
  StudyCheck,
  Pill,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import s from "./sections.module.css";

const sixQuestions = [
  {
    n: "01",
    when: "Who?",
    title: "Role",
    text: "Who should the AI become? A visual designer, a UX researcher, a content designer, a marketing specialist.",
  },
  {
    n: "02",
    when: "Why?",
    title: "Context",
    text: "Why does this exist? The product, the feature, the business problem. Context lets the AI make better decisions.",
  },
  {
    n: "03",
    when: "For who?",
    title: "User",
    text: "Who are we solving this for? First-time user, returning customer, developer, a marketing audience.",
  },
  {
    n: "04",
    when: "What?",
    title: "Requirements",
    text: "What exactly needs to be produced? Features, sections, interactions, deliverables.",
  },
  {
    n: "05",
    when: "Limits?",
    title: "Constraints",
    text: "What should the AI avoid? A word limit, no gradients, no backend, accessibility requirements.",
  },
  {
    n: "06",
    when: "Success?",
    title: "Success",
    text: "How do we know it's good? Usable, actionable, professional, accessible — the definition of done.",
  },
];

const feedback = [
  {
    n: "01",
    when: "Improve",
    title: "When it's good, but could be better",
    text: "“Make the visual hierarchy stronger.” · “Simplify the layout.” · “Increase whitespace.”",
  },
  {
    n: "02",
    when: "Change",
    title: "When something is simply wrong",
    text: "“Replace the illustration.” · “Use cards instead of a table.” · “Make the CTA more prominent.”",
  },
  {
    n: "03",
    when: "Explain",
    title: "Underrated — ask why",
    text: "“Why did you choose this layout?” · “What alternatives would you consider?” · “What are the weaknesses?”",
  },
  {
    n: "04",
    when: "Review",
    title: "Ask the AI to critique itself",
    text: "“Identify accessibility issues.” · “Find inconsistencies.” · “Score this 1–10 and justify it.”",
  },
];

export function Prompts() {
  return (
    <Section id="prompts">
      <SectionHeader
        id="prompts"
        eyebrow="Prompt Structure"
        index="02"
        icon={chapterIcons.prompt}
        title="Brief the AI like a teammate"
        lede="Good designers already know how to write a brief. Vibe coding is the same skill, pointed at a new collaborator — and the quality of your output is decided here."
      />

      {/* Two ways */}
      <Subhead
        id="two-ways"
        kicker="The same request, two ways"
        title="A prompt is a brief, not a magic sentence"
      />
      <div className={s.flip}>
        <div className={s.flipCard}>
          <div className={s.flipLabel}>Most people think</div>
          <p className={s.flipText}>
            A prompt is a magic sentence — find the right words and you win.
          </p>
        </div>
        <div className={s.flipCard} data-good>
          <div className={s.flipLabel}>Reality</div>
          <p className={s.flipText}>
            A prompt is a brief — context, intent and constraints, written
            clearly.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <div className={s.compare}>
          <div className={s.compareCard} data-variant="bad">
            <div className={s.compareLabel}>Poor prompt</div>
            <p className={s.compareText}>
              “Create a modern portfolio homepage for a UX designer. Use a clean
              layout with a hero section, projects, about section and contact
              information. Make it look professional and responsive.”
            </p>
          </div>
          <div className={s.compareCard} data-variant="good">
            <div className={s.compareLabel}>Good prompt</div>
            <p className={s.compareText}>
              Role, context, audience, constraints and success criteria — the AI
              is given enough to make good decisions instead of guessing.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="the good prompt"
          lines={[
            { t: "You are an award-winning digital designer specialising in", kind: "plain" },
            { t: "editorial web experiences and Swiss graphic design.", kind: "plain" },
            { t: "", kind: "plain" },
            { t: "## Context", kind: "heading" },
            { t: "Design a homepage for a senior UX & Visual Designer portfolio.", kind: "plain" },
            { t: "Communicate maturity and craftsmanship — 15+ years of work.", kind: "plain" },
            { t: "", kind: "plain" },
            { t: "## Audience", kind: "heading" },
            { t: "Design leaders scanning for <30s before deciding to read on.", kind: "plain" },
            { t: "", kind: "plain" },
            { t: "## Constraints", kind: "heading" },
            { t: "Avoid gradients, glassmorphism, heavy shadows, generic SaaS", kind: "plain" },
            { t: "layouts. Use strong typography instead of effects.", kind: "plain" },
            { t: "", kind: "plain" },
            { t: "## Success criteria", kind: "heading" },
            { t: "Confident, sophisticated, editorial, timeless — exceptional", kind: "plain" },
            { t: "typography and clear hierarchy.", kind: "plain" },
          ]}
        />
      </div>

      {/* Framework */}
      <Subhead
        id="framework"
        kicker="The framework"
        title="Every brief answers six questions"
        note="Memorise these six and you have a reusable skeleton for any prompt, in any discipline. If a result disappoints, it's almost always because one of these six was missing."
      />
      <div className={s.qGrid}>
        {sixQuestions.map((q) => (
          <div key={q.n} className={s.qCard}>
            <div className={s.qTop}>
              <span className={s.qNum}>{q.n}</span>
              <span className={s.qWhen}>{q.when}</span>
            </div>
            <div className={s.qTitle}>{q.title}</div>
            <p className={s.qText}>{q.text}</p>
          </div>
        ))}
      </div>

      {/* Universal layer */}
      <Subhead
        id="universal-layer"
        kicker="The universal trick"
        title="The framework stays the same. Only one section changes."
        note="Whatever your discipline, you keep Role · Context · User · Requirements · Constraints · Success. You just add one special layer that carries the expertise of your craft."
      />
      <DataTable
        columns={["Discipline", "The special layer it adds"]}
        rows={[
          {
            head: "Visual Design",
            cells: [
              <>
                <strong>Visual Direction</strong> — Swiss minimalism, Apple HIG,
                editorial, brutalist, warm fintech…
              </>,
            ],
          },
          { head: "Content", cells: [<strong key="t">Tone of Voice</strong>] },
          { head: "Research", cells: [<strong key="t">Research Data & goals</strong>] },
          { head: "Development", cells: [<strong key="t">Technical Context</strong>] },
        ]}
      />

      {/* Worked examples */}
      <Subhead
        id="worked-examples"
        kicker="Worked examples · four disciplines"
        title="The framework, applied"
        note="Same six questions every time. Only the discipline layer shifts between a designer, a researcher and a content designer."
      />
      <Stack gap={6}>
        <div>
          <Pill tone="essential">Product / Visual Design · Visual Direction</Pill>
          <div style={{ marginTop: "var(--space-3)" }}>
            <CodeBlock
              label="brief"
              lines={[
                { t: "# Role", kind: "heading" },
                { t: "Senior Product Designer for premium web applications.", kind: "plain" },
                { t: "# Context", kind: "heading" },
                { t: "An empty state for the “Saved Trips” page of a travel", kind: "plain" },
                { t: "planner, for when a user hasn't planned any trips yet.", kind: "plain" },
                { t: "# User", kind: "heading" },
                { t: "A first-time user who just signed up — make it welcoming.", kind: "plain" },
                { t: "# Requirements", kind: "heading" },
                { t: "Illustration · headline · copy · primary CTA · responsive.", kind: "plain" },
                { t: "# Visual Direction  (discipline layer)", kind: "comment" },
                { t: "Swiss minimalist editorial, generous whitespace, strong", kind: "plain" },
                { t: "type hierarchy, monochrome + one restrained accent.", kind: "plain" },
                { t: "# Success", kind: "heading" },
                { t: "Feels polished, premium, and communicates the page's job.", kind: "plain" },
              ]}
            />
          </div>
        </div>

        <div>
          <Pill tone="context">UX Research · Research Data</Pill>
          <div style={{ marginTop: "var(--space-3)" }}>
            <CodeBlock
              label="brief"
              lines={[
                { t: "# Role", kind: "heading" },
                { t: "Senior UX Researcher, mixed-methods, fintech products.", kind: "plain" },
                { t: "# Context", kind: "heading" },
                { t: "Redesigning onboarding for a mobile bank. Drop-off is", kind: "plain" },
                { t: "highest at identity verification. One week, 5 participants.", kind: "plain" },
                { t: "# Requirements", kind: "heading" },
                { t: "A moderated usability-test plan: goals, 3 hypotheses,", kind: "plain" },
                { t: "screener, 6–8 task scenarios, and per-task metrics.", kind: "plain" },
                { t: "# Research Data  (discipline layer)", kind: "comment" },
                { t: "42% abandon at ID verification; SUS was 61 last quarter.", kind: "plain" },
                { t: "# Success", kind: "heading" },
                { t: "A plan a second researcher could run tomorrow, unaided.", kind: "plain" },
              ]}
            />
          </div>
        </div>

        <div>
          <Pill tone="context">UX Design · Interaction Model</Pill>
          <div style={{ marginTop: "var(--space-3)" }}>
            <CodeBlock
              label="brief"
              lines={[
                { t: "# Role", kind: "heading" },
                { t: "Senior UX Designer for complex form & checkout flows.", kind: "plain" },
                { t: "# Context", kind: "heading" },
                { t: "A 3-step checkout (cart → address → payment). Users lose", kind: "plain" },
                { t: "entered data when they go back to edit the cart.", kind: "plain" },
                { t: "# Requirements", kind: "heading" },
                { t: "Map the improved flow: each screen, its primary action,", kind: "plain" },
                { t: "and every state — empty, loading, success, error.", kind: "plain" },
                { t: "# Interaction Model  (discipline layer)", kind: "comment" },
                { t: "Persist data on backward nav. Validate inline. Define the", kind: "plain" },
                { t: "error state for a declined card.", kind: "plain" },
                { t: "# Success", kind: "heading" },
                { t: "A dev could build it; no user ever loses typed data.", kind: "plain" },
              ]}
            />
          </div>
        </div>

        <div>
          <Pill tone="action">Content Design · Tone of Voice</Pill>
          <div style={{ marginTop: "var(--space-3)" }}>
            <CodeBlock
              label="brief"
              lines={[
                { t: "# Role", kind: "heading" },
                { t: "Senior Content Designer, UX writing for finance.", kind: "plain" },
                { t: "# Context", kind: "heading" },
                { t: "A user's card payment just failed. Write the error and", kind: "plain" },
                { t: "recovery copy for the payment screen.", kind: "plain" },
                { t: "# Requirements", kind: "heading" },
                { t: "Error title (≤5 words), one line of body, button label,", kind: "plain" },
                { t: "a secondary link — three variations.", kind: "plain" },
                { t: "# Tone of Voice  (discipline layer)", kind: "comment" },
                { t: "Calm, plain, human. Never blame the user. Match:", kind: "plain" },
                { t: "· “That didn't go through. Let's try again.”", kind: "plain" },
                { t: "# Success", kind: "heading" },
                { t: "Clear what happened and what to do next — no blame.", kind: "plain" },
              ]}
            />
          </div>
        </div>
      </Stack>

      <div style={{ marginTop: "var(--space-6)" }}>
        <Callout tone="action" title="Notice the pattern">
          Across all four, five of the six sections barely moved. Only the
          discipline layer — Visual Direction, Research Data, Interaction Model,
          Tone of Voice — carried the craft. Learn the skeleton once; swap the
          one layer for your discipline.
        </Callout>
      </div>

      {/* Mindset */}
      <Subhead
        id="mindset"
        kicker="The mindset"
        title="One prompt is not enough"
        note="Beginners think: prompt → perfect result. Reality is: brief → draft → feedback → iteration → feedback → final."
      />
      <div className={s.flip}>
        <div className={s.flipCard}>
          <div className={s.flipLabel}>Wrong mindset</div>
          <p className={s.flipText}>“I'll write the perfect brief.”</p>
        </div>
        <div className={s.flipCard} data-good>
          <div className={s.flipLabel}>Right mindset</div>
          <p className={s.flipText}>
            “I'll write a good one, then become an art director.”
          </p>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <div className={s.qGrid}>
          {feedback.map((f) => (
            <div key={f.n} className={s.qCard}>
              <div className={s.qTop}>
                <span className={s.qNum}>{f.n}</span>
                <span className={s.qWhen}>{f.when}</span>
              </div>
              <div className={s.qTitle}>{f.title}</div>
              <p className={s.qText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Thinking vs execution */}
      <Subhead
        id="thinking-execution"
        kicker="A powerful technique"
        title="Separate thinking from execution"
      />
      <div className={s.compare}>
        <div className={s.compareCard} data-variant="bad">
          <div className={s.compareLabel}>Instead of saying</div>
          <p className={s.compareText}>“Redesign this screen.”</p>
        </div>
        <div className={s.compareCard} data-variant="good">
          <div className={s.compareLabel}>Say this</div>
          <p className={s.compareText}>
            “Analyse this screen. Explain the biggest usability problems. Suggest
            three approaches. I'll choose one before you implement.”
          </p>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Callout tone="essential" title="The golden rule">
          <strong>Brief → Generate → Evaluate → Refine → Repeat.</strong> You
          steer the direction instead of accepting the first solution — which
          dramatically improves results.
        </Callout>
      </div>

      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="a refinement prompt to keep"
          lines={[
            { t: "Act as a Senior [Designer / Researcher / Content Designer].", kind: "plain" },
            { t: "Review your previous response. Identify the three biggest", kind: "plain" },
            { t: "weaknesses. Explain why they reduce quality. Improve only", kind: "plain" },
            { t: "those areas, while preserving everything that already works.", kind: "plain" },
          ]}
        />
      </div>

      <div id="prompts-study" style={{ marginTop: "var(--space-8)" }}>
        <Callout tone="essential" title="Study check · Prompt structure">
          The one section to internalise most — practise the skeleton until it's
          automatic.
        </Callout>
      </div>
      <StudyCheck
        tryItems={[
          "Take a real task from your backlog and write it as a full 6-part brief.",
          "Rewrite a “magic sentence” prompt you've used into a proper brief.",
          "On one draft, use all four feedback moves once: Improve, Change, Explain, Review.",
        ]}
        avoidItems={[
          "Listing requirements but skipping Context and Success.",
          "Chasing the “perfect” prompt instead of iterating toward it.",
          "Accepting the first result — you're the art director, keep steering.",
        ]}
      />
    </Section>
  );
}
