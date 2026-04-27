import { AboutPage } from "@/components/about/about-page";
import { aboutContent } from "@/content/about-content";

export const metadata = {
  title: `${aboutContent.ru.hero.title} | Volna School`,
  description: aboutContent.ru.hero.summary,
};

export default function RussianAboutPage() {
  return <AboutPage locale="ru" />;
}
