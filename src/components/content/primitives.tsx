import type { ComponentType, ReactNode } from "react";
import type { IconProps } from "@/components/icons/StreamlineIcons";
import s from "./content.module.css";

/* --- Section ---------------------------------------------------------------- */
export function Section({
  id,
  children,
  width,
}: {
  id: string;
  children: ReactNode;
  width?: "wide";
}) {
  return (
    <section id={id} className={s.section} aria-labelledby={`${id}-title`}>
      <div className={s.inner} data-width={width}>
        {children}
      </div>
    </section>
  );
}

/* --- Section header --------------------------------------------------------- */
export function SectionHeader({
  id,
  eyebrow,
  index,
  icon: Icon,
  title,
  lede,
}: {
  id: string;
  eyebrow: string;
  index?: string;
  icon?: ComponentType<IconProps>;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className={s.header}>
      <span className={s.eyebrow}>
        {Icon && (
          <span className={s.eyebrowIcon}>
            <Icon size={15} strokeWidth={1.2} />
          </span>
        )}
        <span className={s.eyebrowText}>
          {index && <span className={s.eyebrowIndex}>{index} · </span>}
          {eyebrow}
        </span>
      </span>
      <h2 id={`${id}-title`} className={s.title}>
        {title}
      </h2>
      {lede && <p className={s.lede}>{lede}</p>}
    </header>
  );
}

/* --- Subhead (anchor target for subchapters) -------------------------------- */
export function Subhead({
  id,
  kicker,
  kickerTone,
  title,
  note,
}: {
  id?: string;
  kicker?: string;
  kickerTone?: "essential" | "context" | "action";
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div id={id} className={s.subhead}>
      {kicker && (
        <span className={s.kicker} data-tone={kickerTone}>
          {kicker}
        </span>
      )}
      <h3 className={s.subheadTitle}>{title}</h3>
      {note && <p className={s.subheadNote}>{note}</p>}
    </div>
  );
}

/* --- Prose ------------------------------------------------------------------ */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={s.prose}>{children}</div>;
}

/* --- Inline atoms ----------------------------------------------------------- */
export function Pill({
  children,
  tone,
}: {
  children: ReactNode;
  tone?: "essential" | "context" | "action" | "warn";
}) {
  return (
    <span className={s.pill} data-tone={tone}>
      {children}
    </span>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className={s.kbd}>{children}</kbd>;
}

export function Code({ children }: { children: ReactNode }) {
  return <code className={s.inlineCode}>{children}</code>;
}

export function Divider() {
  return <hr className={s.divider} />;
}

/* --- Layout helpers --------------------------------------------------------- */
export function Grid({
  cols = 2,
  children,
}: {
  cols?: 2 | 3;
  children: ReactNode;
}) {
  return (
    <div className={s.grid} data-cols={cols}>
      {children}
    </div>
  );
}

export function Stack({
  gap = 5,
  children,
}: {
  gap?: 4 | 5 | 6;
  children: ReactNode;
}) {
  return (
    <div className={s.stack} data-gap={gap}>
      {children}
    </div>
  );
}

/* --- Figure ----------------------------------------------------------------- */
export function Figure({
  caption,
  captionLabel,
  children,
}: {
  caption?: ReactNode;
  captionLabel?: string;
  children: ReactNode;
}) {
  return (
    <figure className={s.figure}>
      <div className={s.figureBody}>{children}</div>
      {caption && (
        <figcaption className={s.figCaption}>
          {captionLabel && <strong>{captionLabel}</strong>}
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

/* --- Steps ------------------------------------------------------------------ */
export type StepItem = {
  title: ReactNode;
  body?: ReactNode;
  extra?: ReactNode;
};

export function Steps({ items }: { items: StepItem[] }) {
  return (
    <ol className={s.steps}>
      {items.map((item, i) => (
        <li key={i} className={s.step}>
          <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
          <div className={s.stepBody}>
            <div className={s.stepTitle}>{item.title}</div>
            {item.body && <div className={s.stepText}>{item.body}</div>}
            {item.extra}
          </div>
        </li>
      ))}
    </ol>
  );
}
