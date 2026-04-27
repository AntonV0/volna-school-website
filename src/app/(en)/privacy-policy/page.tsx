import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "privacy");

export default function EnglishPrivacyPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="privacy" />;
}
