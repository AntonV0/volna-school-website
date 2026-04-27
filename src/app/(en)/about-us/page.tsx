import { AboutPage } from "@/components/about/about-page";
import { aboutContent } from "@/content/about-content";

export const metadata = {
  title: `${aboutContent.en.hero.title} | Volna School`,
  description: aboutContent.en.hero.summary,
};

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
