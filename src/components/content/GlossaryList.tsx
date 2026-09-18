import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import s from "./content.module.css";

export type GlossaryEntry = { term: string; def: ReactNode };

function groupByLetter(items: GlossaryEntry[]) {
  const groups: Record<string, GlossaryEntry[]> = {};
  for (const item of items) {
    const letter = item.term[0].toUpperCase();
    (groups[letter] ??= []).push(item);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

/** A–Z glossary, grouped by first letter. */
export function GlossaryList({ entries }: { entries: GlossaryEntry[] }) {
  const groups = groupByLetter(entries);
  return (
    <Reveal>
      <div className={s.glossary}>
        {groups.map(([letter, items]) => (
          <div key={letter} className={s.glossaryGroup}>
            <div className={s.glossaryLetter} aria-hidden>
              {letter}
            </div>
            <dl className={s.glossaryGrid}>
              {items.map((item) => (
                <div key={item.term} className={s.glossaryItem}>
                  <dt className={s.glossaryTerm}>{item.term}</dt>
                  <dd className={s.glossaryDef}>{item.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
