import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "children");

export default function RussianChildrenPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="children" />;
}
