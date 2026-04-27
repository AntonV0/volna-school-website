import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "alevel");

export default function RussianALevelPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="alevel" />;
}
