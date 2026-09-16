import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import s from "./content.module.css";

type Tone = "essential" | "context" | "action" | "warn";

export type TermTag = { label: string; tone?: Tone };
export type TermMeta = { label: string; text: ReactNode };

export function TermCard({
  name,
  sub,
  tags,
  definition,
  meta,
  delay,
}: {
  name: string;
  sub?: string;
  tags?: TermTag[];
  definition: ReactNode;
  meta?: TermMeta[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className={s.term}>
        <div className={s.termHead}>
          <h4 className={s.termName}>
            {name}
            {sub && <small>{sub}</small>}
          </h4>
          {tags && tags.length > 0 && (
            <div className={s.termTags}>
              {tags.map((t) => (
                <span key={t.label} className={s.pill} data-tone={t.tone}>
                  {t.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className={s.termDef}>{definition}</p>

        {meta && meta.length > 0 && (
          <div className={s.termMeta} data-cols={meta.length > 1 ? "2" : "1"}>
            {meta.map((m) => (
              <div key={m.label} className={s.metaRow}>
                <span className={s.metaLabel}>{m.label}</span>
                <div className={s.metaText}>{m.text}</div>
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}
