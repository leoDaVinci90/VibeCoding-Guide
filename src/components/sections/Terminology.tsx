import {
  Section,
  SectionHeader,
  Subhead,
  Stack,
  Callout,
  TermCard,
  DataTable,
  Figure,
  StudyCheck,
  Code,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import { IconArrowRight } from "@/components/icons/ui";
import s from "./sections.module.css";

export function Terminology() {
  return (
    <Section id="terminology">
      <SectionHeader
        id="terminology"
        eyebrow="AI Terminology"
        index="01"
        icon={chapterIcons.ai}
        title="The words of the AI era"
        lede="You'll hear these words constantly once the practical classes begin. Read each entry for the shape of the idea, not the exact wording."
      />

      {/* GROUP A — Foundations */}
      <Subhead
        id="foundations"
        kicker="Group A"
        kickerTone="context"
        title="The foundations"
        note="What the technology is, and the raw materials it works with."
      />
      <Stack gap={4}>
        <TermCard
          name="Artificial Intelligence"
          sub="AI"
          tags={[{ label: "Foundation" }]}
          definition="Software designed to perform tasks that normally require human intelligence — understanding language, recognising images, writing text, solving problems."
          meta={[
            {
              label: "How it works",
              text: "It learns patterns from enormous amounts of data. Instead of following fixed rules, it predicts the most likely answer based on what it has seen.",
            },
            {
              label: "In the wild",
              text: "Spotify recommending music · Google Maps predicting traffic · ChatGPT answering questions.",
            },
          ]}
        />
        <TermCard
          name="AI Model"
          tags={[{ label: "Foundation" }]}
          definition="The trained “brain” behind an AI product — a giant mathematical function tuned to do a specific kind of task."
          meta={[
            {
              label: "How it works",
              text: "A company trains it on huge datasets. Once training finishes, the frozen model can answer questions, generate images, write code, and more.",
            },
            {
              label: "In the wild",
              text: "GPT-5, Claude and Gemini are all models. A product (like the ChatGPT app) is the wrapper around one.",
            },
          ]}
        />
        <TermCard
          name="Large Language Model"
          sub="LLM"
          tags={[{ label: "Foundation" }, { label: "Deep dive", tone: "context" }]}
          definition="A model trained to understand and generate human language."
          meta={[
            {
              label: "How it works",
              text: "It predicts the next most likely word based on everything written before. Trained on billions of examples, that simple mechanism becomes surprisingly powerful.",
            },
            {
              label: "In the wild",
              text: "Writing emails · summarising meetings · generating documentation · answering questions.",
            },
          ]}
        />
        <TermCard
          name="Large Reasoning Model"
          sub="LRM"
          tags={[{ label: "Foundation" }]}
          definition="An LLM optimised to think — to plan, break a problem into steps and check itself before answering."
          meta={[
            {
              label: "How it works",
              text: "Instead of blurting a quick answer, it spends extra effort reasoning, comparing options and testing assumptions. Every LRM is an LLM; not every LLM is an LRM.",
            },
            {
              label: "Analogy",
              text: "LLM = everyday car; LRM = race car. Reach for an LRM to structure a 3-month plan, not to rewrite one email.",
            },
          ]}
        />
        <TermCard
          name="Token & Tokenization"
          tags={[{ label: "Foundation" }]}
          definition="The unit a model actually reads — a chunk of text, usually a whole word or part of one."
          meta={[
            {
              label: "How it works",
              text: "Your text is split into tokens before the model sees it. Context limits and pricing are counted in tokens, not words.",
            },
            {
              label: "Rule of thumb",
              text: (
                <>
                  1 token ≈ ¾ of a word. A page of text is roughly{" "}
                  <Code>500 tokens</Code>.
                </>
              ),
            },
          ]}
        />
        <TermCard
          name="Context Window"
          tags={[{ label: "Foundation" }]}
          definition="How much information the model can hold in mind during one conversation, measured in tokens."
          meta={[
            {
              label: "How it works",
              text: "Everything you write and everything it replies fills the window. When it's full, the oldest content quietly falls out of memory.",
            },
            {
              label: "Analogy",
              text: "A whiteboard. Eventually you must erase older notes — so restate anything important that happened long ago.",
            },
          ]}
        />
        <TermCard
          name="Multimodal"
          tags={[{ label: "Foundation" }]}
          definition="A model that handles more than text — images, audio, files, sometimes video — and reasons across them together."
          meta={[
            {
              label: "Why it matters for us",
              text: "You can hand a model a design, not just describe it. Screenshots, Figma frames and PDFs all become input.",
            },
            {
              label: "Example",
              text: "Paste a screenshot of a cluttered UI and ask, “What's hurting the hierarchy here?”",
            },
          ]}
        />
        <TermCard
          name="Embeddings"
          tags={[{ label: "Foundation" }, { label: "Deep dive", tone: "context" }]}
          definition="A way of turning text (or images) into a list of numbers that captures meaning, so a computer can measure how similar two things are."
          meta={[
            {
              label: "How it works",
              text: "Similar meanings land close together in mathematical space. This is what powers smart search and RAG — see Section 05.",
            },
            {
              label: "Example",
              text: "“Car” and “automobile” sit close together; “car” and “banana” sit far apart.",
            },
          ]}
        />
        <TermCard
          name="Temperature"
          tags={[{ label: "Foundation" }]}
          definition="A dial for how predictable vs. creative the output is."
          meta={[
            {
              label: "How it works",
              text: "Low temperature = focused and repeatable. High temperature = more varied and surprising.",
            },
            {
              label: "When to change it",
              text: "Low for code and facts; higher for brainstorming names, taglines or divergent concepts.",
            },
          ]}
        />
      </Stack>

      {/* GROUP B — How you talk to it */}
      <Subhead
        id="talking"
        kicker="Group B"
        kickerTone="context"
        title="How you talk to it"
        note="The vocabulary of instructing a model — and its most famous failure mode."
      />
      <Stack gap={4}>
        <TermCard
          name="Prompt"
          tags={[{ label: "Section 02", tone: "essential" }]}
          definition="The instruction you give an AI. In this course, a prompt is a brief, not a magic sentence."
          meta={[
            {
              label: "Why it matters",
              text: "The clearer and more structured the prompt, the better the result — and the difference is enormous. Section 02 is devoted to writing one well.",
            },
          ]}
        />
        <TermCard
          name="System Prompt"
          tags={[{ label: "Behaviour" }]}
          definition="A set of standing instructions that shape how the AI behaves across the whole conversation."
          meta={[
            {
              label: "How it works",
              text: "Set once at the top — role, rules, tone. Every later message inherits it without you repeating yourself.",
            },
            {
              label: "Example",
              text: "“You are a senior product designer. Always consider accessibility and mobile first.”",
            },
          ]}
        />
        <TermCard
          name="Zero-shot & Few-shot"
          tags={[{ label: "Technique" }]}
          definition="Whether you give the model examples. Zero-shot = just the task. Few-shot = a few worked examples to copy."
          meta={[
            {
              label: "Why it helps",
              text: "Showing 2–3 examples of exactly the format you want dramatically improves consistency — the model imitates your samples.",
            },
            {
              label: "Example",
              text: "Paste two well-written user stories, then ask for a third “in the same style.”",
            },
          ]}
        />
        <TermCard
          name="Chain-of-thought"
          tags={[{ label: "Technique" }]}
          definition="Asking the model to reason step by step before giving its final answer."
          meta={[
            {
              label: "Why it helps",
              text: "On complex tasks, “think it through first, then answer” produces noticeably more reliable results. LRMs do this on their own — you'll see a visible “thinking” step.",
            },
          ]}
        />
        <TermCard
          name="Fine-tuning"
          tags={[{ label: "Behaviour" }]}
          definition="Taking an existing model and training it further for a specific purpose."
          meta={[
            {
              label: "How it works",
              text: "Instead of starting from scratch, you teach it extra knowledge or behaviour on top of what it already knows.",
            },
            {
              label: "Example",
              text: "A customer-support model trained specifically on your company's products and tone of voice.",
            },
          ]}
        />
        <TermCard
          name="Hallucination"
          tags={[{ label: "Watch out", tone: "warn" }]}
          definition="When AI confidently states something that isn't true."
          meta={[
            {
              label: "Why it happens",
              text: "The model predicts what sounds correct. Sometimes what sounds correct is simply wrong — and it says it with total confidence.",
            },
            {
              label: "The rule",
              text: "Invented stats, fake references, made-up API docs. Always verify facts, links and library names before trusting them.",
            },
          ]}
        />
      </Stack>

      {/* GROUP C — Tools & autonomy */}
      <Subhead
        id="autonomy"
        kicker="Group C"
        kickerTone="context"
        title="Tools & autonomy"
        note="The ladder from “answers your question” to “does the job for you.” This distinction matters most in vibe coding."
      />
      <Stack gap={4}>
        <TermCard
          name="AI Assistant"
          tags={[{ label: "Autonomy · Low", tone: "context" }]}
          definition="An application that lets you talk to one or more models through a friendly interface."
          meta={[
            {
              label: "How it works",
              text: "Takes your request, sends it to a model, optionally fetches info or uses a tool, and returns the reply.",
            },
            { label: "Examples", text: "ChatGPT · Claude · Gemini." },
          ]}
        />
        <TermCard
          name="AI Agent"
          tags={[{ label: "Autonomy · Medium", tone: "warn" }]}
          definition="An AI system that completes a specific task using one or more tools."
          meta={[
            {
              label: "The loop",
              text: "Receives a request → uses the right tool(s) → completes the task → returns the result.",
            },
            {
              label: "Examples",
              text: "Remove an image background · translate text · rewrite content · a Zapier AI workflow.",
            },
          ]}
        />
        <TermCard
          name="Agentic AI"
          tags={[{ label: "Autonomy · High", tone: "essential" }]}
          definition="An AI that can plan, reason, decide and carry out many tasks to reach a goal — the engine of vibe coding."
          meta={[
            {
              label: "The loop",
              text: "Goal → plan → choose tools → execute → adapt to results → done.",
            },
            {
              label: "Examples",
              text: "Cursor Agent · Claude Code · OpenAI Codex — the tools you'll use in the practical classes.",
            },
          ]}
        />
      </Stack>

      <div style={{ marginTop: "var(--space-6)" }}>
        <DataTable
          columns={["", "Assistant", "Agent", "Agentic"]}
          rows={[
            {
              head: "What it does",
              cells: ["Answers & chats", "Completes one task", "Pursues a whole goal"],
            },
            {
              head: "Plans ahead?",
              cells: ["No", "Barely", <strong key="a">Yes — multi-step</strong>],
            },
            {
              head: "Uses tools?",
              cells: ["Sometimes", "Yes, fixed set", "Chooses its own"],
            },
            {
              head: "Your role",
              cells: ["Ask questions", "Trigger the task", "Art-direct & review"],
            },
          ]}
        />
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <Figure
          captionLabel="Fig. 1.1"
          caption="The same idea at three levels of autonomy"
        >
          <div className={s.flow}>
            <div className={s.flowStep} data-level="1">
              <div className={s.flowTag}>Low autonomy</div>
              <div className={s.flowTitle}>Assistant</div>
              <div className={s.flowText}>Answers &amp; chats. You ask the questions.</div>
            </div>
            <IconArrowRight className={s.flowArrow} size={22} strokeWidth={1.4} />
            <div className={s.flowStep} data-level="2">
              <div className={s.flowTag}>Medium autonomy</div>
              <div className={s.flowTitle}>Agent</div>
              <div className={s.flowText}>Completes one task with a tool.</div>
            </div>
            <IconArrowRight className={s.flowArrow} size={22} strokeWidth={1.4} />
            <div className={s.flowStep} data-level="3">
              <div className={s.flowTag}>High autonomy</div>
              <div className={s.flowTitle}>Agentic</div>
              <div className={s.flowText}>Plans &amp; pursues a whole goal.</div>
            </div>
          </div>
        </Figure>
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <Stack gap={4}>
          <TermCard
            name="MCP"
            sub="Model Context Protocol"
            tags={[{ label: "Deep dive", tone: "context" }]}
            definition="A standard way for AI models to connect to external tools and data."
            meta={[
              {
                label: "How it works",
                text: "Build one MCP server instead of a custom integration for every AI. Any compatible assistant can then use it.",
              },
              {
                label: "Examples",
                text: "Claude opening Figma · Cursor reading GitHub · ChatGPT reaching internal docs.",
              },
            ]}
          />
          <TermCard
            name="Skills"
            tags={[{ label: "Capability" }]}
            definition="Reusable capabilities that extend what an AI can do."
            meta={[
              {
                label: "How it works",
                text: "Instead of re-typing the same prompt, the AI follows a saved set of instructions or a workflow for a specific task.",
              },
              {
                label: "Example",
                text: "A “Design Review” skill that always checks accessibility, spacing, typography and consistency.",
              },
            ]}
          />
          <TermCard
            name="CLI"
            sub="Command Line Interface"
            tags={[{ label: "Section 04", tone: "essential" }]}
            definition="A text-based way to control your computer — typing commands instead of clicking buttons."
            meta={[
              {
                label: "Why it matters for us",
                text: "Many AI coding tools use the CLI to run code, install packages and automate tasks. Section 04 makes it feel easy.",
              },
              {
                label: "Example",
                text: (
                  <>
                    Instead of clicking “Create Project”, you type{" "}
                    <Code>npm create vite@latest</Code> and it&apos;s done.
                  </>
                ),
              },
            ]}
          />
          <TermCard
            name="API"
            sub="Application Programming Interface"
            tags={[{ label: "Deep dive", tone: "context" }]}
            definition="A contract that lets two pieces of software talk to each other."
            meta={[
              {
                label: "How it works",
                text: "One application sends a request; another sends back a response, in an agreed format.",
              },
              {
                label: "Example",
                text: "Uber asks Google Maps for directions; Maps sends back the route.",
              },
            ]}
          />
        </Stack>
      </div>

      {/* GROUP D — The frontier */}
      <Subhead
        id="frontier"
        kicker="Group D"
        kickerTone="context"
        title="The frontier"
        note="Two terms you'll hear in the news. Neither exists today — knowing that is the point."
      />
      <Stack gap={4}>
        <TermCard
          name="AGI"
          sub="Artificial General Intelligence"
          tags={[{ label: "Hypothetical", tone: "warn" }]}
          definition="An AI that could learn and perform any intellectual task a human can — adapting to new problems without a separate model for each."
          meta={[
            {
              label: "Picture it",
              text: "One person who is an excellent designer, doctor, engineer and lawyer at once, and can learn new professions on demand.",
            },
            { label: "Important", text: "AGI does not exist yet." },
          ]}
        />
        <TermCard
          name="ASI"
          sub="Artificial Super Intelligence"
          tags={[{ label: "Theoretical", tone: "warn" }]}
          definition="A form of AI that would surpass human intelligence in virtually every field — inventing technologies and reasoning far beyond us."
          meta={[
            {
              label: "Picture it",
              text: "Asking it to cure a disease, design clean energy and invent a new material in a single afternoon.",
            },
            {
              label: "Important",
              text: "ASI is still theoretical and does not exist today.",
            },
          ]}
        />
      </Stack>

      <div id="terminology-study" className={s.leadBlock} style={{ marginTop: "var(--space-8)" }}>
        <Callout tone="essential" title="Study check · Terminology">
          Test yourself before moving on — recognition beats memorisation.
        </Callout>
      </div>
      <StudyCheck
        tryItems={[
          "Explain LLM vs LRM to a teammate in one sentence each.",
          "Pick the right tool: (a) rewrite an email, (b) plan a 3-month roadmap.",
          "Name one place this week you'd double-check AI output for hallucinations.",
        ]}
        avoidItems={[
          "Saying “the AI” when you mean a specific model or app — be precise.",
          "Trusting confident answers without verifying facts and links.",
          "Assuming AGI or ASI exist today — they don't.",
        ]}
      />
    </Section>
  );
}
