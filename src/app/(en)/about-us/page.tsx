import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "about");

export default function EnglishAboutPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="about" />;
}
