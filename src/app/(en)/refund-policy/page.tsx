import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";

export const metadata = {
  title: `${legalContent.en.refund.title} | Volna School`,
  description: legalContent.en.refund.summary,
};

export default function EnglishRefundPage() {
  return <LegalPage locale="en" routeKey="refund" />;
}
