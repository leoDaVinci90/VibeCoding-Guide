import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { IconArrowRight, IconCross } from "@/components/icons/ui";
import s from "./content.module.css";

/**
 * The recurring "Study check" block that closes every section:
 * a "Try it yourself" column and a "Common mistakes to avoid" column.
 */
export function StudyCheck({
  tryItems,
  avoidItems,
}: {
  tryItems: ReactNode[];
  avoidItems: ReactNode[];
}) {
  return (
    <Reveal>
      <div className={s.study}>
        <div className={s.studyCol} data-kind="try">
          <div className={s.studyHead}>Try it yourself</div>
          <ul className={s.studyList}>
            {tryItems.map((item, i) => (
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
            {avoidItems.map((item, i) => (
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
