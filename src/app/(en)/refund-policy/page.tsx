import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("en", "refund");

export default function EnglishRefundPage() {
  return <LegalPage locale="en" routeKey="refund" />;
}
