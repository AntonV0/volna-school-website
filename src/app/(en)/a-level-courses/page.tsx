import { CoursePage } from "@/components/course/course-page";
import { getCourseContent } from "@/content/course-content";

const content = getCourseContent("en", "alevel");

export const metadata = {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
};

export default function EnglishALevelPage() {
  return <CoursePage content={content} />;
}
