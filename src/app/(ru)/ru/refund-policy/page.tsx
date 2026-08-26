import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("ru", "refund");

export default function RussianRefundPage() {
  return <LegalPage locale="ru" routeKey="refund" />;
}
