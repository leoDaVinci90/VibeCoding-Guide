import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Subhead,
  Prose,
  Callout,
  CodeBlock,
  DataTable,
  HomeProjectChecklist,
  Placeholder,
} from "@/components/content";

export function HomeProject() {
  return (
    <ChapterView
      slug="home-project"
      lede="Build one small, delightful webpage that recommends a short creative break — the Creative Recharge Generator."
    >
      <Sub id="the-task" title="The Creative Recharge Generator">
        <Prose>
          <p>
            Build one small, delightful webpage that recommends a short creative
            break. The experience asks three friendly questions:
          </p>
          <ol>
            <li>How much time do you have? — 5, 10, or 20 minutes</li>
            <li>What is your energy like? — low, steady, or restless</li>
            <li>What sounds good? — move, notice, make, or reset</li>
          </ol>
          <p>
            It then reveals one suitable activity — for example a five-minute
            colour hunt, a ten-minute shape-photo challenge, a desk stretch, a
            tiny sound walk, or a one-sentence story prompt.
          </p>
        </Prose>
        <Placeholder
          motif="loop"
          caption="Placeholder: the three-question flow ending in one recommendation. Swap in your own illustration later."
        />
        <Prose>
          <p>
            This is a good first project because it has a real flow, content
            decisions, simple logic, visual personality, and room for research
            thinking — without accounts, databases, or complicated APIs.
          </p>
        </Prose>
      </Sub>

      <Sub id="boundaries" title="Brief and boundaries">
        <Prose>
          <p>Keep the first version intentionally small:</p>
          <ul>
            <li>one responsive webpage;</li>
            <li>an introduction, three questions, a result, and Start again;</li>
            <li>8–12 recommendations stored locally in the project;</li>
            <li>
              no login, database, geolocation, personal data, external API, or
              health claims;
            </li>
            <li>no more than one main action per step;</li>
            <li>use Motion.dev only for meaningful transitions and feedback;</li>
            <li>
              use simple temporary icons or geometric placeholders — you can
              create final icons and illustrations later.
            </li>
          </ul>
        </Prose>
        <Callout tone="context" title="What you are practising">
          <ul>
            <li>translating an idea into a small journey;</li>
            <li>creating useful project context;</li>
            <li>briefing an AI coding agent;</li>
            <li>reviewing interaction, visual, content, and research quality;</li>
            <li>building in slices rather than one giant prompt;</li>
            <li>using Git checkpoints;</li>
            <li>testing and publishing a working webpage.</li>
          </ul>
        </Callout>
      </Sub>

      <Sub id="step-by-step" title="Step-by-step guide">
        <Subhead
          kicker="Step 1"
          kickerTone="action"
          title="Decide the experience before opening the coding tool"
        />
        <Prose>
          <p>Write these six lines:</p>
          <ol>
            <li>
              <strong>Purpose:</strong> Help someone choose a realistic creative
              reset in under 30 seconds.
            </li>
            <li>
              <strong>Audience:</strong> Desk-based teammates who feel stuck or
              mentally tired.
            </li>
            <li>
              <strong>Moment:</strong> A short break during a working day.
            </li>
            <li>
              <strong>Tone:</strong> Friendly, calm, lightly playful, never
              patronising.
            </li>
            <li>
              <strong>Success:</strong> A new visitor reaches a recommendation
              without explanation.
            </li>
            <li>
              <strong>Boundary:</strong> This is wellbeing-inspired, not medical
              advice.
            </li>
          </ol>
          <p>Then create a small assumption table:</p>
        </Prose>
        <DataTable
          columns={["Assumption", "How this prototype could explore it"]}
          rows={[
            {
              head: "Three questions feel quick enough",
              cells: [
                "Observe whether a tester completes them without impatience",
              ],
            },
            {
              head: "People understand the energy choices",
              cells: ["Ask them to explain each choice in their own words"],
            },
            {
              head: "The recommendation feels achievable",
              cells: ["Ask whether they would actually do it now and why"],
            },
          ]}
        />
        <Callout tone="warn" title="Watch out">
          Do not conduct formal research unless you have time and consent. One
          informal walkthrough with a teammate is enough for this learning
          exercise.
        </Callout>

        <Subhead
          kicker="Step 2"
          kickerTone="action"
          title="Create the content first"
        />
        <Prose>
          <p>
            Write 8–12 recommendation objects before asking the AI to invent the
            interface. Each should contain:
          </p>
          <ul>
            <li>title;</li>
            <li>duration;</li>
            <li>energy fit;</li>
            <li>activity type;</li>
            <li>one-sentence invitation;</li>
            <li>2–3 short steps;</li>
            <li>a friendly completion line.</li>
          </ul>
          <p>Example:</p>
        </Prose>
        <CodeBlock
          label="json"
          variant="code"
          lines={[
            { t: "{" },
            { t: '  "title": "Five-minute colour hunt",' },
            { t: '  "duration": 5,' },
            { t: '  "energy": "steady",' },
            { t: '  "type": "notice",' },
            { t: '  "invitation": "Find one unexpected colour hiding in your surroundings.",' },
            { t: '  "steps": [' },
            { t: '    "Choose a colour you rarely notice.",' },
            { t: '    "Find three nearby objects containing it.",' },
            { t: '    "Photograph or sketch your favourite discovery."' },
            { t: "  ]," },
            { t: '  "completion": "Done. You just gave your attention a different job."' },
            { t: "}" },
          ]}
        />
        <Callout tone="warn" title="Watch out">
          Check that every option leads to at least one recommendation. Avoid
          claims such as “reduce anxiety” or “improve mental health.”
        </Callout>

        <Subhead
          kicker="Step 3"
          kickerTone="action"
          title="Establish visual and interaction direction"
        />
        <Prose>
          <p>Define the visual system in concrete language:</p>
          <ul>
            <li>warm off-white background;</li>
            <li>charcoal text and one fresh accent colour;</li>
            <li>
              one strong display face paired with a highly readable text face;
            </li>
            <li>generous whitespace and a narrow reading width;</li>
            <li>crisp borders, restrained radius, almost no shadow;</li>
            <li>one question per view;</li>
            <li>visible progress such as “2 of 3”;</li>
            <li>result feels like a small reveal, not a dashboard.</li>
          </ul>
          <p>Create a simple flow:</p>
        </Prose>
        <Callout tone="context" title="Flow">
          Welcome → Time → Energy → Activity type → Recommendation → Start again
        </Callout>
        <Prose>
          <p>
            Decide what happens when the user goes back, refreshes, or uses the
            keyboard. You may keep the first version simple, but make the
            decision explicit.
          </p>
        </Prose>

        <Subhead
          kicker="Step 4"
          kickerTone="action"
          title="Prepare the project context"
        />
        <Prose>
          <p>Create a project instruction file and include:</p>
          <ul>
            <li>the six-line product context;</li>
            <li>the experience flow;</li>
            <li>the content data;</li>
            <li>visual rules;</li>
            <li>accessibility rules;</li>
            <li>the approved stack;</li>
            <li>the instruction to use Motion.dev sparingly;</li>
            <li>the validation commands;</li>
            <li>explicit exclusions.</li>
          </ul>
          <p>
            Ask the agent to inspect the context and return a plan before it
            writes code.
          </p>
        </Prose>

        <Subhead
          kicker="Step 5"
          kickerTone="action"
          title="Build the plain vertical slice"
        />
        <Prose>
          <p>First prompt:</p>
        </Prose>
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Read the project instructions and recommendation data. Do not build yet." },
            { t: "Summarise the user flow, list assumptions or gaps, and propose a small component structure." },
            { t: "The first milestone is a plain but complete vertical slice: welcome, three questions," },
            { t: "one matched result, and Start again. No decorative motion yet." },
          ]}
        />
        <Prose>
          <p>After reviewing the plan:</p>
        </Prose>
        <CodeBlock
          label="prompt"
          variant="code"
          lines={[
            { t: "Build the agreed first milestone. Use semantic HTML, keyboard-operable controls," },
            { t: "visible focus, and clear selected states. Keep styling simple. Do not add features" },
            { t: "outside the brief. Run the app and production build, then summarise changed files," },
            { t: "validation results, and anything you could not verify." },
          ]}
        />
        <Prose>
          <p>Use the flow yourself. Commit when it works.</p>
        </Prose>

        <Subhead
          kicker="Step 6"
          kickerTone="action"
          title="Add craft in three focused passes"
        />
        <Callout tone="context" title="Pass A — experience and content">
          <ul>
            <li>Are the options mutually understandable?</li>
            <li>Is progress clear?</li>
            <li>Can the user change an answer?</li>
            <li>Does every recommendation match the selected inputs?</li>
            <li>Are instructions concise and possible?</li>
            <li>Is Start again obvious but secondary?</li>
          </ul>
        </Callout>
        <Callout tone="context" title="Pass B — visual system and responsiveness">
          <ul>
            <li>Apply the type, colour, spacing, border, and layout rules.</li>
            <li>Check 320px, 768px, and 1440px widths.</li>
            <li>Test long titles and long instructions.</li>
            <li>Keep one clear focal point per step.</li>
          </ul>
        </Callout>
        <Callout tone="context" title="Pass C — motion and feedback">
          <p>Use Motion.dev for:</p>
          <ul>
            <li>a short transition between questions;</li>
            <li>selected-option feedback;</li>
            <li>the result reveal;</li>
            <li>a subtle progress change.</li>
          </ul>
        </Callout>
        <Prose>
          <p>
            Keep transitions quick and interruptible. With reduced motion
            enabled, remove movement or replace it with a simple opacity change.
            Commit after each pass.
          </p>
        </Prose>

        <Subhead
          kicker="Step 7"
          kickerTone="action"
          title="Ask one person to try it"
        />
        <Prose>
          <p>
            Give them the URL or your local screen. Do not explain how it works.
            Ask them to think aloud while finding a break suggestion. Afterward,
            ask only:
          </p>
          <ul>
            <li>What did you think this page would do?</li>
            <li>Was any option difficult to interpret?</li>
            <li>Did the recommendation fit what you selected?</li>
            <li>Would you actually try it? Why or why not?</li>
          </ul>
          <p>
            Write observations before interpretations. Make one meaningful
            improvement based on what you learned. Do not redesign everything
            after one person.
          </p>
        </Prose>

        <Subhead
          kicker="Step 8"
          kickerTone="action"
          title="Final checks and publish"
        />
        <Prose>
          <p>Before publishing:</p>
        </Prose>
        <HomeProjectChecklist
          storageKey="publish"
          title="Before publishing"
          items={[
            "Complete the whole flow using only the keyboard.",
            "Check visible focus and selected states.",
            "Test at mobile, tablet, and wide desktop sizes.",
            "Enable reduced motion.",
            "Confirm every answer combination returns a result.",
            "Refresh and restart the flow.",
            "Inspect browser errors.",
            "Run the production build.",
            "Check that no secret or personal data exists in the repository.",
            "Add a short README explaining the idea, stack, and limitations.",
          ]}
        />
        <Prose>
          <p>Deploy it using a suitable hosting service and share the link.</p>
        </Prose>
      </Sub>

      <Sub id="role-lenses" title="Role-specific lenses">
        <Prose>
          <p>
            Everyone completes the same project. Use your discipline to go one
            level deeper:
          </p>
          <ul>
            <li>
              <strong>Product designer:</strong> document the flow, selection
              logic, state changes, and one edge case.
            </li>
            <li>
              <strong>Visual designer:</strong> create a small token set and show
              how hierarchy adapts across viewport sizes.
            </li>
            <li>
              <strong>Content designer:</strong> create the recommendation
              content model, tone principles, and error/recovery copy.
            </li>
            <li>
              <strong>User researcher:</strong> define assumptions, prepare the
              five-minute walkthrough, and separate observations from
              interpretations.
            </li>
          </ul>
          <p>These are lenses, not four separate assignments.</p>
        </Prose>
      </Sub>

      <Sub id="definition-of-done" title="Definition of done">
        <Prose>
          <p>The project is complete when:</p>
        </Prose>
        <HomeProjectChecklist
          storageKey="done"
          title="Definition of done"
          items={[
            "The full journey works.",
            "All answer options can produce an appropriate result.",
            "The interface is responsive and keyboard operable.",
            "Content is purposeful and avoids unsupported claims.",
            "Motion supports understanding and respects reduced motion.",
            "One person has tried it and one evidence-based improvement was made.",
            "The production build passes.",
            "The project is available through a shareable URL.",
          ]}
        />
      </Sub>

      <Sub id="reflection" title="Reflection">
        <Prose>
          <p>Add five short notes to the README:</p>
          <ol>
            <li>What did AI do well?</li>
            <li>Where did it make an assumption you had to correct?</li>
            <li>Which piece of context improved the result most?</li>
            <li>What did your discipline notice that the AI missed?</li>
            <li>
              What would you build next — and what would you deliberately leave
              out?
            </li>
          </ol>
        </Prose>
      </Sub>
    </ChapterView>
  );
}
