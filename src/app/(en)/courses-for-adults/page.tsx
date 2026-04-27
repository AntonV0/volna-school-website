import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "adults");

export default function EnglishAdultsPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="adults" />;
}
