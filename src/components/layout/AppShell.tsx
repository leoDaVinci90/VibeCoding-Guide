"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { allSectionIds, chapters } from "@/data/guide";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { IconClose, IconMenu } from "@/components/icons/ui";
import { IconSidebar } from "@/components/icons/StreamlineIcons";
import styles from "./AppShell.module.css";

const COLLAPSE_KEY = "vcfg-sidebar-collapsed";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(allSectionIds);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Restore persisted rail state.
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(COLLAPSE_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(COLLAPSE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Lock scroll + close on Escape while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const activeChapterLabel = useMemo(() => {
    if (!activeId) return null;
    for (const c of chapters) {
      if (c.id === activeId || c.children.some((ch) => ch.id === activeId)) {
        return c;
      }
    }
    return null;
  }, [activeId]);

  const activeLeafLabel = useMemo(() => {
    if (!activeId) return null;
    for (const c of chapters) {
      const leaf = c.children.find((ch) => ch.id === activeId);
      if (leaf) return leaf.label;
    }
    return null;
  }, [activeId]);

  return (
    <div
      className={styles.shell}
      data-collapsed={collapsed || undefined}
      data-mobile-open={mobileOpen || undefined}
    >
      {/* Reading progress */}
      <motion.div
        className={styles.progress}
        style={{ scaleX: progress }}
        aria-hidden
      />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={styles.sidebar} aria-label="Primary">
        <div className={styles.brand}>
          <a
            href="#top"
            className={styles.brandMark}
            onClick={closeMobile}
            title="Vibe Coding Field Guide"
          >
            <span className={styles.brandGlyph} aria-hidden>
              VC
            </span>
            {!collapsed && (
              <span className={styles.brandText}>
                <span className={styles.brandTitle}>Field Guide</span>
                <span className={styles.brandSub}>Vibe Coding · No. 01</span>
              </span>
            )}
          </a>

          <button
            type="button"
            className={styles.railToggle}
            onClick={toggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            data-desktop
          >
            <IconSidebar size={18} strokeWidth={1.2} />
          </button>

          <button
            type="button"
            className={styles.mobileClose}
            onClick={closeMobile}
            aria-label="Close menu"
            data-mobile
          >
            <IconClose size={20} />
          </button>
        </div>

        <div className={styles.sidebarScroll}>
          <Sidebar
            activeId={activeId}
            collapsed={collapsed}
            onNavigate={closeMobile}
          />
        </div>

        {!collapsed && (
          <div className={styles.sidebarFoot}>
            <p className={styles.footNote}>
              Prepared for the design team — pre-course study, ≈ 45 min.
            </p>
          </div>
        )}
      </aside>

      {/* Main column */}
      <div className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu size={20} />
            </button>

            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="#top" className={styles.crumbRoot} onClick={closeMobile}>
                Guide
              </a>
              {activeChapterLabel && (
                <>
                  <span className={styles.crumbSep} aria-hidden>
                    /
                  </span>
                  <a
                    href={`#${activeChapterLabel.id}`}
                    className={styles.crumbChapter}
                  >
                    {activeChapterLabel.index
                      ? `${activeChapterLabel.index} · ${activeChapterLabel.label}`
                      : activeChapterLabel.label}
                  </a>
                </>
              )}
              {activeLeafLabel && (
                <>
                  <span className={styles.crumbSep} aria-hidden>
                    /
                  </span>
                  <span className={styles.crumbLeaf}>{activeLeafLabel}</span>
                </>
              )}
            </nav>
          </div>

          <div className={styles.topbarRight}>
            <ThemeToggle />
          </div>
        </header>

        <main id="content" className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
