import { IconArrowUp } from "@/components/icons/ui";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className={styles.mark}>FinCloud AI Sessions</span>
          <span className={styles.sep} aria-hidden>
            ·
          </span>
          <span>The Vibe Coding Field Guide</span>
          <span className={styles.sep} aria-hidden>
            ·
          </span>
          <span className={styles.end}>End — No. 01</span>
        </div>
        <a href="#top" className={styles.top}>
          Back to top
          <IconArrowUp size={15} strokeWidth={1.7} />
        </a>
      </div>
    </footer>
  );
}
