import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("ru", "adults");

export const metadata = createPageMetadata("ru", "adults", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function RussianAdultsPage() {
  return <CoursePage content={content} locale="ru" />;
}
