import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Prose,
  Callout,
  CodeBlock,
  DataTable,
  Code,
  Kbd,
} from "@/components/content";

export function GitTerminal() {
  return (
    <ChapterView
      slug="git-and-terminal"
      lede="Version control and the command line, framed as safe habits rather than intimidating tools."
    >
      <Sub id="mental-model" title="The mental model">
        <Prose>
          <p>
            <strong>Git</strong> records the history of a project on your
            computer. A <strong>repository</strong> is the project Git tracks. A{" "}
            <strong>commit</strong> is a named checkpoint. A{" "}
            <strong>branch</strong> is a parallel line of work. A{" "}
            <strong>merge</strong> combines changes.
          </p>
          <p>
            <strong>GitHub</strong> stores repositories online and supports
            review and collaboration. You <strong>push</strong> local commits to
            the remote repository and <strong>pull</strong> remote changes to
            your machine. A <strong>pull request</strong> proposes merging one
            branch into another and creates a place for review.
          </p>
        </Prose>
      </Sub>

      <Sub id="everyday-git-loop" title="The everyday Git loop">
        <CodeBlock
          label="bash"
          lines={[
            { t: "git switch main", kind: "cmd" },
            { t: "git pull", kind: "cmd" },
            { t: "git switch -c feature/recharge-flow", kind: "cmd" },
            { t: "" },
            { t: "# work and review", kind: "comment" },
            { t: "git status", kind: "cmd" },
            { t: "git add .", kind: "cmd" },
            { t: 'git commit -m "Build recharge question flow"', kind: "cmd" },
            { t: "git push -u origin feature/recharge-flow", kind: "cmd" },
          ]}
        />
        <Prose>
          <p>
            Then open a pull request, review, merge, return to <Code>main</Code>,
            and pull again.
          </p>
          <p>
            For a solo learning project, you can work more simply. The principles
            still matter: check status, commit meaningful checkpoints, and push a
            backup before risky changes.
          </p>
        </Prose>
      </Sub>

      <Sub id="terminal-essentials" title="Terminal essentials">
        <DataTable
          columns={["Command", "Meaning"]}
          rows={[
            { head: <Code>pwd</Code>, cells: ["Show the folder you are currently in"] },
            { head: <Code>ls</Code>, cells: ["List files and folders"] },
            { head: <Code>cd folder-name</Code>, cells: ["Enter a folder"] },
            { head: <Code>cd ..</Code>, cells: ["Move up one folder"] },
            { head: <Code>mkdir project-name</Code>, cells: ["Create a folder"] },
            {
              head: <Code>code .</Code>,
              cells: ["Open the current folder in VS Code, if configured"],
            },
            {
              head: <Code>npm install</Code>,
              cells: ["Install the project’s listed packages"],
            },
            {
              head: <Code>npm run dev</Code>,
              cells: ["Start the local development server"],
            },
            {
              head: <Code>npm run build</Code>,
              cells: ["Create or verify a production build, if defined"],
            },
            {
              head: <Code>git status</Code>,
              cells: ["Show changed files and current branch"],
            },
            {
              head: <Code>git diff</Code>,
              cells: ["Show unstaged line-by-line changes"],
            },
            {
              head: (
                <span>
                  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
                </span>
              ),
              cells: ["Stop a running terminal process"],
            },
          ]}
        />
      </Sub>

      <Sub id="safe-habits" title="Safe habits">
        <Prose>
          <ul>
            <li>
              Run <Code>pwd</Code> and <Code>ls</Code> when you are unsure where
              you are.
            </li>
            <li>
              Read destructive commands carefully. <Code>rm</Code> does not
              normally use a recycle bin.
            </li>
            <li>
              Do not use <Code>sudo</Code> because an error message told you to;
              understand why it is needed.
            </li>
            <li>Ask the agent to explain a command before you approve it.</li>
            <li>
              Use <Code>git status</Code> before and after agent changes.
            </li>
            <li>Commit before large experiments so you have a clear recovery point.</li>
            <li>
              Do not commit secrets, generated dependency folders, or local
              environment files.
            </li>
          </ul>
        </Prose>
        <Callout tone="warn" title="Watch out">
          Treat agent-suggested terminal commands as actions with real
          consequences. Read them before you approve them.
        </Callout>
      </Sub>
    </ChapterView>
  );
}
