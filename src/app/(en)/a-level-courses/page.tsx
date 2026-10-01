import { ALevelPage } from "@/components/alevel/alevel-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("en", "alevel");

export const metadata = createPageMetadata("en", "alevel", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function EnglishALevelPage() {
  return <ALevelPage />;
}
