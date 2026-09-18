import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { chapters, chapterBySlug } from "@/data/guide";
import { chapterComponents } from "@/chapters";

/** Pre-render every chapter at build time. */
export function generateStaticParams() {
  return chapters.map((c) => ({ chapter: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/[chapter]">,
): Promise<Metadata> {
  const { chapter } = await props.params;
  const meta = chapterBySlug(chapter);
  if (!meta) return {};
  return {
    title: meta.label,
    description: meta.summary,
  };
}

export default async function ChapterPage(props: PageProps<"/[chapter]">) {
  const { chapter } = await props.params;
  const Chapter = chapterComponents[chapter];
  if (!Chapter || !chapterBySlug(chapter)) notFound();
  return <Chapter />;
}
