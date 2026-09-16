import type { ReactNode } from "react";
import {
  Section,
  SectionHeader,
  Subhead,
  Callout,
  CodeBlock,
  DataTable,
  StudyCheck,
  Code,
  Kbd,
  Pill,
} from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import type { TableRow } from "@/components/content";

function cmd(name: string, warn?: boolean): ReactNode {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <Code>{name}</Code>
      {warn && <Pill tone="warn">⚠</Pill>}
    </span>
  );
}

const around: TableRow[] = [
  { head: cmd("pwd"), cells: ["Print working directory — the folder you're standing in right now."] },
  { head: cmd("ls"), cells: [<>List files and folders here. <Code>ls -a</Code> shows hidden files; <Code>ls -l</Code> shows details.</>] },
  { head: cmd("cd"), cells: [<>Change directory. <Code>cd ..</Code> goes up one level; <Code>cd ~</Code> goes home.</>] },
  { head: cmd("clear"), cells: [<>Wipe the screen clean — nothing is deleted. <Kbd>Ctrl</Kbd> + <Kbd>L</Kbd> does the same.</>] },
];

const files: TableRow[] = [
  { head: cmd("mkdir"), cells: [<>Make a new directory. <Code>mkdir ideas</Code> creates a folder called ideas.</>] },
  { head: cmd("touch"), cells: [<>Create a new empty file. <Code>touch notes.md</Code> makes an empty notes.md.</>] },
  { head: cmd("cp"), cells: [<>Copy a file or folder. <Code>cp a.txt b.txt</Code> makes a duplicate.</>] },
  { head: cmd("mv"), cells: [<>Move or rename. <Code>mv old.txt new.txt</Code> renames; <Code>mv file.txt ideas/</Code> moves it.</>] },
  { head: cmd("rm", true), cells: [<>Remove (delete) a file. <Code>rm -r folder</Code> deletes a folder and everything in it. There is no trash — it's gone.</>] },
  { head: cmd("cat"), cells: ["Print a file's contents straight into the terminal — a quick peek without opening an editor."] },
];

const search: TableRow[] = [
  { head: cmd("echo"), cells: [<>Print text back. Handy to write into a file: <Code>echo &quot;hello&quot; &gt; file.txt</Code>.</>] },
  { head: cmd("head / tail"), cells: ["Show the first (or last) few lines of a file — great for peeking at big logs."] },
  { head: cmd("grep"), cells: [<>Search for text. <Code>grep &quot;color&quot; styles.css</Code> finds every line mentioning color.</>] },
  { head: cmd("find"), cells: [<>Locate files by name. <Code>find . -name &quot;*.png&quot;</Code> lists every PNG under the current folder.</>] },
];

const projects: TableRow[] = [
  { head: cmd("node -v / npm -v"), cells: ["Check that Node and npm are installed, and which version — the first thing to confirm on a new machine."] },
  { head: cmd("npm install"), cells: [<>Download all the libraries a project depends on. Run once after cloning. <Code>npm i</Code> for short.</>] },
  { head: cmd("npm run dev"), cells: [<>Start the project locally to see it in the browser. It keeps running until you stop it with <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>.</>] },
  { head: cmd("code ."), cells: [<>Open the current folder in VS Code. The dot means “here”. (<Code>open .</Code> opens Finder on macOS.)</>] },
  { head: cmd("curl"), cells: ["Fetch a URL from the terminal — often used to test an API and see the raw response."] },
];

const power: TableRow[] = [
  { head: cmd("man"), cells: [<>Open the manual for a command. <Code>man ls</Code> explains every option. Press <Kbd>q</Kbd> to quit.</>] },
  { head: cmd("history"), cells: [<>List recent commands. Press the <Kbd>↑</Kbd> arrow to bring back the last one.</>] },
  { head: cmd("sudo", true), cells: ["Run a command with admin powers. It asks for your password. Only use it when you understand exactly what the command does."] },
];

export function Terminal() {
  return (
    <Section id="terminal">
      <SectionHeader
        id="terminal"
        eyebrow="Terminal Basics"
        index="04"
        icon={chapterIcons.terminal}
        title="The terminal, demystified"
        lede="A terminal is just a way to tell your computer what to do with words instead of clicks. You type a command, press Enter, it runs. That's the whole idea."
      />

      <Callout tone="warn" title="Before you start">
        Every line starts after the <Code>$</Code> prompt — you don&apos;t type
        the <Code>$</Code> itself. Commands marked <Pill tone="warn">⚠</Pill> can
        delete or change things for real — read twice before pressing{" "}
        <Kbd>Enter</Kbd>.
      </Callout>

      <Subhead id="term-around" kicker="Group · getting around" title="Find your place" />
      <DataTable columns={["Command", "What it does"]} rows={around} />

      <Subhead id="term-files" kicker="Group · files" title="Making & managing files" />
      <DataTable columns={["Command", "What it does"]} rows={files} />

      <Subhead id="term-search" kicker="Group · search" title="Looking & searching" />
      <DataTable columns={["Command", "What it does"]} rows={search} />

      <Subhead
        id="term-projects"
        kicker="Group · running projects"
        title="What you'll use most in vibe coding"
      />
      <DataTable columns={["Command", "What it does"]} rows={projects} />

      <Subhead id="term-power" kicker="Group · power & help" title="When you're stuck" />
      <DataTable columns={["Command", "What it does"]} rows={power} />

      {/* One session */}
      <Subhead
        id="term-session"
        kicker="One session, start to finish"
        title="Setting up a project by hand"
        note="Maya spins up a fresh landing page — one short session using nearly every command above. The grey lines are what the terminal prints back."
      />
      <CodeBlock
        label="a — find your place, make the folder"
        lines={[
          { t: "pwd", kind: "cmd" },
          { t: "/Users/maya", kind: "output" },
          { t: "cd ~/projects", kind: "cmd" },
          { t: "ls", kind: "cmd" },
          { t: "team-portfolio   marketing-site", kind: "output" },
          { t: "mkdir landing-page", kind: "cmd" },
          { t: "cd landing-page", kind: "cmd" },
        ]}
      />
      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="b — leave a note, then scaffold"
          lines={[
            { t: "touch README.md", kind: "cmd" },
            { t: 'echo "# Landing Page" > README.md', kind: "cmd" },
            { t: "node -v            # is Node installed?", kind: "cmd" },
            { t: "v20.11.0", kind: "output" },
            { t: "npm create vite@latest .   # scaffold here", kind: "cmd" },
            { t: "npm install               # download dependencies", kind: "cmd" },
          ]}
        />
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="c — open it, run it, see it"
          lines={[
            { t: "code .              # open the folder in VS Code", kind: "cmd" },
            { t: "npm run dev", kind: "cmd" },
            { t: "➜  Local: http://localhost:5173/", kind: "output" },
            { t: "Ctrl + C            # stop the dev server", kind: "warn" },
          ]}
        />
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="d — bring in an asset & poke around"
          lines={[
            { t: "mkdir assets", kind: "cmd" },
            { t: "mv ~/Downloads/hero.png assets/   # move a file in", kind: "cmd" },
            { t: "find . -name \"*.png\"", kind: "cmd" },
            { t: "./assets/hero.png", kind: "output" },
            { t: "grep \"color\" src/style.css        # where are colors set?", kind: "cmd" },
            { t: "  color: #1c1a17;", kind: "output" },
          ]}
        />
      </div>
      <div style={{ marginTop: "var(--space-4)" }}>
        <CodeBlock
          label="e — make a safety copy, tidy up, get help"
          lines={[
            { t: "cp index.html index.backup.html   # just in case", kind: "cmd" },
            { t: "rm index.backup.html   # ⚠ gone for good", kind: "warn" },
            { t: "history                # what did I just run?", kind: "cmd" },
            { t: "man ls                 # read the manual · q to quit", kind: "cmd" },
            { t: "clear                  # fresh screen", kind: "cmd" },
          ]}
        />
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <Callout tone="action" title="Three habits that make the terminal painless">
          <Kbd>Tab</Kbd> completes file and folder names. The <Kbd>↑</Kbd> arrow
          brings back your last command. When in doubt, run <Code>pwd</Code> and{" "}
          <Code>ls</Code> to remember where you are.
        </Callout>
      </div>

      <div id="terminal-study" style={{ marginTop: "var(--space-8)" }}>
        <Callout tone="essential" title="Study check · Terminal basics">
          Muscle memory comes fast — run a real session end to end.
        </Callout>
      </div>
      <StudyCheck
        tryItems={[
          "Make a folder, cd in, create a file, write a line with echo, then cat it back.",
          "Use grep to find a word in a file, and find to locate a file type.",
          <>Start a project with <Code>npm run dev</Code>, view it, then stop it with <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>.</>,
        ]}
        avoidItems={[
          "Running rm or sudo without reading the line twice.",
          "Losing track of where you are — run pwd.",
          "Retyping long commands instead of using ↑ and Tab.",
        ]}
      />
    </Section>
  );
}
