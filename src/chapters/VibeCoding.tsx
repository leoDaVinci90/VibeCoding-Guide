import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout, DataTable, StudyCheck } from "@/components/content";
import { IconIdea } from "@/components/icons/ui";

export function VibeCoding() {
  return (
    <ChapterView
      slug="vibe-coding-understood"
      lede="Strong vibe coding is not one spectacular prompt. It is a controlled loop of intention, context, implementation, review, and correction."
    >
      <Sub id="what-vibe-coding-is" title="What vibe coding is">
        <Prose>
          <p>
            Vibe coding is a conversational way to build software. You describe
            an outcome in natural language, an AI coding agent creates or
            changes the code, you inspect the result, and together you iterate.
          </p>
          <p>
            It can feel magical when a page appears after one request. The
            useful skill, however, begins after that first result. Strong vibe
            coding is not one spectacular prompt. It is a controlled loop of
            intention, context, implementation, review, and correction.
          </p>
        </Prose>
        <DataTable
          columns={["Traditional hands-on coding", "Designer-led vibe coding"]}
          rows={[
            {
              head: "Write each implementation detail directly",
              cells: ["Describe intent, behaviour, constraints, and quality"],
            },
            {
              head: "Read the code to understand every change",
              cells: [
                "Review both the experience and the agent’s change summary",
              ],
            },
            {
              head: "Debug primarily by editing code",
              cells: [
                "Reproduce the problem, provide evidence, and guide the agent to diagnose it",
              ],
            },
            {
              head: "Own technical execution directly",
              cells: [
                "Share execution with AI while retaining human accountability",
              ],
            },
          ]}
        />
        <Prose>
          <p>
            Vibe coding is excellent for learning, prototypes, experiments,
            internal tools, and small products. It can also contribute to
            production work, but production software still needs engineering
            review, security, testing, maintenance, and clear ownership.
          </p>
        </Prose>
      </Sub>

      <Sub id="your-role-changing" title="Your role is changing, not disappearing">
        <Prose>
          <p>
            AI can generate plausible interfaces extremely quickly. Plausible is
            not the same as purposeful.
          </p>
          <p>The AI does not automatically know:</p>
          <ul>
            <li>which user problem matters most;</li>
            <li>what evidence supports a decision;</li>
            <li>what your organisation is allowed to do;</li>
            <li>what the brand should feel like;</li>
            <li>which words may confuse or harm people;</li>
            <li>which edge cases are important;</li>
            <li>
              when a technically working result is ethically or experientially
              wrong.
            </li>
          </ul>
          <p>
            Your value moves upward — from manually producing every artefact to
            framing the work, supplying evidence, directing decisions, and
            judging quality.
          </p>
        </Prose>
        <Callout tone="essential" variant="feature" icon={<IconIdea size={20} />}>
          AI generates options. The team remains responsible for the decisions.
        </Callout>
      </Sub>

      <Sub id="chat-vs-agent" title="AI chat versus an AI coding agent">
        <Prose>
          <p>
            An AI chat assistant usually responds with advice, text, or
            snippets. An AI coding agent can inspect a project, create files,
            install packages, run commands, read errors, and edit multiple parts
            of the codebase.
          </p>
        </Prose>
        <DataTable
          columns={["Assistant", "Coding agent"]}
          rows={[
            { head: "Discusses the work", cells: ["Acts inside the project"] },
            {
              head: "Produces suggestions or code snippets",
              cells: ["Creates and edits real files"],
            },
            {
              head: "Needs you to transfer changes manually",
              cells: ["Can run and check the application"],
            },
            {
              head: "Best for thinking, critique, and preparation",
              cells: ["Best for implementation and debugging"],
            },
          ]}
        />
        <Prose>
          <p>
            Many products combine both modes. The important question is not the
            brand name. Ask: <strong>Can this tool only advise me, or can it act
            on the project?</strong>
          </p>
        </Prose>
      </Sub>

      <Sub id="where-each-discipline" title="Where each discipline contributes">
        <DataTable
          columns={["Discipline", "High-value contribution in vibe coding"]}
          rows={[
            {
              head: "Product design",
              cells: [
                "User flows, interaction models, information architecture, states, priorities, and acceptance criteria",
              ],
            },
            {
              head: "Visual design",
              cells: [
                "Art direction, hierarchy, typography, colour, spacing, responsive composition, tokens, and motion principles",
              ],
            },
            {
              head: "Content design",
              cells: [
                "Language strategy, labels, instructions, empty/error/success states, tone, readability, and recovery copy",
              ],
            },
            {
              head: "User research",
              cells: [
                "Evidence, assumptions, hypotheses, test plans, behavioural signals, synthesis, and limits on what may be claimed",
              ],
            },
          ]}
        />
        <Prose>
          <p>
            Everyone can prompt. The point is not for everyone to contribute the
            same prompt. The point is to bring different forms of expertise into
            one build.
          </p>
        </Prose>
      </Sub>

      <Sub id="the-core-loop" title="The core loop">
        <Callout tone="essential" variant="feature" icon={<IconIdea size={20} />}>
          Frame → Provide context → Plan → Build a small slice → Review → Test →
          Refine → Repeat
        </Callout>
        <Prose>
          <p>
            Do not ask an agent to build an entire complex product in one move.
            Large requests create large amounts of unreviewed decision-making.
            Small slices make quality visible and mistakes easier to reverse.
          </p>
        </Prose>
        <StudyCheck
          items={[
            "Explain vibe coding without using the phrase “AI writes the code.”",
            "Name one decision AI can assist with and one decision your team must own.",
            "Take a current project and identify its smallest useful interactive slice.",
          ]}
        />
      </Sub>
    </ChapterView>
  );
}
