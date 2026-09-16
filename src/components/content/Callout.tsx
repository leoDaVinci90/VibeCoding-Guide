import type { ReactNode } from "react";
import s from "./content.module.css";

type Tone = "essential" | "context" | "action" | "warn";

const defaultTitle: Record<Tone, string> = {
  essential: "Essential",
  context: "Context",
  action: "Do this",
  warn: "Watch out",
};

/**
 * Editorial callout. Tone maps to the guide's colour code:
 * red = essentials, blue = context/asides, green = do this, amber = watch out.
 */
export function Callout({
  tone = "context",
  title,
  icon,
  children,
}: {
  tone?: Tone;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <aside className={s.callout} data-tone={tone}>
      {icon && <span className={s.calloutIcon}>{icon}</span>}
      <div className={s.calloutBody}>
        <div className={s.calloutTitle}>{title ?? defaultTitle[tone]}</div>
        <div className={s.calloutText}>{children}</div>
      </div>
    </aside>
  );
}
