import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "gcse");

export default function RussianGcsePage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="gcse" />;
}
