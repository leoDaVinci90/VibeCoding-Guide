"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" while scrolling.
 * Observes every element whose id is in `ids` and reports the one nearest
 * the top of the viewport (just below the fixed header).
 */
export function useScrollSpy(ids: string[], headerOffset = 96): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let ticking = false;

    const compute = () => {
      ticking = false;
      // Trigger line sits a little below the header, scaled to the viewport so a
      // heading becomes "active" as it settles into the upper reading area —
      // and so clicking an anchor reliably activates its target.
      const line = headerOffset + window.innerHeight * 0.16;
      let current: string | null = elements[0]?.id ?? null;

      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top - line <= 0) {
          current = el.id;
        } else {
          break;
        }
      }

      // Snap to the last section when the page is scrolled to the very bottom.
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 4) {
        current = elements[elements.length - 1]?.id ?? current;
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, headerOffset]);

  return activeId;
}
