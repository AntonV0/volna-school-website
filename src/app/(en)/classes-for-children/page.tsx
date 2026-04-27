import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "children");

export default function EnglishChildrenPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="children" />;
}
