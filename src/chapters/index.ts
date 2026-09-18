import type { ComponentType } from "react";
import { Welcome } from "./Welcome";
import { VibeCoding } from "./VibeCoding";
import { LanguageOfAi } from "./LanguageOfAi";
import { WebTechnology } from "./WebTechnology";
import { ContextEngineering } from "./ContextEngineering";
import { Briefing } from "./Briefing";
import { BuildWorkflow } from "./BuildWorkflow";
import { CraftByDiscipline } from "./CraftByDiscipline";
import { QualitySafety } from "./QualitySafety";
import { GitTerminal } from "./GitTerminal";
import { HomeProject } from "./HomeProject";
import { Reference } from "./Reference";

/** Maps a chapter slug to the component that renders that chapter's body. */
export const chapterComponents: Record<string, ComponentType> = {
  welcome: Welcome,
  "vibe-coding-understood": VibeCoding,
  "language-of-ai": LanguageOfAi,
  "web-technology": WebTechnology,
  "context-engineering": ContextEngineering,
  briefing: Briefing,
  "build-workflow": BuildWorkflow,
  "craft-by-discipline": CraftByDiscipline,
  "quality-and-safety": QualitySafety,
  "git-and-terminal": GitTerminal,
  "home-project": HomeProject,
  reference: Reference,
};
