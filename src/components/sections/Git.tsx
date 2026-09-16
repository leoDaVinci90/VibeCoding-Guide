import {
  Section,
  SectionHeader,
  Subhead,
  Prose,
  Grid,
  Stack,
  Callout,
  CodeBlock,
  Steps,
  StudyCheck,
  Pill,
  Code,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import s from "./sections.module.css";

const benefits = [
  { n: "01", title: "Checkpoints", text: "Save named snapshots of the whole project at any moment." },
  { n: "02", title: "History", text: "Travel back to any earlier state, exactly as it was." },
  { n: "03", title: "Comparison", text: "See precisely what changed between any two points." },
  { n: "04", title: "Safe experiments", text: "Try bold ideas on a branch — the original stays untouched." },
];

export function Git() {
  return (
    <Section id="git">
      <SectionHeader
        id="git"
        eyebrow="Git & GitHub"
        index="03"
        icon={chapterIcons.git}
        title="Version control, without the fear"
        lede="Learn the ideas and the everyday rhythm — enough to collaborate, back up your work, and never lose a file again."
      />

      {/* Problem */}
      <Subhead
        id="git-problem"
        kicker="The problem"
        title="How do we usually track versions?"
        note="Most of us rename the file. It works — until it doesn't. Which one is current? What changed? Which is safe to delete?"
      />
      <Grid cols={2}>
        <div className={s.compareCard} data-variant="bad">
          <div className={s.filePath}>/ project / posters</div>
          <div className={s.fileList}>
            <div>Poster_v1.psd</div>
            <div>Poster_v2.psd</div>
            <div>Poster_FINAL.psd</div>
            <div>Poster_FINAL_v2.psd</div>
            <div>Poster_FINAL_really.psd</div>
            <div className="cur">Poster_USE_THIS_ONE.psd</div>
          </div>
        </div>
        <div className={s.compareCard} data-variant="good">
          <div className={s.compareLabel}>With Git</div>
          <p className={s.compareText}>
            One project that quietly remembers every checkpoint — named, dated
            and comparable — so the folder stays clean and the history stays
            complete.
          </p>
        </div>
      </Grid>

      {/* Git vs GitHub */}
      <Subhead
        id="git-vs-github"
        kicker="The idea"
        title="One project. Every checkpoint remembered."
      />
      <div className={s.qGrid}>
        {benefits.map((b) => (
          <div key={b.n} className={s.qCard}>
            <div className={s.qTop}>
              <span className={s.qNum}>{b.n}</span>
            </div>
            <div className={s.qTitle}>{b.title}</div>
            <p className={s.qText}>{b.text}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Grid cols={2}>
          <div className={s.flowStep} data-level="1">
            <div className={s.flowTag}>Local · on your machine</div>
            <div className={s.flowTitle}>Git</div>
            <div className={s.flowText}>
              The version-control system itself. Tracks your changes and history
              — and works even with no internet connection.
            </div>
          </div>
          <div className={s.flowStep} data-level="3">
            <div className={s.flowTag}>Online · in the cloud</div>
            <div className={s.flowTitle}>GitHub</div>
            <div className={s.flowText}>
              An online home for collaboration &amp; backup — where your Git
              project lives so a whole team can share it safely.
            </div>
          </div>
        </Grid>
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Callout tone="context" title="Repository">
          The <strong>repository</strong> is the project Git tracks. Your{" "}
          <strong>local</strong> repo is where you work; the{" "}
          <strong>remote</strong> repo on GitHub is the team's single source of
          truth. You <Code>push</Code> your work up and <Code>pull</Code> the
          team's work down.
        </Callout>
      </div>

      {/* Workflow */}
      <Subhead
        id="git-workflow"
        kicker="The workflow"
        title="The whole story, in four acts"
        note="This is the loop you'll repeat forever. Learn these four acts and the rest is detail."
      />
      <Steps
        items={[
          {
            title: "Act 01 — Start fresh",
            body: "Bring the shared project down to your machine and get in sync before touching anything.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git clone <url>", kind: "cmd" },
                    { t: "git checkout main", kind: "cmd" },
                    { t: "git pull", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Act 02 — Branch & build",
            body: "Split a feature branch off main. Do the work there and commit checkpoints — main stays untouched.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout -b feature/login", kind: "cmd" },
                    { t: "git add .", kind: "cmd" },
                    { t: 'git commit -m "Added login"', kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Act 03 — Share it",
            body: "Push your branch up to GitHub, then open a Pull Request to propose merging it into main for review.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git push", kind: "cmd" },
                    { t: "# then on GitHub: open a Pull Request  feature/login → main", kind: "comment" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Act 04 — Close the loop",
            body: "If approved: merge the PR into main, delete the branch, return to main and pull. If changes are requested: stay on the branch, commit fixes, push — the PR updates itself.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout main", kind: "cmd" },
                    { t: "git pull", kind: "cmd" },
                    { t: "git branch -d feature/login   # tidy up", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
        ]}
      />

      {/* Daily rhythm */}
      <Subhead
        id="git-rhythm"
        kicker="The daily rhythm"
        title="Six commands and a Pull Request"
      />
      <CodeBlock
        label="the daily loop"
        lines={[
          { t: "git checkout main", kind: "cmd" },
          { t: "git pull", kind: "cmd" },
          { t: "git checkout -b feature/new-feature", kind: "cmd" },
          { t: "# … do the work …", kind: "comment" },
          { t: "git add .", kind: "cmd" },
          { t: 'git commit -m "Meaningful message"', kind: "cmd" },
          { t: "git push", kind: "cmd" },
          { t: "→ Open Pull Request → Merge → Repeat", kind: "output" },
        ]}
      />

      {/* FAQ */}
      <Subhead id="git-faq" kicker="Frequently asked" title="Three quick answers" />
      <Stack gap={4}>
        <Callout tone="context" title="Do commits disappear after a merge?">
          No. Merging preserves your history — every commit stays part of the
          record.
        </Callout>
        <Callout tone="context" title="What if a Pull Request is rejected?">
          Keep going. Continue on the same branch, commit, and push again — the
          PR updates automatically.
        </Callout>
        <Callout tone="action" title="Should I pull every day?">
          Yes. Always pull before starting new work, so you build on the latest.
        </Callout>
      </Stack>

      {/* Scenario */}
      <Subhead
        id="git-scenario"
        kicker="A worked scenario · read this twice"
        title="Two days with Maya"
        note="Everything above, in one continuous story. Maya joins the team-portfolio project, does a piece of work, comes back the next day, and gets her work merged."
      />
      <div style={{ marginBottom: "var(--space-4)" }}>
        <Pill tone="essential">Day 1 · Monday — getting the work out</Pill>
      </div>
      <Steps
        items={[
          {
            title: "Create the repository on GitHub",
            body: "On github.com she clicks New repository, names it team-portfolio, adds a README, and creates it. The remote exists — but her laptop doesn't have a copy yet.",
          },
          {
            title: "Clone it, and step in",
            body: "She copies the repo URL and clones it — this downloads the whole project and its history into a new folder.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git clone https://github.com/fincloud/team-portfolio.git", kind: "cmd" },
                    { t: "cd team-portfolio", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Check where she is",
            body: "Before doing anything, she confirms she's on main and everything is clean. git status saves a lot of confusion.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git status", kind: "cmd" },
                    { t: "On branch main · nothing to commit, working tree clean", kind: "output" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Branch off before building",
            body: "She never works directly on main. The -b flag both creates the branch and switches to it.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout -b feature/hero-section", kind: "cmd" },
                    { t: "Switched to a new branch 'feature/hero-section'", kind: "output" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Stage & commit a checkpoint",
            body: "add selects what goes in; commit saves the named snapshot to her local history. Nothing is online yet.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git add .", kind: "cmd" },
                    { t: 'git commit -m "Add hero section to homepage"', kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Push the branch, open a PR",
            body: "The first push of a new branch uses -u origin … to link local and remote. Then on GitHub she opens a Pull Request: feature/hero-section → main.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git push -u origin feature/hero-section", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
        ]}
      />

      <div style={{ margin: "var(--space-6) 0 var(--space-4)" }}>
        <Pill tone="context">Day 2 · Tuesday — sync, hop, finish</Pill>
      </div>
      <Steps
        items={[
          {
            title: "Start the day by pulling the latest",
            body: "Overnight, a teammate merged work into main. Maya switches to main and pulls so she's building on the newest version. Pull first, every single day.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout main", kind: "cmd" },
                    { t: "git pull", kind: "cmd" },
                    { t: "Updating a1b2c3d..e4f5g6h · 3 files changed", kind: "output" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Hop to another project, then back",
            body: "Each project is just a folder — she moves between them with cd. Git tracks each one independently, so her branch and status are remembered per project.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "cd ../marketing-site", kind: "cmd" },
                    { t: "git pull            # grab the latest here too", kind: "cmd" },
                    { t: "cd ../team-portfolio  # back to her project", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Return to her branch, finish, push",
            body: "Her half-finished work is exactly where she left it. Because the branch already exists online, a plain push is enough — the PR picks up the new commit automatically.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout feature/hero-section", kind: "cmd" },
                    { t: "git add .", kind: "cmd" },
                    { t: 'git commit -m "Polish hero spacing and copy"', kind: "cmd" },
                    { t: "git push", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
          {
            title: "Approved, merged, cleaned up",
            body: "Her reviewer merges the PR into main. Maya returns to main, pulls the merged work down, and deletes the finished branch. Loop closed.",
            extra: (
              <div style={{ marginTop: "var(--space-3)" }}>
                <CodeBlock
                  lines={[
                    { t: "git checkout main", kind: "cmd" },
                    { t: "git pull", kind: "cmd" },
                    { t: "git branch -d feature/hero-section  # tidy up", kind: "cmd" },
                  ]}
                />
              </div>
            ),
          },
        ]}
      />

      <div style={{ marginTop: "var(--space-6)" }}>
        <Callout tone="action" title="The whole scenario, as one breath">
          clone → cd in → checkout -b → work → add → commit → push → open PR ·
          next day: checkout main → pull → work → commit → push → merge → pull →
          delete branch.
        </Callout>
      </div>

      <div id="git-study" style={{ marginTop: "var(--space-8)" }}>
        <Callout tone="essential" title="Study check · Git & GitHub">
          Do the loop once end-to-end and it stops being scary.
        </Callout>
      </div>
      <StudyCheck
        tryItems={[
          "Clone a repo, branch off, commit a tiny change, push, and open a PR.",
          "The next day: checkout main, pull, then return to your branch.",
          "After it's merged, delete the feature branch.",
        ]}
        avoidItems={[
          "Working directly on main instead of a branch.",
          "Forgetting to pull before starting new work.",
          "Vague commit messages like “update” or “fix”.",
        ]}
      />
    </Section>
  );
}
