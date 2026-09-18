import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout } from "@/components/content";
import { IconCheck } from "@/components/icons/ui";

export function BuildWorkflow() {
  return (
    <ChapterView
      slug="build-workflow"
      lede="Seven steps that keep quality visible: frame, plan, establish, build one slice, expand, validate, and ship."
    >
      <Sub id="frame-problem" title="1 · Frame the problem">
        <Prose>
          <p>
            Write a one-paragraph product statement. Identify the user, need,
            desired outcome, evidence, assumptions, and constraints. Decide what
            you are trying to learn — not only what you want to make.
          </p>
        </Prose>
      </Sub>

      <Sub id="plan-experience" title="2 · Plan the experience">
        <Prose>
          <p>
            Define the smallest journey that delivers value. Sketch the
            information architecture and the happy path. Then identify the states
            that could interrupt it: empty data, loading, errors, cancellation,
            permission, and completion.
          </p>
        </Prose>
      </Sub>

      <Sub id="establish-foundations" title="3 · Establish foundations">
        <Prose>
          <p>
            Choose the lightest suitable stack. Create the project instructions.
            Add the design foundations: type, colour, spacing, radius, elevation,
            and motion values. Decide what is fixed and what the AI may explore.
          </p>
        </Prose>
      </Sub>

      <Sub id="first-slice" title="4 · Build the first vertical slice">
        <Prose>
          <p>
            Ask the agent to implement one end-to-end path with plain but
            functional UI. Run it immediately. Interact with it yourself before
            adding more features.
          </p>
        </Prose>
      </Sub>

      <Sub id="expand-refine" title="5 · Expand and refine">
        <Prose>
          <p>
            Work feature by feature. Reuse components. Replace placeholders with
            purposeful content. Add responsive behaviour and restrained motion.
            Commit meaningful checkpoints.
          </p>
        </Prose>
      </Sub>

      <Sub id="validate" title="6 · Validate">
        <Prose>
          <p>Validate from several perspectives:</p>
          <ul>
            <li>
              <strong>functional:</strong> does the flow work?
            </li>
            <li>
              <strong>experiential:</strong> is it understandable and useful?
            </li>
            <li>
              <strong>visual:</strong> is hierarchy intentional and consistent?
            </li>
            <li>
              <strong>content:</strong> are words clear, accurate, and
              actionable?
            </li>
            <li>
              <strong>accessibility:</strong> can more people perceive and
              operate it?
            </li>
            <li>
              <strong>technical:</strong> does it build without errors and avoid
              obvious security problems?
            </li>
            <li>
              <strong>research:</strong> what did we actually learn, and what
              remains an assumption?
            </li>
          </ul>
        </Prose>
      </Sub>

      <Sub id="ship-learn" title="7 · Ship and learn">
        <Prose>
          <p>
            Deploy a shareable version. Explain that it is a prototype where
            appropriate. Record decisions, limitations, and next questions. A
            deployed URL is not the end of the design process; it is a new way to
            gather evidence.
          </p>
        </Prose>
        <Callout
          tone="action"
          title="A useful definition of done"
          icon={<IconCheck size={20} />}
        >
          <p>“Done” should be observable:</p>
          <ul>
            <li>all required paths can be completed;</li>
            <li>content is final for the prototype’s scope;</li>
            <li>keyboard focus is visible and logical;</li>
            <li>layouts work at agreed viewport sizes and zoom;</li>
            <li>
              loading, empty, success, and error states are handled where
              relevant;
            </li>
            <li>reduced-motion preferences are respected;</li>
            <li>no secrets are exposed;</li>
            <li>automated checks and production build pass;</li>
            <li>a human has reviewed the actual rendered experience.</li>
          </ul>
        </Callout>
      </Sub>
    </ChapterView>
  );
}
