import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { IconArrowRight, IconCross } from "@/components/icons/ui";
import s from "./content.module.css";

/**
 * The recurring "Study check" block.
 *
 * - Pass `items` for the manuscript's simple prompts-to-the-reader list.
 * - Pass `tryItems` + `avoidItems` for a two-column "try / avoid" layout.
 */
export function StudyCheck({
  items,
  tryItems,
  avoidItems,
  title = "Study check",
}: {
  items?: ReactNode[];
  tryItems?: ReactNode[];
  avoidItems?: ReactNode[];
  title?: string;
}) {
  // Single-column variant.
  if (items && items.length > 0) {
    return (
      <Reveal>
        <div className={s.study} data-single>
          <div className={s.studyCol} data-kind="try">
            <div className={s.studyHead}>{title}</div>
            <ul className={s.studyList}>
              {items.map((item, i) => (
                <li key={i} className={s.studyItem}>
                  <span className={s.studyMark}>
                    <IconArrowRight size={13} strokeWidth={1.8} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className={s.study}>
        <div className={s.studyCol} data-kind="try">
          <div className={s.studyHead}>Try it yourself</div>
          <ul className={s.studyList}>
            {(tryItems ?? []).map((item, i) => (
              <li key={i} className={s.studyItem}>
                <span className={s.studyMark}>
                  <IconArrowRight size={13} strokeWidth={1.8} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.studyCol} data-kind="avoid">
          <div className={s.studyHead}>Common mistakes to avoid</div>
          <ul className={s.studyList}>
            {(avoidItems ?? []).map((item, i) => (
              <li key={i} className={s.studyItem}>
                <span className={s.studyMark}>
                  <IconCross size={12} strokeWidth={2} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
