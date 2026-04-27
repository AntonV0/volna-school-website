import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "privacy");

export default function RussianPrivacyPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="privacy" />;
}
