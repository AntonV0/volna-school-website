import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("en", "gcse");

export const metadata = createPageMetadata("en", "gcse", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function EnglishGcsePage() {
  return <CoursePage content={content} locale="en" />;
}
