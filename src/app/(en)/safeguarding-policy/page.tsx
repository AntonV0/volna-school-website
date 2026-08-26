import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("en", "safeguarding");

export default function EnglishSafeguardingPage() {
  return <LegalPage locale="en" routeKey="safeguarding" />;
}
