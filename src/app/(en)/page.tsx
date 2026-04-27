import { HomePage } from "@/components/home/home-page";
import { siteContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "home", siteContent.en.metadata);

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
