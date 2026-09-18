import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ChapterHeader } from "@/components/content";
import { chapterBySlug } from "@/data/guide";
import { PrevNext } from "./PrevNext";
import s from "./ChapterView.module.css";

/**
 * Shared chrome for a chapter page: the h1 header (from the nav model),
 * the chapter body, and previous/next navigation. Keeps chapter files focused
 * on content.
 */
export function ChapterView({
  slug,
  lede,
  children,
}: {
  slug: string;
  lede: ReactNode;
  children: ReactNode;
}) {
  const chapter = chapterBySlug(slug);
  if (!chapter) notFound();

  return (
    <article className={s.chapter}>
      <ChapterHeader
        index={chapter.index ?? undefined}
        eyebrow="Field Guide"
        icon={chapter.icon}
        title={chapter.label}
        lede={lede}
      />
      {children}
      <PrevNext slug={slug} />
    </article>
  );
}
