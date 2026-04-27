import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "adults");

export default function RussianAdultsPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="adults" />;
}
