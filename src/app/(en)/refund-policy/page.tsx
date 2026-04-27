import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "refund", {
  title: `${legalContent.en.refund.title} | Volna School`,
  description: legalContent.en.refund.summary,
});

export default function EnglishRefundPage() {
  return <LegalPage locale="en" routeKey="refund" />;
}
