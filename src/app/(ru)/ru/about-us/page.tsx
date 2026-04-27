import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "about");

export default function RussianAboutPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="about" />;
}
