"use client";

import { motion } from "motion/react";
import { IconArrowRight } from "@/components/icons/ui";
import styles from "./Hero.module.css";

const meta = [
  { label: "Prepared for", value: "The design team" },
  { label: "Purpose", value: "Pre-course study" },
  { label: "Sections", value: "Five + deep dives" },
  { label: "Read time", value: "≈ 45 minutes" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <motion.div
          className={styles.kicker}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.kickerMark}>FinCloud AI Sessions</span>
          <span className={styles.kickerDot} aria-hidden />
          <span>Field Guide No. 01</span>
        </motion.div>

        <motion.p
          className={styles.overline}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
        >
          Theory before the practice
        </motion.p>

        <h1 className={styles.title}>
          {["The Vibe", "Coding", "Field Guide"].map((line, i) => (
            <span key={line} className={styles.titleLine}>
              <motion.span
                className={styles.titleInner}
                initial={{ opacity: 0, y: "0.4em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.lede}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.34 }}
        >
          Everything to understand before you open a vibe-coding environment —
          the terminology, the prompt craft, the tools and the mental models, in
          one place.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.42 }}
        >
          <a href="#terminology" className={styles.primaryCta}>
            Start reading
            <IconArrowRight size={16} strokeWidth={1.7} />
          </a>
          <a href="#contents" className={styles.secondaryCta}>
            What&apos;s inside
          </a>
        </motion.div>

        <motion.dl
          className={styles.meta}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
        >
          {meta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <dt className={styles.metaLabel}>{m.label}</dt>
              <dd className={styles.metaValue}>{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </header>
  );
}
