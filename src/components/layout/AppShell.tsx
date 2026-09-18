"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { chapterBySlug, sectionIdsFor } from "@/data/guide";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { IconClose, IconMenu } from "@/components/icons/ui";
import { IconSidebar } from "@/components/icons/StreamlineIcons";
import styles from "./AppShell.module.css";

const COLLAPSE_KEY = "vcfg-sidebar-collapsed";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Current chapter slug from the route ("/" → home / cover).
  const activeSlug = useMemo(() => {
    const seg = (pathname ?? "/").split("/").filter(Boolean)[0] ?? null;
    return seg && chapterBySlug(seg) ? seg : null;
  }, [pathname]);

  const activeChapter = activeSlug ? chapterBySlug(activeSlug) : undefined;

  // Subchapter ids for the current chapter only — memoised so the scroll-spy
  // effect doesn't re-subscribe on every render.
  const sectionIds = useMemo(
    () => (activeSlug ? sectionIdsFor(activeSlug) : []),
    [activeSlug],
  );
  const activeLeafId = useScrollSpy(sectionIds);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // Restore persisted rail state.
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // Deep links: scroll to the hash target after the chapter page has rendered.
  // (A hard load with a #subchapter hash otherwise lands at the top.)
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    let raf = 0;
    const t = setTimeout(() => {
      raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    }, 80);
    return () => {
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

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

  const activeLeafLabel = useMemo(() => {
    if (!activeChapter || !activeLeafId) return null;
    return (
      activeChapter.children.find((c) => c.id === activeLeafId)?.label ?? null
    );
  }, [activeChapter, activeLeafId]);

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

      <div className={styles.page}>
        {/* Sidebar */}
        <aside className={styles.sidebar} aria-label="Primary">
          <div className={styles.brand}>
            <Link
              href="/"
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
            </Link>

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
              activeSlug={activeSlug}
              activeLeafId={activeLeafId}
              collapsed={collapsed}
              onNavigate={closeMobile}
            />
          </div>

          {!collapsed && (
            <div className={styles.sidebarFoot}>
              <p className={styles.footNote}>
                Pre-course study for the design team — about 60–75 minutes.
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
                <Link href="/" className={styles.crumbRoot} onClick={closeMobile}>
                  Guide
                </Link>
                {activeChapter && (
                  <>
                    <span className={styles.crumbSep} aria-hidden>
                      /
                    </span>
                    <Link
                      href={`/${activeChapter.slug}`}
                      className={styles.crumbChapter}
                    >
                      {activeChapter.index
                        ? `${activeChapter.index} · ${activeChapter.label}`
                        : activeChapter.label}
                    </Link>
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

          <div className={styles.layout}>
            <main id="content" className={styles.article}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
