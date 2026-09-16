"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { IconMoon, IconSun } from "@/components/icons/StreamlineIcons";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { resolvedTheme, toggle } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.iconWrap} aria-hidden>
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={styles.icon}
          >
            {isDark ? (
              <IconMoon size={17} strokeWidth={1.2} />
            ) : (
              <IconSun size={17} strokeWidth={1.2} />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
