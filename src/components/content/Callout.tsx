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
 * Editorial callout.
 *
 * - `variant="default"` (compact): tone maps to the guide's colour code
 *   (red = essentials, blue = context, green = do this, amber = watch out).
 * - `variant="feature"`: a prominent, full-width, neutral block with the icon
 *   inline beside the title and larger body copy.
 */
export function Callout({
  tone = "context",
  variant = "default",
  title,
  icon,
  children,
}: {
  tone?: Tone;
  variant?: "default" | "feature";
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const isFeature = variant === "feature";

  return (
    <aside
      className={s.callout}
      data-tone={tone}
      data-variant={isFeature ? "feature" : undefined}
    >
      {icon && !isFeature && <span className={s.calloutIcon}>{icon}</span>}
      <div className={s.calloutBody}>
        <div className={s.calloutTitle}>
          {isFeature && icon && (
            <span className={s.calloutTitleIcon}>{icon}</span>
          )}
          {title ?? defaultTitle[tone]}
        </div>
        <div className={s.calloutText}>{children}</div>
      </div>
    </aside>
  );
}
