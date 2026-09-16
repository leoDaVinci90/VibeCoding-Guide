import { AppShell } from "@/components/layout/AppShell";
import { Hero } from "@/components/sections/Hero";
import { Contents } from "@/components/sections/Contents";
import { Terminology } from "@/components/sections/Terminology";
import { Prompts } from "@/components/sections/Prompts";
import { Git } from "@/components/sections/Git";
import { Terminal } from "@/components/sections/Terminal";
import { DeepDives } from "@/components/sections/DeepDives";
import { Glossary } from "@/components/sections/Glossary";
import { Closing } from "@/components/sections/Closing";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <Contents />
      <Terminology />
      <Prompts />
      <Git />
      <Terminal />
      <DeepDives />
      <Glossary />
      <Closing />
      <Footer />
    </AppShell>
  );
}
