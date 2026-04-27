import { AboutPage } from "@/components/about/about-page";
import { aboutContent } from "@/content/about-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "about", {
  title: `${aboutContent.en.hero.title} | Volna School`,
  description: aboutContent.en.hero.summary,
});

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
