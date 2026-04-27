import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("ru", "children");

export const metadata = createPageMetadata("ru", "children", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function RussianChildrenPage() {
  return <CoursePage content={content} />;
}
