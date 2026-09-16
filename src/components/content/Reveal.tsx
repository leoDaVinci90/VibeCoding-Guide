"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger offset in seconds. */
  delay?: number;
  /** Vertical travel distance. */
  y?: number;
};

/**
 * Fades and lifts content into view once.
 *
 * Uses `useInView` (not `whileInView`) so the in-view state is measured against
 * the real scroll position right after mount — which keeps deep-links and hard
 * reloads to an anchor from leaving their target content stuck at opacity 0.
 * Honours prefers-reduced-motion by rendering statically.
 */
export function Reveal({ children, delay = 0, y = 16, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  if (reduce) {
    return (
      <motion.div ref={ref} initial={false} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
