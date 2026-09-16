import {
  Section,
  SectionHeader,
  Subhead,
  Grid,
  Stack,
  Callout,
  CodeBlock,
  DataTable,
  Steps,
  Figure,
  StudyCheck,
  Code,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import { IconArrowRight } from "@/components/icons/ui";
import s from "./sections.module.css";

const anatomy = [
  { n: "①", label: "Method", text: "The kind of action (GET, POST…)." },
  { n: "②", label: "Endpoint", text: "The URL you call. {id} is a slot you fill in." },
  { n: "③", label: "Parameters", text: "The inputs it accepts, and which are required." },
  { n: "④", label: "Headers / auth", text: "Extra info, usually your API key to prove who you are." },
  { n: "⑤", label: "Example request", text: "Copy-paste code showing exactly how to call it." },
  { n: "⑥", label: "Example response", text: "The shape of the data you get back, in JSON." },
];

function Pipe({ nodes }: { nodes: { t: string; accent?: boolean }[] }) {
  return (
    <div className={s.pipeline}>
      {nodes.map((n, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span className={s.pipeNode} data-accent={n.accent || undefined}>
            {n.t}
          </span>
          {i < nodes.length - 1 && (
            <IconArrowRight className={s.pipeArrow} size={18} strokeWidth={1.5} />
          )}
        </span>
      ))}
    </div>
  );
}

export function DeepDives() {
  return (
    <Section id="deep-dives">
      <SectionHeader
        id="deep-dives"
        eyebrow="Deep Dives"
        index="05"
        icon={chapterIcons.deepdive}
        title="Four things worth understanding properly"
        lede="Optional, but valuable. These are the topics that turn “I can follow the steps” into “I understand what's happening.”"
      />

      {/* API docs */}
      <Subhead
        id="dd-api"
        kicker="Deep dive 01"
        title="How to read an API docs page"
        note="Almost every API's documentation is laid out the same way. Once you can read one, you can read them all."
      />
      <CodeBlock
        label="GET /v1/users/{id}"
        lines={[
          { t: "GET /v1/users/{id}", kind: "heading" },
          { t: "Retrieve a single user by their unique ID.", kind: "comment" },
          { t: "", kind: "plain" },
          { t: "Authorization: Bearer <your-api-key>", kind: "plain" },
          { t: "", kind: "plain" },
          { t: "curl https://api.example.com/v1/users/42 \\", kind: "cmd" },
          { t: '  -H "Authorization: Bearer sk-123"', kind: "plain" },
          { t: "", kind: "plain" },
          { t: "200 OK", kind: "heading" },
          { t: "{", kind: "output" },
          { t: '  "id": 42,', kind: "output" },
          { t: '  "name": "Maya Reis",', kind: "output" },
          { t: '  "role": "designer"', kind: "output" },
          { t: "}", kind: "output" },
        ]}
      />
      <div style={{ marginTop: "var(--space-5)" }} className={s.anatomy}>
        {anatomy.map((a) => (
          <div key={a.n} className={s.anatomyRow}>
            <span className={s.anatomyNum}>{a.n}</span>
            <span>
              <span className={s.anatomyLabel}>{a.label}</span>
              <span className={s.anatomyText}>{a.text}</span>
            </span>
          </div>
        ))}
      </div>

      {/* GET vs POST */}
      <Subhead
        id="dd-getpost"
        kicker="Deep dive 01 · continued"
        title="GET vs POST — the two you'll meet most"
        note="The simplest way to remember them: GET reads, POST writes."
      />
      <Grid cols={2}>
        <div className={s.flowStep} data-level="1">
          <div className={s.flowTag}>GET · read / fetch</div>
          <div className={s.flowText} style={{ marginTop: "var(--space-2)" }}>
            Ask for something without changing anything. Safe to repeat. Inputs
            ride in the URL. Like looking someone up in a phone book.
          </div>
          <div style={{ marginTop: "var(--space-3)" }}>
            <Code>GET /v1/users/42</Code>
          </div>
        </div>
        <div className={s.flowStep} data-level="3">
          <div className={s.flowTag}>POST · create / send</div>
          <div className={s.flowText} style={{ marginTop: "var(--space-2)" }}>
            Send new data to create or trigger something. Inputs travel in a
            body, not the URL. Like filling in a form and submitting it.
          </div>
          <div style={{ marginTop: "var(--space-3)" }}>
            <Code>POST /v1/users {"{ name }"}</Code>
          </div>
        </div>
      </Grid>
      <div style={{ marginTop: "var(--space-4)" }}>
        <Callout tone="context" title="Also worth knowing">
          You&apos;ll also see <strong>PUT / PATCH</strong> (update existing
          data) and <strong>DELETE</strong> (remove it) — same idea, different
          verbs.
        </Callout>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <DataTable
          columns={["Status", "What it means"]}
          rows={[
            { head: "200 OK", cells: ["Success. Here's the data you asked for."] },
            { head: "201 Created", cells: ["Success, and something new was created (a common reply to a POST)."] },
            { head: "400 Bad Request", cells: ["Your request was malformed — a missing field or wrong format."] },
            { head: "401 Unauthorized", cells: ["Missing or wrong API key — the server doesn't know who you are."] },
            { head: "404 Not Found", cells: ["That endpoint or item doesn't exist. Check the URL and the ID."] },
            { head: "500 Server Error", cells: ["Something broke on their end, not yours. Usually: try again later."] },
          ]}
        />
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <Callout tone="action" title="Read the first digit">
          <strong>2xx</strong> = success · <strong>4xx</strong> = you made a
          mistake · <strong>5xx</strong> = the server broke.
        </Callout>
      </div>

      {/* MCP */}
      <Subhead
        id="dd-mcp"
        kicker="Deep dive 02"
        title="MCP, in detail"
        note="Model Context Protocol. Think of it as a USB-C port for AI: one standard plug that lets any assistant connect to any tool or data source."
      />
      <Grid cols={2}>
        <div className={s.compareCard} data-variant="bad">
          <div className={s.compareLabel}>Before MCP</div>
          <p className={s.compareText}>
            Every AI needed a custom integration for every tool. 4 assistants × 5
            tools = 20 bespoke connectors to build and maintain.
          </p>
        </div>
        <div className={s.compareCard} data-variant="good">
          <div className={s.compareLabel}>With MCP</div>
          <p className={s.compareText}>
            Each tool exposes one MCP server. Any compatible assistant can use
            it. Build once, connect to everything.
          </p>
        </div>
      </Grid>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Subhead title="The three pieces" />
        <Stack gap={4}>
          <Callout tone="context" title="Host">
            The app you&apos;re using — Claude, Cursor, VS Code. It&apos;s where
            the conversation lives.
          </Callout>
          <Callout tone="context" title="Client">
            The connector inside the host that speaks the MCP language to a
            server. One client per server.
          </Callout>
          <Callout tone="context" title="Server">
            The small program that wraps a tool or data source — GitHub, Figma, a
            database — and exposes what the AI can do with it.
          </Callout>
        </Stack>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Grid cols={3}>
          <div className={s.qCard}>
            <div className={s.qTitle}>Tools</div>
            <p className={s.qText}>Actions it can take — “create an issue”, “read this file”, “run a query”.</p>
          </div>
          <div className={s.qCard}>
            <div className={s.qTitle}>Resources</div>
            <p className={s.qText}>Data it can read — documents, records, a page of your codebase.</p>
          </div>
          <div className={s.qCard}>
            <div className={s.qTitle}>Prompts</div>
            <p className={s.qText}>Ready-made instructions the tool suggests for common tasks.</p>
          </div>
        </Grid>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Figure captionLabel="Fig. 5.1" caption="One protocol, many tools">
          <Pipe
            nodes={[
              { t: "Host · Claude / Cursor", accent: true },
              { t: "One MCP protocol" },
              { t: "GitHub · Figma · Database · Docs" },
            ]}
          />
        </Figure>
      </div>

      {/* LLM */}
      <Subhead
        id="dd-llm"
        kicker="Deep dive 03"
        title="How an LLM is actually made"
        note="At heart, an LLM does one thing: predict the next token. Everything impressive it does is that one trick, scaled up enormously."
      />
      <Steps
        items={[
          {
            title: "Gather & tokenize the data",
            body: "Trillions of words — books, code, the web — are collected and cleaned, then chopped into tokens. The model only ever sees tokens, never letters.",
          },
          {
            title: "Pre-training — learn to predict",
            body: "The model repeatedly guesses the next token, getting corrected each time. Over billions of guesses it tunes its weights (parameters). Those weights are the trained model.",
          },
          {
            title: "Fine-tuning & alignment (RLHF)",
            body: "A raw model just continues text. To make it a helpful assistant, it's fine-tuned on good examples, then aligned with human feedback — people rate answers, and it learns to prefer helpful, honest, harmless ones.",
          },
          {
            title: "Inference — actually using it",
            body: "Now frozen, the model runs. You send tokens in, it predicts tokens out — one at a time, each feeding the next. That's why answers appear word by word.",
          },
        ]}
      />
      <div style={{ marginTop: "var(--space-5)" }}>
        <Figure captionLabel="Fig. 5.2" caption="From raw text to a helpful assistant">
          <Pipe
            nodes={[
              { t: "Data" },
              { t: "Tokenize" },
              { t: "Pre-train" },
              { t: "Fine-tune + RLHF" },
              { t: "Inference", accent: true },
            ]}
          />
        </Figure>
      </div>

      {/* RAG */}
      <Subhead
        id="dd-rag"
        kicker="Deep dive 03 · continued"
        title="Giving it fresh, private knowledge — RAG"
        note="A trained model's knowledge is frozen, and it has never seen your private documents. RAG — Retrieval-Augmented Generation — fixes both, without retraining."
      />
      <Stack gap={4}>
        <Callout tone="context" title="01 · Embeddings">
          Each chunk of text becomes a list of numbers that captures its
          meaning. “Reset my password” and “I'm locked out” land close together —
          even with no shared words.
        </Callout>
        <Callout tone="context" title="02 · Vector database">
          All those vectors are stored in a vector database. Given a new piece of
          text, it instantly finds the stored chunks whose meaning is closest —
          semantic search, not keyword search.
        </Callout>
        <Callout tone="action" title="03 · Retrieve, then generate">
          When you ask a question, the system retrieves the most relevant chunks,
          pastes them into the model's context, and asks it to answer using that
          material — current, grounded, and far less prone to hallucination.
        </Callout>
      </Stack>
      <div style={{ marginTop: "var(--space-5)" }}>
        <Figure captionLabel="Fig. 5.3" caption="Retrieval-Augmented Generation">
          <Pipe
            nodes={[
              { t: "Question" },
              { t: "Embed" },
              { t: "Vector DB search" },
              { t: "Top chunks" },
              { t: "Grounded answer", accent: true },
            ]}
          />
        </Figure>
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <Callout tone="context" title="Why you'll care as a designer">
          RAG is how a chatbot answers questions about your product's help
          centre, or cites your design guidelines. When someone says “we'll
          connect it to our docs,” this is what they mean — no retraining, just
          retrieval.
        </Callout>
      </div>

      <div id="deepdives-study" style={{ marginTop: "var(--space-8)" }}>
        <Callout tone="essential" title="Study check · Deep dives">
          Understanding the mechanism makes every tool less mysterious.
        </Callout>
      </div>
      <StudyCheck
        tryItems={[
          "Open any public API's docs and find all six areas from the anatomy.",
          "Predict the status code: wrong API key? missing page? malformed JSON?",
          "Explain RAG to a teammate in two sentences.",
        ]}
        avoidItems={[
          "Confusing GET and POST — reads vs writes.",
          "Thinking RAG retrains the model — it only retrieves.",
          "Treating a 4xx as the server's fault — it's usually yours.",
        ]}
      />
    </Section>
  );
}
