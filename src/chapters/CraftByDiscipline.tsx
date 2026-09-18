import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout } from "@/components/content";

export function CraftByDiscipline() {
  return (
    <ChapterView
      slug="craft-by-discipline"
      lede="Everyone can prompt. The value is bringing different forms of expertise into one build."
    >
      <Sub id="product-design" title="Product design">
        <Prose>
          <p>
            AI tends to create screens before it understands a journey. Product
            designers should slow that impulse down.
          </p>
          <p>Provide:</p>
          <ul>
            <li>the job the user is trying to accomplish;</li>
            <li>entry and exit points;</li>
            <li>decision points and dependencies;</li>
            <li>priority of actions;</li>
            <li>state transitions;</li>
            <li>what should be remembered;</li>
            <li>failure and recovery behaviour;</li>
            <li>acceptance criteria.</li>
          </ul>
          <p>
            Ask the agent to describe the flow in plain language before building
            it. Review whether each interaction has a clear system response and
            whether the simplest path remains visible.
          </p>
        </Prose>
      </Sub>

      <Sub id="visual-design" title="Visual design">
        <Prose>
          <p>
            AI tends to default to familiar visual clichés. Visual designers
            should give it a system, not a mood-board adjective cloud.
          </p>
          <p>Provide:</p>
          <ul>
            <li>typographic roles and scale;</li>
            <li>layout grid and max widths;</li>
            <li>spacing rhythm;</li>
            <li>semantic colour roles and contrast expectations;</li>
            <li>component geometry;</li>
            <li>icon style;</li>
            <li>imagery or illustration principles;</li>
            <li>motion purpose and tempo;</li>
            <li>explicit anti-references.</li>
          </ul>
          <p>
            Convert repeated visual values into design tokens. Review the
            rendered page, not only the code. Check multiple widths, long
            content, focus styles, zoom, and real imagery.
          </p>
        </Prose>
      </Sub>

      <Sub id="content-design" title="Content design">
        <Prose>
          <p>
            AI can produce fluent but generic copy. Content designers should
            define what each message must achieve.
          </p>
          <p>Provide:</p>
          <ul>
            <li>user intent and emotional context;</li>
            <li>message hierarchy;</li>
            <li>approved terminology;</li>
            <li>voice characteristics with examples;</li>
            <li>reading-level expectations;</li>
            <li>patterns for labels, instructions, errors, and confirmations;</li>
            <li>words or claims to avoid;</li>
            <li>localisation considerations.</li>
          </ul>
          <p>
            Review content in the live interface. A sentence that works in a
            document may fail inside a narrow card or at the moment of error.
            Never let placeholder copy become accidental final copy.
          </p>
        </Prose>
      </Sub>

      <Sub id="user-research" title="User research">
        <Prose>
          <p>
            AI can accelerate preparation and synthesis, but it can also flatten
            nuance or invent certainty.
          </p>
          <p>Use it to help:</p>
          <ul>
            <li>turn product assumptions into research questions;</li>
            <li>draft neutral discussion guides;</li>
            <li>generate edge cases for a study plan;</li>
            <li>structure notes;</li>
            <li>cluster de-identified observations;</li>
            <li>identify contradictions and missing evidence;</li>
            <li>draft a prototype specifically for a research question.</li>
          </ul>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Do not give a general-purpose AI identifiable participant data without
          approved governance. Do not ask it to manufacture participants and
          treat the output as research. Synthetic responses can help rehearse a
          guide or explore possible scenarios; they are not evidence of real user
          behaviour.
        </Callout>
        <Prose>
          <p>
            Researchers should keep an evidence trail: observation →
            interpretation → insight → opportunity. Ask the AI to cite which
            observations support each synthesis statement, then review the
            original material yourself.
          </p>
        </Prose>
      </Sub>

      <Sub id="one-team" title="Working as one team">
        <Prose>
          <p>
            The disciplines should not hand prompts to one another in a linear
            waterfall. Work around shared artefacts:
          </p>
          <ul>
            <li>a one-page product context;</li>
            <li>a journey and state map;</li>
            <li>an evidence and assumptions table;</li>
            <li>design and content principles;</li>
            <li>the running prototype;</li>
            <li>an issue list ordered by user impact;</li>
            <li>a shared definition of done.</li>
          </ul>
          <p>
            The prototype becomes a conversation object. Researchers sharpen what
            must be learned, product designers shape behaviour, content designers
            shape understanding, and visual designers shape perception and
            hierarchy.
          </p>
        </Prose>
      </Sub>
    </ChapterView>
  );
}
