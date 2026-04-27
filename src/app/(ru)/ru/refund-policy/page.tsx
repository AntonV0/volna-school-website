import {
  createScaffoldMetadata,
  LocalizedScaffoldPage,
} from "@/components/page-scaffold/rebuild-placeholder-page";

export const metadata = createScaffoldMetadata("ru", "refund");

export default function RussianRefundPage() {
  return <LocalizedScaffoldPage locale="ru" routeKey="refund" />;
}
