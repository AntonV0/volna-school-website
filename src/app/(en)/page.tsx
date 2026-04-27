import { RebuildPlaceholderPage } from "@/components/page-scaffold/rebuild-placeholder-page";
import { siteContent } from "@/content/site-content";

export default function EnglishHomePage() {
  return (
    <RebuildPlaceholderPage
      content={siteContent.en.pages.home}
      locale="en"
    />
  );
}
