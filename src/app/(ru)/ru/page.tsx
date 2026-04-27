import { RebuildPlaceholderPage } from "@/components/page-scaffold/rebuild-placeholder-page";
import { siteContent } from "@/content/site-content";

export default function RussianHomePage() {
  return (
    <RebuildPlaceholderPage
      content={siteContent.ru.pages.home}
      locale="ru"
    />
  );
}
