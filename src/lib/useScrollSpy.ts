"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" while scrolling.
 * Elements are queried live on every frame (rather than cached at mount) so the
 * spy stays correct through hydration, deep-links and layout shifts.
 *
 * `ids` must be in document order.
 */
export function useScrollSpy(ids: string[], headerOffset = 96): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      // Trigger line sits below the header, scaled to the viewport so a heading
      // becomes active as it enters the upper reading area.
      const line = headerOffset + window.innerHeight * 0.16;
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - line <= 0) {
          current = id;
        } else if (current !== null) {
          break;
        }
      }

      if (current === null) current = ids[0];

      // Snap to the final section when the page is scrolled to the very bottom.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) current = ids[ids.length - 1];

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids, headerOffset]);

  return activeId;
}
