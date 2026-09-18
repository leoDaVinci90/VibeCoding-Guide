import { Reveal } from "./Reveal";
import s from "./Placeholder.module.css";

type Motif = "flow" | "layers" | "grid" | "loop";

/**
 * Intentional geometric placeholder illustration.
 *
 * These are abstract line/geometry motifs — deliberately not final artwork —
 * marking where a designer can drop a real illustration later. They inherit
 * theme colour via currentColor and stay legible in light and dark.
 */
export function Placeholder({
  motif = "flow",
  label = "Placeholder illustration",
  caption,
}: {
  motif?: Motif;
  label?: string;
  caption?: string;
}) {
  return (
    <Reveal y={12}>
      <figure className={s.figure} role="img" aria-label={caption ?? label}>
        <div className={s.canvas}>
          <svg
            className={s.art}
            viewBox="0 0 400 160"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <Motif motif={motif} />
          </svg>
          <span className={s.tag}>{label}</span>
        </div>
        {caption && <figcaption className={s.caption}>{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}

function Motif({ motif }: { motif: Motif }) {
  switch (motif) {
    case "layers":
      return (
        <g>
          <path d="M200 22 96 58l104 36 104-36-104-36Z" />
          <path d="M96 90l104 36 104-36" opacity={0.6} />
          <path d="M96 122l104 36 104-36" opacity={0.35} />
        </g>
      );
    case "grid":
      return (
        <g>
          {[0, 1, 2, 3].map((c) =>
            [0, 1].map((r) => (
              <rect
                key={`${c}-${r}`}
                x={70 + c * 70}
                y={40 + r * 52}
                width={48}
                height={36}
                rx={6}
                opacity={1 - (c + r) * 0.12}
              />
            )),
          )}
        </g>
      );
    case "loop":
      return (
        <g>
          <circle cx={200} cy={80} r={52} />
          <circle cx={200} cy={80} r={20} opacity={0.5} />
          <path d="M200 28v-10M200 142v-10M148 80h-10M262 80h-10" />
        </g>
      );
    case "flow":
    default:
      return (
        <g>
          <circle cx={70} cy={80} r={22} />
          <path d="M92 80h58" />
          <rect x={150} y={58} width={100} height={44} rx={8} />
          <path d="M250 80h58" />
          <circle cx={330} cy={80} r={22} opacity={0.6} />
        </g>
      );
  }
}
