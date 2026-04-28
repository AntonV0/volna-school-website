import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("ru", "gcse");

export const metadata = createPageMetadata("ru", "gcse", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function RussianGcsePage() {
  return <CoursePage content={content} locale="ru" />;
}
