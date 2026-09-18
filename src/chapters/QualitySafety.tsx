import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout } from "@/components/content";

export function QualitySafety() {
  return (
    <ChapterView
      slug="quality-and-safety"
      lede="Build quality and safety into the request — not as a final automated score."
    >
      <Sub id="accessibility" title="Accessibility">
        <Prose>
          <p>
            Accessibility is not a final automated score. Build it into the
            request. At minimum:
          </p>
          <ul>
            <li>use semantic elements before custom containers;</li>
            <li>ensure every control has an accessible name;</li>
            <li>support keyboard operation and visible focus;</li>
            <li>maintain sufficient contrast;</li>
            <li>do not communicate meaning through colour alone;</li>
            <li>provide text alternatives for meaningful images;</li>
            <li>preserve usability at zoom and larger text sizes;</li>
            <li>use clear headings and labels;</li>
            <li>respect reduced-motion preferences;</li>
            <li>keep target sizes and spacing usable.</li>
          </ul>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Automated tools catch only part of the problem. Test manually and
          involve disabled people in appropriate research where possible.
        </Callout>
      </Sub>

      <Sub id="responsive" title="Responsive behaviour">
        <Prose>
          <p>
            Responsive design is not “make it mobile.” Specify how the
            composition should adapt:
          </p>
          <ul>
            <li>what stacks, wraps, collapses, scrolls, or disappears;</li>
            <li>maximum and minimum widths;</li>
            <li>how navigation changes;</li>
            <li>what happens to long labels and translated content;</li>
            <li>which information remains prioritised;</li>
            <li>how pointer and touch interactions differ.</li>
          </ul>
          <p>
            Check the spaces between common device presets. Layouts often break
            between the screenshots everyone remembers to test.
          </p>
        </Prose>
      </Sub>

      <Sub id="states-edge-cases" title="States and edge cases">
        <Prose>
          <p>For each feature, consider:</p>
          <ul>
            <li>default;</li>
            <li>hover, focus, pressed, selected, and disabled;</li>
            <li>loading or progress;</li>
            <li>empty or first use;</li>
            <li>partial data;</li>
            <li>success and confirmation;</li>
            <li>recoverable error;</li>
            <li>blocking error;</li>
            <li>offline or unavailable service;</li>
            <li>permission denied;</li>
            <li>long, missing, or unexpected content.</li>
          </ul>
          <p>
            Not every feature needs every state. The habit is to ask, not to
            blindly generate them all.
          </p>
        </Prose>
      </Sub>

      <Sub id="privacy-security" title="Privacy and security">
        <Prose>
          <ul>
            <li>
              Never paste passwords, API secrets, private keys, production
              customer data, or identifiable research data into prompts.
            </li>
            <li>
              Store secrets in environment variables and keep <code>.env</code>{" "}
              files out of Git.
            </li>
            <li>
              A browser is public territory: anything shipped to frontend code
              can be inspected.
            </li>
            <li>
              Do not disable authentication or database protections just to make
              a demo work.
            </li>
            <li>Review dependency and data-permission choices before production use.</li>
            <li>
              Treat agent-suggested terminal commands as actions with real
              consequences; read them before approval.
            </li>
          </ul>
        </Prose>
      </Sub>

      <Sub id="performance-motion" title="Performance and motion">
        <Prose>
          <p>
            Motion should communicate change, relationship, or feedback — not
            prove that animation was installed.
          </p>
          <p>
            Use Motion.dev for purposeful microinteractions and transitions.
            Prefer CSS for simple state changes. Consider a more specialised
            animation tool only when the experience genuinely needs complex
            sequencing.
          </p>
          <p>Define a small motion system:</p>
          <ul>
            <li>quick feedback;</li>
            <li>standard transition;</li>
            <li>deliberate entrance;</li>
            <li>easing values;</li>
            <li>reduced-motion alternatives.</li>
          </ul>
          <p>
            Avoid animating everything on page load. Protect reading, input, and
            navigation from delay. Optimise large images and videos, and test on
            less powerful devices.
          </p>
        </Prose>
      </Sub>

      <Sub id="human-review" title="Human review">
        <Prose>
          <p>Before sharing, ask:</p>
          <ul>
            <li>Does the product make a claim we cannot support?</li>
            <li>Did the AI introduce a pattern we did not choose?</li>
            <li>Is the interface technically working but experientially confusing?</li>
            <li>Are we presenting synthetic material as user evidence?</li>
            <li>Could sensitive data have entered the project or repository?</li>
            <li>Can another person understand the limitations of this prototype?</li>
          </ul>
        </Prose>
      </Sub>
    </ChapterView>
  );
}
