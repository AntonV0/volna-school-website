import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";

export const metadata = {
  title: `${legalContent.ru.refund.title} | Volna School`,
  description: legalContent.ru.refund.summary,
};

export default function RussianRefundPage() {
  return <LegalPage locale="ru" routeKey="refund" />;
}
