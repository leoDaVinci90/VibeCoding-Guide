"use client";

import { useMemo } from "react";
import { chapters } from "@/data/guide";
import styles from "./RightToc.module.css";

/**
 * "On this page" rail — shows the subsections of the chapter currently in view,
 * with the active one highlighted. Mirrors the right-hand TOC of Apple /
 * Atlassian documentation. Hidden on narrower viewports.
 */
export function RightToc({ activeId }: { activeId: string | null }) {
  const chapter = useMemo(() => {
    if (!activeId) return chapters[0];
    for (const c of chapters) {
      if (c.id === activeId || c.children.some((ch) => ch.id === activeId)) {
        return c;
      }
    }
    return chapters[0];
  }, [activeId]);

  if (!chapter || chapter.children.length === 0) return null;

  return (
    <aside className={styles.toc} aria-label="On this page">
      <div className={styles.sticky}>
        <p className={styles.heading}>On this page</p>
        <ul className={styles.list}>
          <li>
            <a
              href={`#${chapter.id}`}
              className={`${styles.link} ${
                activeId === chapter.id ? styles.linkActive : ""
              }`}
            >
              {chapter.index ? `${chapter.index} · ${chapter.label}` : chapter.label}
            </a>
          </li>
          {chapter.children.map((child) => (
            <li key={child.id}>
              <a
                href={`#${child.id}`}
                className={`${styles.sublink} ${
                  activeId === child.id ? styles.linkActive : ""
                }`}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
