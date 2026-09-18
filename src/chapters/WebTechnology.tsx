import { ChapterView } from "@/components/layout/ChapterView";
import {
  Sub,
  Prose,
  Callout,
  CodeBlock,
  DataTable,
  Code,
  StudyCheck,
} from "@/components/content";

export function WebTechnology() {
  return (
    <ChapterView
      slug="web-technology"
      lede="Choose tools according to the problem — not because the stack sounds impressive."
    >
      <Sub id="how-webpage-works" title="How a webpage works">
        <Prose>
          <p>
            When you visit a webpage, a browser requests files from a server,
            interprets them, and renders an experience you can see and interact
            with.
          </p>
          <p>Three foundational languages do most of the work.</p>
        </Prose>
      </Sub>

      <Sub id="html-css-js" title="HTML, CSS, and JavaScript">
        <Prose>
          <ul>
            <li>
              <strong>HTML</strong> gives the page meaning and structure:
              headings, buttons, forms, navigation, images.
            </li>
            <li>
              <strong>CSS</strong> controls presentation: layout, typography,
              colour, spacing, responsive behaviour, and many animations.
            </li>
            <li>
              <strong>JavaScript</strong> controls behaviour: opening a menu,
              validating a form, filtering results, fetching data.
            </li>
          </ul>
        </Prose>
        <Callout tone="context" title="In practice">
          A useful analogy is a theatre: HTML is the stage and cast, CSS is the
          set and costume, and JavaScript is the action.
        </Callout>
      </Sub>

      <Sub id="frontend-backend" title="Frontend and backend">
        <Prose>
          <p>
            The <strong>frontend</strong> is the part that runs in the browser
            and that people interact with.
          </p>
          <p>
            The <strong>backend</strong> runs on a server. It may authenticate
            users, apply business rules, communicate with a database, or protect
            secret credentials.
          </p>
          <p>
            Not every project needs a backend. A portfolio, campaign page, or
            small interactive prototype may run entirely in the browser. Add a
            backend when the experience needs persistent shared data, private
            operations, accounts, payments, protected API keys, or server-side
            business logic.
          </p>
        </Prose>
      </Sub>

      <Sub id="react-typescript" title="React, TypeScript, and frameworks">
        <Prose>
          <p>
            <strong>React</strong> helps build interfaces from reusable
            components. A button, card, navigation item, or complete search
            panel can become a component with defined inputs and behaviour.
          </p>
          <p>
            <strong>TypeScript</strong> adds type information to JavaScript. It
            helps the team and tools understand what shape data should have and
            catches many mistakes earlier.
          </p>
          <p>
            A <strong>framework</strong> provides an organised way to build a
            full application. Next.js, for example, builds on React and adds
            routing, rendering options, server features, and production
            conventions.
          </p>
          <p>
            For a first one-page exercise, a lightweight setup may be easier than
            a full framework. For a multi-page product with data and accounts, a
            framework becomes more useful. Choose tools according to the problem
            — not because the stack sounds impressive.
          </p>
        </Prose>
      </Sub>

      <Sub id="node-npm" title="Node.js, npm, and packages">
        <Prose>
          <p>
            <strong>Node.js</strong> lets JavaScript run outside the browser. In
            frontend projects, it powers development tools, build processes, and
            sometimes the backend.
          </p>
          <p>
            <strong>npm</strong> is a package manager bundled with Node.js. A{" "}
            <strong>package</strong> is reusable code created by someone else —
            an icon library, animation library, date utility, or testing tool.
          </p>
          <p>
            The project’s <Code>package.json</Code> is a useful map. It lists
            dependencies and named scripts such as <Code>dev</Code>,{" "}
            <Code>build</Code>, or <Code>test</Code>.
          </p>
        </Prose>
        <CodeBlock label="bash" lines={[{ t: "npm install", kind: "cmd" }]} />
        <Prose>
          <p>Downloads the packages already listed by the project.</p>
        </Prose>
        <CodeBlock
          label="bash"
          lines={[{ t: "npm install motion", kind: "cmd" }]}
        />
        <Prose>
          <p>Adds a new package to the project.</p>
        </Prose>
        <CodeBlock label="bash" lines={[{ t: "npm run dev", kind: "cmd" }]} />
        <Prose>
          <p>Runs a script named <Code>dev</Code>, usually starting the local
            development server.</p>
        </Prose>
        <Callout tone="context" title="In practice">
          Think of <Code>npm install</Code> as preparing the kitchen and{" "}
          <Code>npm run dev</Code> as opening it for service.
        </Callout>
      </Sub>

      <Sub id="apis-json-databases" title="APIs, JSON, and databases">
        <Prose>
          <p>
            An <strong>API</strong> is a contract for software communication.
            Your app sends a request to an endpoint; another system sends back a
            response.
          </p>
          <p>Common HTTP methods:</p>
          <ul>
            <li>
              <Code>GET</Code> reads data;
            </li>
            <li>
              <Code>POST</Code> creates data or triggers an action;
            </li>
            <li>
              <Code>PATCH</Code> updates part of something;
            </li>
            <li>
              <Code>DELETE</Code> removes something.
            </li>
          </ul>
          <p>
            <strong>JSON</strong> is a common text format for exchanging
            structured data:
          </p>
        </Prose>
        <CodeBlock
          label="json"
          variant="code"
          lines={[
            { t: "{" },
            { t: '  "title": "Five-minute reset",' },
            { t: '  "duration": 5,' },
            { t: '  "energy": "low"' },
            { t: "}" },
          ]}
        />
        <Prose>
          <p>
            A <strong>database</strong> stores structured information so it can
            be retrieved and changed later. A prototype whose data never needs
            to persist may not need one. Browser storage can remember simple
            personal preferences on one device. A shared product normally needs
            a proper backend and database.
          </p>
        </Prose>
      </Sub>

      <Sub id="localhost-github-deploy" title="Localhost, GitHub, and deployment">
        <Prose>
          <p>
            <strong>Localhost</strong> means the app is running on your own
            computer. It is visible to you but not automatically to everyone
            else.
          </p>
          <p>
            <strong>GitHub</strong> stores the project’s Git repository online
            and supports collaboration. It does not automatically make every
            application a public website.
          </p>
          <p>
            <strong>Deployment</strong> builds the project and hosts it on an
            internet-connected service. Platforms such as Vercel can connect to
            GitHub, deploy each update, and provide a shareable URL.
          </p>
        </Prose>
        <DataTable
          columns={["Project", "Start with", "Add only if needed"]}
          rows={[
            {
              head: "Static information page",
              cells: [
                "HTML/CSS or a simple React project",
                "Motion library, analytics",
              ],
            },
            {
              head: "Polished interactive landing page",
              cells: ["React + TypeScript + CSS", "Motion.dev, icon package"],
            },
            {
              head: "Multi-page application",
              cells: ["Next.js + TypeScript", "Component library, backend"],
            },
            {
              head: "Product with accounts and shared data",
              cells: [
                "Next.js + backend/database",
                "Authentication, storage, server APIs",
              ],
            },
            {
              head: "Story-led animation experience",
              cells: [
                "React + Motion.dev",
                "GSAP for complex timelines or scroll choreography",
              ],
            },
          ]}
        />
        <StudyCheck
          items={[
            "Does your current idea genuinely need a backend?",
            "Explain npm install and npm run dev in one sentence each.",
            "What makes localhost different from a deployed website?",
          ]}
        />
      </Sub>
    </ChapterView>
  );
}
