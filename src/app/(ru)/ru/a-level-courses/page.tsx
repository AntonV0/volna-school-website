import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("ru", "alevel");

export const metadata = createPageMetadata("ru", "alevel", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function RussianALevelPage() {
  return <CoursePage content={content} />;
}
