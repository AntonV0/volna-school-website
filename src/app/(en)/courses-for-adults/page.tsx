import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";

const content = getCourseContent("en", "adults");

export const metadata = {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
};

export default function EnglishAdultsPage() {
  return <CoursePage content={content} />;
}
