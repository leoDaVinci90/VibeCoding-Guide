"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { IconCheck } from "@/components/icons/ui";
import s from "./HomeProjectChecklist.module.css";

/**
 * Interactive, keyboard-operable checklist with a subtle progress indicator.
 * Progress is announced via aria-live and persisted per-viewer in localStorage.
 * Purely local — no backend.
 */
export function HomeProjectChecklist({
  storageKey,
  title,
  items,
}: {
  storageKey: string;
  title: string;
  items: string[];
}) {
  const reduce = useReducedMotion();
  const baseId = useId();
  const key = `vcfg-checklist-${storageKey}`;
  const [checked, setChecked] = useState<boolean[]>(() =>
    items.map(() => false),
  );

  // Restore saved state (guarded — storage can be unavailable or throw).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return;
      const saved = JSON.parse(raw) as boolean[];
      if (Array.isArray(saved) && saved.length === items.length) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setChecked(saved.map(Boolean));
      }
    } catch {
      /* ignore */
    }
    // items.length is stable for a given checklist instance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = prev.map((v, idx) => (idx === i ? !v : v));
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const done = useMemo(() => checked.filter(Boolean).length, [checked]);
  const pct = items.length ? Math.round((done / items.length) * 100) : 0;

  return (
    <div className={s.card}>
      <div className={s.head}>
        <span className={s.title}>{title}</span>
        <span className={s.count} aria-live="polite">
          {done} of {items.length} done
        </span>
      </div>

      <div className={s.track} aria-hidden>
        <motion.div
          className={s.fill}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }
        />
      </div>

      <ul className={s.list}>
        {items.map((item, i) => {
          const id = `${baseId}-${i}`;
          return (
            <li key={i} className={s.item}>
              <input
                type="checkbox"
                id={id}
                className={s.checkbox}
                checked={checked[i] ?? false}
                onChange={() => toggle(i)}
              />
              <label htmlFor={id} className={s.label}>
                <span className={s.box} aria-hidden>
                  <IconCheck size={13} strokeWidth={2.2} />
                </span>
                <span className={s.text}>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
