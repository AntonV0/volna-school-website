import { HomePage } from "@/components/home/home-page";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ru", "home", siteContent.ru.metadata);

export default function RussianHomePage() {
  return <HomePage locale="ru" />;
}
