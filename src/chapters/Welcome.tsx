import { ChapterView } from "@/components/layout/ChapterView";
import { Sub, Prose, Callout } from "@/components/content";
import { IconIdea } from "@/components/icons/ui";

export function Welcome() {
  return (
    <ChapterView
      slug="welcome"
      lede="You do not need to memorise this guide. Use it to recognise the language, understand the workflow, and know what to ask next."
    >
      <Sub id="what-this-guide-is" title="What this guide is">
        <Prose>
          <p>
            Vibe coding means creating software by describing what you want,
            reviewing what the AI produces, and guiding it through a series of
            improvements. You are not required to write every line of code
            yourself. You are required to think clearly, make decisions, and
            recognise when the result is not good enough.
          </p>
          <p>
            That makes vibe coding surprisingly familiar to designers and
            researchers. We already know how to frame ambiguous problems,
            understand people, establish principles, create systems, critique
            work, and iterate. The interface has changed — from a canvas or
            document to a conversation with an agent — but the need for
            judgement has not.
          </p>
          <p>
            This guide gives you enough technical understanding to participate
            confidently without pretending that a short course turns everyone
            into a software engineer. It focuses on the parts that transfer
            immediately into your work: framing, context, collaboration,
            prototyping, validation, and clear communication.
          </p>
        </Prose>
        <Callout tone="essential" variant="feature" icon={<IconIdea size={20} />}>
          The goal is not “AI made it.” The goal is “we directed, checked, and
          improved it until it served a real purpose.”
        </Callout>
      </Sub>

      <Sub id="how-to-use-it" title="How to use it">
        <Prose>
          <p>
            Read the guide once in order. The chapters build on one another.
            During practical work, return to the templates, checklists, and
            command reference rather than trying to remember everything.
          </p>
        </Prose>
        <Callout tone="context" title="When you see a technical term, ask three questions">
          <ol>
            <li>What problem does this solve?</li>
            <li>When would our team need it?</li>
            <li>What could go wrong if we misunderstand it?</li>
          </ol>
        </Callout>
      </Sub>

      <Sub id="what-you-can-do" title="What you will be able to do">
        <Prose>
          <p>By the end, you should be able to:</p>
          <ul>
            <li>
              explain what vibe coding is without reducing it to “prompt and
              hope”;
            </li>
            <li>choose an appropriate tool for a small prototype;</li>
            <li>give an AI enough context to make useful decisions;</li>
            <li>break an idea into small, testable slices;</li>
            <li>
              contribute through your own discipline rather than imitating a
              developer;
            </li>
            <li>
              recognise basic code, terminal, Git, API, and deployment language;
            </li>
            <li>
              review a generated experience for usability, content,
              accessibility, responsiveness, and risk;
            </li>
            <li>
              build and publish a small interactive webpage with AI assistance.
            </li>
          </ul>
        </Prose>
      </Sub>
    </ChapterView>
  );
}
