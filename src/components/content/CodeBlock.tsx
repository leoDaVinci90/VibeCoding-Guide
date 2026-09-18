"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { IconCopy, IconCheck } from "@/components/icons/ui";
import s from "./content.module.css";

export type CodeLineKind =
  | "cmd" // a command typed at the prompt (gets a $ prefix in terminal variant)
  | "comment" // an explanatory comment
  | "output" // what the terminal prints back
  | "warn" // a destructive / careful line
  | "heading" // a code section label
  | "plain"; // neutral code

export type CodeLine = {
  t: string;
  kind?: CodeLineKind;
};

const lineClass: Record<CodeLineKind, string | undefined> = {
  cmd: undefined,
  comment: s.lineComment,
  output: s.lineOutput,
  warn: s.lineWarn,
  heading: s.lineHeading,
  plain: undefined,
};

/**
 * Code / command / prompt block with a copy-to-clipboard control.
 *
 * - `variant="terminal"` (default): shell chrome (traffic-light dots) and a `$`
 *   prefix on `cmd` lines. Use for terminal commands.
 * - `variant="code"`: no shell chrome or prompt prefix. Use for JSON, Markdown,
 *   and free-text prompt blocks.
 *
 * The copy button copies the raw line text (never the decorative `$`).
 */
export function CodeBlock({
  label = "terminal",
  variant = "terminal",
  lines,
}: {
  label?: string;
  variant?: "terminal" | "code";
  lines: CodeLine[];
}) {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async () => {
    const text = lines.map((l) => l.t).join("\n");
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // Fallback for contexts where the async Clipboard API is blocked.
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (!ok) return;
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }, [lines]);

  const isTerminal = variant === "terminal";

  return (
    <Reveal y={12}>
      <div className={s.code} data-variant={variant}>
        <div className={s.codeHead}>
          {isTerminal && (
            <span className={s.codeDots} aria-hidden>
              <span className={s.codeDot} />
              <span className={s.codeDot} />
              <span className={s.codeDot} />
            </span>
          )}
          <span className={s.codeLabel}>{label}</span>
          <button
            type="button"
            className={s.codeCopy}
            onClick={copy}
            aria-label={copied ? "Copied to clipboard" : `Copy ${label}`}
            data-copied={copied || undefined}
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="done"
                  className={s.codeCopyInner}
                  initial={reduce ? false : { opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                  transition={{ duration: 0.16 }}
                >
                  <IconCheck size={14} strokeWidth={2} />
                  Copied
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  className={s.codeCopyInner}
                  initial={reduce ? false : { opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 4 }}
                  transition={{ duration: 0.16 }}
                >
                  <IconCopy size={14} strokeWidth={1.6} />
                  Copy
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <pre className={s.codePre}>
          <code>
            {lines.map((line, i) => {
              const kind = line.kind ?? "plain";
              return (
                <span
                  key={i}
                  className={`${s.codeLine} ${lineClass[kind] ?? ""}`}
                >
                  {isTerminal && kind === "cmd" && (
                    <span className={s.linePrompt}>$ </span>
                  )}
                  {line.t}
                  {"\n"}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </Reveal>
  );
}
