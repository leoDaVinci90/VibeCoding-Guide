import { Section, SectionHeader, Subhead, Prose, Callout } from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import { IconArrowRight, IconIdea } from "@/components/icons/ui";
import s from "./sections.module.css";

const toc = [
  {
    index: "01",
    href: "#terminology",
    title: "AI Terminology",
    desc: "The vocabulary of the AI era — from “model” to “agent”, LLM to hallucination, defined in plain language with examples.",
    count: "18 terms",
  },
  {
    index: "02",
    href: "#prompts",
    title: "Prompt Structure",
    desc: "Briefing AI like a teammate — the six-part framework, plus worked prompts for UX research, product design and content design.",
    count: "6 parts",
  },
  {
    index: "03",
    href: "#git",
    title: "Git & GitHub",
    desc: "Version control without the intimidation — the concepts, the four-act workflow, and a full day-in-the-life walkthrough.",
    count: "1 scenario",
  },
  {
    index: "04",
    href: "#terminal",
    title: "Terminal Basics",
    desc: "The commands you'll actually use, what each one means, and a single guided session that ties them all together.",
    count: "20 commands",
  },
  {
    index: "05",
    href: "#deep-dives",
    title: "Deep Dives",
    desc: "Reading API docs, GET vs POST, what MCP really is, and how an LLM is actually made — vector databases, RAG and more.",
    count: "4 topics",
  },
];

const colourCode = [
  { tone: "essential", label: "Red", text: "The essentials — slow down here." },
  { tone: "context", label: "Blue", text: "Context and asides." },
  { tone: "action", label: "Green", text: "“Do this” — practical moves." },
] as const;

export function Contents() {
  return (
    <Section id="introduction">
      <SectionHeader
        id="introduction"
        eyebrow="Contents"
        icon={chapterIcons.overview}
        title="What's inside"
        lede="Five sections and a set of deep dives — read front to back, then keep it beside you as a reference."
      />

      <div id="contents" className={s.toc}>
        {toc.map((item) => (
          <a key={item.index} href={item.href} className={s.tocItem}>
            <span className={s.tocIndex}>{item.index}</span>
            <span className={s.tocMain}>
              <span className={s.tocTitle}>
                {item.title}
                <IconArrowRight size={16} strokeWidth={1.6} />
              </span>
              <span className={s.tocDesc}>{item.desc}</span>
            </span>
            <span className={s.tocCount}>{item.count}</span>
          </a>
        ))}
      </div>

      <Subhead
        id="how-to-use"
        kicker="How to use this guide"
        title="Recognise the words, not memorise them"
      />
      <Prose>
        <p>
          Read it once from front to back — the sections build on each other.
          Then keep it beside you as a reference during the practical classes.
          You don&apos;t need to memorise anything; you need to{" "}
          <strong>recognise the words and the patterns</strong> when they come
          up.
        </p>
        <p>
          Colour marks the parts worth slowing down on. Each section closes with
          a <strong>Study check</strong> — a few things to try and the mistakes
          to avoid — and there&apos;s an A–Z glossary at the back for quick
          lookups.
        </p>
      </Prose>

      <div style={{ marginTop: "var(--space-6)" }}>
        <div className={s.codeKeys}>
          {colourCode.map((c) => (
            <div key={c.label} className={s.codeKey} data-tone={c.tone}>
              <span className={s.codeSwatch} />
              <span>
                <span className={s.codeKeyLabel}>{c.label}</span>
                <span className={s.codeKeyText}>{c.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <Callout
          variant="feature"
          title="The whole point"
          icon={<IconIdea size={20} strokeWidth={1.6} />}
        >
          <strong>Vibe coding</strong> is building software by describing what
          you want in natural language instead of writing every line yourself.
          You act more like a creative director than a typist: the AI generates
          and iterates on the code while you steer.
        </Callout>
      </div>
    </Section>
  );
}
