import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("ru", "safeguarding");

export default function RussianSafeguardingPage() {
  return <LegalPage locale="ru" routeKey="safeguarding" />;
}
