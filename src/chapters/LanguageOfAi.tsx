import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout, StudyCheck } from "@/components/content";
import { IconIdea } from "@/components/icons/ui";

export function LanguageOfAi() {
  return (
    <ChapterView
      slug="language-of-ai"
      lede="Enough vocabulary to follow the conversation — models, tokens, prompts, agents, and the ways AI can be wrong."
    >
      <Sub id="models-llms" title="Models, LLMs, and reasoning models">
        <Prose>
          <p>
            <strong>Artificial intelligence (AI)</strong> is the broad category:
            software that performs tasks associated with human intelligence.
          </p>
          <p>
            An <strong>AI model</strong> is a trained mathematical system that
            recognises and generates patterns. GPT, Claude, and Gemini refer to
            families of models; ChatGPT, Claude, and Gemini are also names used
            for products built around models. The product may add memory,
            search, files, tools, and a user interface.
          </p>
          <p>
            A <strong>large language model (LLM)</strong> processes and generates
            language — including programming languages — by predicting likely
            continuations from the context it receives.
          </p>
          <p>
            A <strong>reasoning model</strong> is optimised to spend more
            computation planning and checking difficult tasks. It can be useful
            for architecture, complex debugging, and multi-step analysis. A
            faster general model is often enough for copy edits, visual
            variations, or small code changes.
          </p>
        </Prose>
      </Sub>

      <Sub id="tokens-context" title="Tokens and context windows">
        <Prose>
          <p>
            A <strong>token</strong> is a chunk of information processed by a
            model. A word may be one token or several. Code, images, and files
            also consume context in model-specific ways.
          </p>
          <p>
            The <strong>context window</strong> is the amount of information
            available to the model for a response. It may include your messages,
            earlier replies, files, project rules, selected code, and tool
            results.
          </p>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Do not treat the context window as perfect memory. Depending on the
          product, long conversations may be truncated, summarised, or
          selectively retrieved. Important decisions should live in durable
          project documentation, not only in chat history.
        </Callout>
      </Sub>

      <Sub id="multimodal" title="Multimodal AI">
        <Prose>
          <p>
            A multimodal model can work across more than text — for example
            images, audio, PDFs, screenshots, or video. For designers, this
            means you can provide evidence directly:
          </p>
          <ul>
            <li>a screenshot of a broken layout;</li>
            <li>a Figma frame showing hierarchy and spacing;</li>
            <li>a research report to synthesise;</li>
            <li>a content model or tone-of-voice guide;</li>
            <li>a screen recording showing an interaction bug.</li>
          </ul>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Visual input is useful context, but it is not a precise specification
          by itself. Pair it with written behaviour, responsive rules, states,
          and acceptance criteria.
        </Callout>
      </Sub>

      <Sub id="prompts-instructions" title="Prompts, instructions, and examples">
        <Prose>
          <p>
            A <strong>prompt</strong> is the immediate request you give the
            model.
          </p>
          <p>
            <strong>Persistent instructions</strong> are standing rules that
            apply across many tasks — for example coding conventions,
            design-system usage, writing style, or validation commands.
          </p>
          <p>
            <strong>Few-shot examples</strong> are a small set of examples
            showing the desired pattern. They are especially valuable for tone
            of voice, naming, structured outputs, and recurring component
            patterns.
          </p>
        </Prose>
        <Callout tone="action" title="Try it">
          Instead of asking a model to reveal hidden private reasoning, ask for
          useful, inspectable outputs: assumptions, a short plan, alternatives,
          trade-offs, evidence, and a verification checklist.
        </Callout>
      </Sub>

      <Sub id="agents-tools-mcp" title="Agents, tools, skills, and MCP">
        <Prose>
          <p>
            An <strong>agent</strong> can plan and take actions to pursue a
            goal. It may inspect files, edit code, run a browser, or query
            another system.
          </p>
          <p>
            A <strong>tool</strong> is one action the agent can use, such as
            reading a file or running a test.
          </p>
          <p>
            A <strong>skill</strong> is a reusable set of instructions or a
            workflow for a particular job, such as reviewing accessibility or
            preparing a usability-test plan.
          </p>
        </Prose>
        <Callout tone="essential" title="Key idea" icon={<IconIdea size={20} />}>
          MCP — Model Context Protocol — is a standard that lets AI applications
          connect to external tools and data sources. A Figma connection might
          allow an agent to inspect frames; a documentation connection might
          allow it to search internal guidance. Access still matters: connecting
          a tool does not mean the agent should receive every piece of data in
          it.
        </Callout>
      </Sub>

      <Sub id="hallucinations" title="Hallucinations and verification">
        <Prose>
          <p>
            A <strong>hallucination</strong> is a plausible-sounding output that
            is unsupported or false. In coding, this might be a package that does
            not exist, an invented API method, or a confident explanation that
            does not match the actual code.
          </p>
          <p>Use the right kind of verification:</p>
          <ul>
            <li>factual claims → check a reliable source;</li>
            <li>package or framework behaviour → check official documentation;</li>
            <li>code changes → run the app, tests, and build;</li>
            <li>
              visual fidelity → compare the rendered result at relevant sizes;
            </li>
            <li>user claims → trace them to research evidence;</li>
            <li>
              accessibility → combine automated checks with keyboard and human
              review.
            </li>
          </ul>
        </Prose>
        <Callout tone="essential" variant="feature" icon={<IconIdea size={20} />}>
          Confidence is a style of delivery, not evidence of correctness.
        </Callout>
        <StudyCheck
          items={[
            "What is the difference between a model and a product built around a model?",
            "Why should important decisions live in project documentation rather than only in a long chat?",
            "Give one example of hallucination in your discipline.",
          ]}
        />
      </Sub>
    </ChapterView>
  );
}
