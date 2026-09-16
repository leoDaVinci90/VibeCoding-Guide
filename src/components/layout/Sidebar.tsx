"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { chapters, type NavChapter } from "@/data/guide";
import { IconChevron } from "@/components/icons/ui";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  activeId: string | null;
  collapsed: boolean;
  onNavigate: () => void;
};

/** Which chapter owns a given active id (chapter id or one of its children). */
function chapterForActive(activeId: string | null): string | null {
  if (!activeId) return null;
  for (const c of chapters) {
    if (c.id === activeId) return c.id;
    if (c.children.some((child) => child.id === activeId)) return c.id;
  }
  return null;
}

export function Sidebar({ activeId, collapsed, onNavigate }: SidebarProps) {
  const activeChapter = useMemo(() => chapterForActive(activeId), [activeId]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(chapters.map((c) => [c.id, true])),
  );

  // Keep the chapter that contains the active section open as you scroll.
  useEffect(() => {
    if (activeChapter) {
      setExpanded((prev) =>
        prev[activeChapter] ? prev : { ...prev, [activeChapter]: true },
      );
    }
  }, [activeChapter]);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <nav className={styles.nav} aria-label="Guide contents">
      <ul className={styles.tree} role="tree">
        {chapters.map((chapter) => (
          <ChapterNode
            key={chapter.id}
            chapter={chapter}
            collapsed={collapsed}
            isOpen={expanded[chapter.id] ?? false}
            isActiveChapter={activeChapter === chapter.id}
            activeId={activeId}
            onToggle={() => toggle(chapter.id)}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
}

type ChapterNodeProps = {
  chapter: NavChapter;
  collapsed: boolean;
  isOpen: boolean;
  isActiveChapter: boolean;
  activeId: string | null;
  onToggle: () => void;
  onNavigate: () => void;
};

function ChapterNode({
  chapter,
  collapsed,
  isOpen,
  isActiveChapter,
  activeId,
  onToggle,
  onNavigate,
}: ChapterNodeProps) {
  const Icon = chapter.icon;
  const chapterSelected = activeId === chapter.id;

  return (
    <li className={styles.chapter} role="treeitem" aria-expanded={isOpen}>
      <div
        className={`${styles.chapterRow} ${
          isActiveChapter ? styles.chapterRowActive : ""
        }`}
        data-collapsed={collapsed || undefined}
      >
        <a
          href={`#${chapter.id}`}
          className={styles.chapterLink}
          onClick={onNavigate}
          aria-current={chapterSelected ? "true" : undefined}
          title={collapsed ? chapter.label : undefined}
        >
          <span className={styles.chapterIcon}>
            <Icon size={19} strokeWidth={1.2} />
          </span>
          {!collapsed && (
            <span className={styles.chapterText}>
              {chapter.index && (
                <span className={styles.chapterIndex}>{chapter.index}</span>
              )}
              <span className={styles.chapterLabel}>{chapter.label}</span>
            </span>
          )}
          {isActiveChapter && (
            <motion.span
              layoutId="active-rail"
              className={styles.activeRail}
              transition={{ type: "spring", stiffness: 520, damping: 40 }}
            />
          )}
        </a>

        {!collapsed && chapter.children.length > 0 && (
          <button
            type="button"
            className={styles.disclosure}
            onClick={onToggle}
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${chapter.label}`}
            aria-expanded={isOpen}
          >
            <motion.span
              className={styles.chevron}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <IconChevron size={13} />
            </motion.span>
          </button>
        )}
      </div>

      {!collapsed && (
        <AnimatePresence initial={false}>
          {isOpen && chapter.children.length > 0 && (
            <motion.ul
              className={styles.children}
              role="group"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.childrenInner}>
                {chapter.children.map((child) => {
                  const selected = activeId === child.id;
                  return (
                    <li key={child.id} role="treeitem" aria-selected={selected}>
                      <a
                        href={`#${child.id}`}
                        className={`${styles.childLink} ${
                          selected ? styles.childLinkActive : ""
                        }`}
                        onClick={onNavigate}
                        aria-current={selected ? "true" : undefined}
                      >
                        <span className={styles.childDot} aria-hidden />
                        <span className={styles.childLabel}>{child.label}</span>
                        {selected && (
                          <motion.span
                            layoutId="active-leaf"
                            className={styles.childActiveBar}
                            transition={{
                              type: "spring",
                              stiffness: 520,
                              damping: 42,
                            }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}
