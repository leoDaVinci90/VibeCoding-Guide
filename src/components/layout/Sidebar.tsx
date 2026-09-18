"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { chapters, type NavChapter } from "@/data/guide";
import { IconChevron } from "@/components/icons/ui";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  /** Slug of the chapter whose page is currently open. */
  activeSlug: string | null;
  /** Id of the subchapter currently in view on that page. */
  activeLeafId: string | null;
  collapsed: boolean;
  onNavigate: () => void;
};

export function Sidebar({
  activeSlug,
  activeLeafId,
  collapsed,
  onNavigate,
}: SidebarProps) {
  // Start with the active chapter open; every chapter open by default otherwise
  // so the tree reads as a full table of contents.
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(chapters.map((c) => [c.slug, true])),
  );

  // Keep the current chapter expanded when the route changes.
  useEffect(() => {
    if (activeSlug) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpanded((prev) =>
        prev[activeSlug] ? prev : { ...prev, [activeSlug]: true },
      );
    }
  }, [activeSlug]);

  const toggle = (slug: string) =>
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <nav className={styles.nav} aria-label="Guide contents">
      <ul className={styles.tree} role="tree">
        {chapters.map((chapter) => (
          <ChapterNode
            key={chapter.slug}
            chapter={chapter}
            collapsed={collapsed}
            isOpen={expanded[chapter.slug] ?? false}
            isActiveChapter={activeSlug === chapter.slug}
            activeLeafId={activeLeafId}
            onToggle={() => toggle(chapter.slug)}
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
  activeLeafId: string | null;
  onToggle: () => void;
  onNavigate: () => void;
};

function ChapterNode({
  chapter,
  collapsed,
  isOpen,
  isActiveChapter,
  activeLeafId,
  onToggle,
  onNavigate,
}: ChapterNodeProps) {
  const Icon = chapter.icon;
  const showChildren = useMemo(
    () => !collapsed && chapter.children.length > 0,
    [collapsed, chapter.children.length],
  );

  return (
    <li
      className={styles.chapter}
      role="treeitem"
      aria-expanded={isOpen}
      aria-selected={isActiveChapter}
    >
      <div
        className={`${styles.chapterRow} ${
          isActiveChapter ? styles.chapterRowActive : ""
        }`}
        data-collapsed={collapsed || undefined}
      >
        <Link
          href={`/${chapter.slug}`}
          className={styles.chapterLink}
          onClick={onNavigate}
          aria-current={isActiveChapter ? "page" : undefined}
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
        </Link>

        {showChildren && (
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

      {showChildren && (
        <AnimatePresence initial={false}>
          {isOpen && (
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
                  const selected =
                    isActiveChapter && activeLeafId === child.id;
                  return (
                    <li key={child.id} role="treeitem" aria-selected={selected}>
                      <Link
                        href={`/${chapter.slug}#${child.id}`}
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
                      </Link>
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
