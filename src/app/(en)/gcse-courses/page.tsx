import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "gcse");

export default function EnglishGcsePage() {
  return <LocalizedScaffoldPage locale="en" routeKey="gcse" />;
}
