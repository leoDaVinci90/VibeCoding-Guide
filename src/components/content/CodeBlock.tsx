import { Reveal } from "./Reveal";
import s from "./content.module.css";

export type CodeLineKind =
  | "cmd" // a command typed at the prompt (gets a $ prefix)
  | "comment" // an explanatory comment
  | "output" // what the terminal prints back
  | "warn" // a destructive / careful line
  | "heading" // a code section label
  | "plain"; // neutral code

export type CodeLine = {
  t: string;
  kind?: CodeLineKind;
};

const lineClass: Record<CodeLineKind, string | undefined> = {
  cmd: undefined,
  comment: s.lineComment,
  output: s.lineOutput,
  warn: s.lineWarn,
  heading: s.lineHeading,
  plain: undefined,
};

export function CodeBlock({
  label = "terminal",
  lines,
}: {
  label?: string;
  lines: CodeLine[];
}) {
  return (
    <Reveal y={12}>
      <div className={s.code}>
        <div className={s.codeHead}>
          <span className={s.codeDots} aria-hidden>
            <span className={s.codeDot} />
            <span className={s.codeDot} />
            <span className={s.codeDot} />
          </span>
          <span className={s.codeLabel}>{label}</span>
        </div>
        <pre className={s.codePre}>
          <code>
            {lines.map((line, i) => {
              const kind = line.kind ?? "plain";
              return (
                <span key={i} className={`${s.codeLine} ${lineClass[kind] ?? ""}`}>
                  {kind === "cmd" && (
                    <span className={s.linePrompt}>$ </span>
                  )}
                  {line.t}
                  {"\n"}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </Reveal>
  );
}
