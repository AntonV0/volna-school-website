import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("en", "refund");

export default function EnglishRefundPage() {
  return <LocalizedScaffoldPage locale="en" routeKey="refund" />;
}
