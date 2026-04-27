import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("en", "children");

export const metadata = createPageMetadata("en", "children", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function EnglishChildrenPage() {
  return <CoursePage content={content} />;
}
