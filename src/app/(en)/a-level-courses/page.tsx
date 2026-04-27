import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "alevel");

export default function EnglishALevelPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="alevel" />;
}
