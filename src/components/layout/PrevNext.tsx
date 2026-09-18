import Link from "next/link";
import { prevNext } from "@/data/guide";
import { IconArrowRight } from "@/components/icons/ui";
import s from "./PrevNext.module.css";

/** Previous / next chapter navigation, shown at the foot of each chapter page. */
export function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = prevNext(slug);

  return (
    <nav className={s.wrap} aria-label="Chapter navigation">
      {prev ? (
        <Link href={`/${prev.slug}`} className={s.link} data-dir="prev">
          <span className={s.arrow} aria-hidden>
            <IconArrowRight size={16} strokeWidth={1.7} />
          </span>
          <span className={s.body}>
            <span className={s.dir}>Previous</span>
            <span className={s.label}>
              {prev.index && <span className={s.index}>{prev.index}</span>}
              {prev.label}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link href={`/${next.slug}`} className={s.link} data-dir="next">
          <span className={s.body}>
            <span className={s.dir}>Next</span>
            <span className={s.label}>
              {next.index && <span className={s.index}>{next.index}</span>}
              {next.label}
            </span>
          </span>
          <span className={s.arrow} aria-hidden>
            <IconArrowRight size={16} strokeWidth={1.7} />
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
