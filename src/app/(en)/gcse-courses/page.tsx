import { GcsePage } from "@/components/gcse/gcse-page";
import { getCourseContent } from "@/content/course-content";
import { createPageMetadata } from "@/lib/metadata";

const content = getCourseContent("en", "gcse");

export const metadata = createPageMetadata("en", "gcse", {
  title: `${content.hero.title} | Volna School`,
  description: content.hero.summary,
});

export default function EnglishGcsePage() {
  return <GcsePage />;
}
