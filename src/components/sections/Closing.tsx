import {
  Section,
  SectionHeader,
  Pill,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import s from "./sections.module.css";

const loop = ["Brief", "Generate", "Evaluate", "Refine", "Repeat"];

export function Closing() {
  return (
    <Section id="closing" width="wide">
      <SectionHeader
        id="closing"
        eyebrow="In closing"
        icon={chapterIcons.closing}
        title="You're ready for the practical work"
        lede="You don't need to have memorised any of this. You need to recognise the words, know the shape of a good brief, and trust the loop."
      />

      <div className={s.closingLoop} style={{ marginBottom: "var(--space-8)" }}>
        {loop.map((step) => (
          <Pill key={step} tone="essential">
            {step}
          </Pill>
        ))}
      </div>

      <div id="cheat-sheet" className={s.cheatGrid}>
        <div className={s.cheatCard}>
          <div className={s.cheatTitle}>The 6-part brief</div>
          <div className={s.cheatList}>
            <span><strong>1 Role</strong> — who the AI becomes</span>
            <span><strong>2 Context</strong> — why it exists</span>
            <span><strong>3 User</strong> — who it's for</span>
            <span><strong>4 Requirements</strong> — what to produce</span>
            <span><strong>5 Constraints</strong> — what to avoid</span>
            <span><strong>6 Success</strong> — definition of done</span>
            <span>+ Discipline layer (swap per craft)</span>
          </div>
        </div>

        <div className={s.cheatCard}>
          <div className={s.cheatTitle}>The Git daily loop</div>
          <div className={s.cheatList}>
            <span className={s.cheatMono}>git checkout main</span>
            <span className={s.cheatMono}>git pull</span>
            <span className={s.cheatMono}>git checkout -b feature/x</span>
            <span className={s.cheatMono}># … do the work …</span>
            <span className={s.cheatMono}>git add .</span>
            <span className={s.cheatMono}>git commit -m &quot;message&quot;</span>
            <span className={s.cheatMono}>git push</span>
            <span>→ open PR → merge → repeat</span>
          </div>
        </div>

        <div className={s.cheatCard}>
          <div className={s.cheatTitle}>Terminal, top 10</div>
          <div className={s.cheatList}>
            <span className={s.cheatMono}>pwd · ls · cd</span>
            <span className={s.cheatMono}>mkdir · touch · mv</span>
            <span className={s.cheatMono}>cat · grep</span>
            <span className={s.cheatMono}>npm install · npm run dev</span>
            <span>↑ recalls last command · Tab completes names · rm has no undo.</span>
          </div>
        </div>

        <div className={s.cheatCard}>
          <div className={s.cheatTitle}>Feedback moves & codes</div>
          <div className={s.cheatList}>
            <span><strong>Improve · Change · Explain · Review.</strong></span>
            <span>Separate thinking from execution.</span>
            <span>2xx ok · 4xx your mistake · 5xx server.</span>
            <span>GET reads, POST writes.</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
