"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { chapters } from "@/data/guide";
import { IconArrowRight } from "@/components/icons/ui";
import s from "./Cover.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const outcomes = [
  "explain what vibe coding is without reducing it to “prompt and hope”",
  "choose an appropriate tool for a small prototype",
  "give an AI enough context to make useful decisions",
  "break an idea into small, testable slices",
  "contribute through your own discipline rather than imitating a developer",
  "recognise basic code, terminal, Git, API, and deployment language",
  "review a generated experience for usability, content, accessibility, and risk",
  "build and publish a small interactive webpage with AI assistance",
];

const meta = [
  { label: "For", value: "Designers & researchers" },
  { label: "Purpose", value: "Pre-course learning" },
  { label: "Chapters", value: "Twelve" },
  { label: "Reading time", value: "60–75 minutes" },
];

export function Cover() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        };

  return (
    <div className={s.cover}>
      <header className={s.hero}>
        <motion.p className={s.overline} {...rise(0)}>
          A friendly field guide
        </motion.p>

        <h1 className={s.title}>
          {["The Vibe Coding", "Field Guide"].map((line, i) => (
            <span key={line} className={s.titleLine}>
              <motion.span
                className={s.titleInner}
                initial={reduce ? false : { opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.08 + i * 0.08 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p className={s.lede} {...rise(0.3)}>
          A guide for product designers, visual designers, content designers,
          and user researchers who are new to vibe coding. It helps you
          recognise the language, understand the workflow, and know what to ask
          next — you do not need to memorise it.
        </motion.p>

        <motion.div className={s.actions} {...rise(0.4)}>
          <Link href="/welcome" className={s.primaryCta}>
            Start reading
            <IconArrowRight size={16} strokeWidth={1.7} />
          </Link>
          <a href="#contents" className={s.secondaryCta}>
            Browse the chapters
          </a>
        </motion.div>

        <motion.dl className={s.meta} {...rise(0.5)}>
          {meta.map((m) => (
            <div key={m.label} className={s.metaItem}>
              <dt className={s.metaLabel}>{m.label}</dt>
              <dd className={s.metaValue}>{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </header>

      <section className={s.outcomes} aria-labelledby="outcomes-h">
        <h2 id="outcomes-h" className={s.blockTitle}>
          By the end, you should be able to
        </h2>
        <ul className={s.outcomeList}>
          {outcomes.map((o) => (
            <li key={o} className={s.outcomeItem}>
              <span className={s.outcomeMark} aria-hidden>
                <IconArrowRight size={13} strokeWidth={1.8} />
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contents" className={s.contents} aria-labelledby="contents-h">
        <h2 id="contents-h" className={s.blockTitle}>
          The twelve chapters
        </h2>
        <ol className={s.grid}>
          {chapters.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className={s.card}>
                  <span className={s.cardIcon} aria-hidden>
                    <Icon size={20} strokeWidth={1.2} />
                  </span>
                  <span className={s.cardBody}>
                    <span className={s.cardIndex}>{c.index}</span>
                    <span className={s.cardLabel}>{c.label}</span>
                    <span className={s.cardSummary}>{c.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
