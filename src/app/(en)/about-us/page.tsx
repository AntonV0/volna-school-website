import { AboutPage } from "@/components/about/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "about", {
  title: "About Volna School | Our People, Approach and Story",
  description: "Meet the people behind Volna Online Russian School. Discover our teaching approach and the weekend-school roots behind our lessons for children, exam students and adults.",
});

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
