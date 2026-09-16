import { Section, SectionHeader } from "@/components/content";
import { chapterIcons } from "@/components/icons/StreamlineIcons";
import s from "./sections.module.css";

type Entry = { term: string; def: string };

const entries: Entry[] = [
  { term: "AGI", def: "Hypothetical human-level general AI. Doesn't exist yet." },
  { term: "Agent (AI)", def: "AI that completes one task using a tool." },
  { term: "Agentic AI", def: "AI that plans and pursues a whole goal across many steps." },
  { term: "AI", def: "Software that does tasks needing human-like intelligence." },
  { term: "AI Assistant", def: "App to chat with a model (ChatGPT, Claude)." },
  { term: "AI Model", def: "The trained “brain” behind an AI product." },
  { term: "API", def: "A contract that lets two apps talk: request → response." },
  { term: "ASI", def: "Hypothetical super-human AI. Still theoretical." },
  { term: "Chain-of-thought", def: "Asking the model to reason step by step first." },
  { term: "CLI", def: "Controlling the computer by typing commands." },
  { term: "Context window", def: "How much the model can hold in mind at once, in tokens." },
  { term: "Embeddings", def: "Text turned into numbers that capture meaning." },
  { term: "Fine-tuning", def: "Training an existing model further for a specific purpose." },
  { term: "GET", def: "An API request that reads data without changing it." },
  { term: "Hallucination", def: "When AI confidently states something untrue." },
  { term: "Inference", def: "Actually running a trained model to get output." },
  { term: "LLM", def: "Model trained to understand and generate language." },
  { term: "LRM", def: "An LLM optimised to reason through complex problems." },
  { term: "MCP", def: "One standard for connecting AI to tools and data." },
  { term: "Multimodal", def: "A model that handles images, audio and files, not just text." },
  { term: "POST", def: "An API request that creates or sends new data." },
  { term: "Prompt", def: "The instruction you give an AI. Treat it as a brief." },
  { term: "RAG", def: "Retrieve relevant text, then let the model answer from it." },
  { term: "RLHF", def: "Human feedback that aligns a model to be helpful." },
  { term: "Skills", def: "Reusable saved workflows that extend what an AI can do." },
  { term: "System prompt", def: "Standing instructions that shape behaviour all conversation." },
  { term: "Temperature", def: "A dial for predictable (low) vs creative (high) output." },
  { term: "Token", def: "The word-chunk a model reads. ~¾ of a word." },
  { term: "Vector database", def: "Stores embeddings; finds text by meaning, not keywords." },
  { term: "Vibe coding", def: "Building software by describing it in natural language." },
  { term: "Weights / parameters", def: "The numbers learned in training — the model itself." },
  { term: "Zero / few-shot", def: "Prompting with no examples, or a few to imitate." },
];

function groupByLetter(items: Entry[]) {
  const groups: Record<string, Entry[]> = {};
  for (const item of items) {
    const letter = item.term[0].toUpperCase();
    (groups[letter] ??= []).push(item);
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

export function Glossary() {
  const groups = groupByLetter(entries);
  return (
    <Section id="glossary" width="wide">
      <SectionHeader
        id="glossary"
        eyebrow="Reference · A–Z"
        icon={chapterIcons.glossary}
        title="Glossary — quick lookup"
        lede="Every key term from the guide, in one place. Use it during the practical classes when a word comes up and you just need a one-line reminder."
      />

      <div id="glossary-list">
        {groups.map(([letter, items]) => (
          <div key={letter} className={s.glossaryGroup}>
            <div className={s.glossaryLetter}>{letter}</div>
            <div className={s.glossaryGrid}>
              {items.map((item) => (
                <div key={item.term} className={s.glossaryItem}>
                  <div className={s.glossaryTerm}>{item.term}</div>
                  <div className={s.glossaryDef}>{item.def}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
