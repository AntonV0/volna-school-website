import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";
import { draftLegalRobots } from "@/lib/legal/review-status";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("ru", "refund", {
  title: `${legalContent.ru.refund.title} | Volna School`,
  description: legalContent.ru.refund.summary,
  robots: draftLegalRobots,
});

export default function RussianRefundPage() {
  return <LegalPage locale="ru" routeKey="refund" />;
}
