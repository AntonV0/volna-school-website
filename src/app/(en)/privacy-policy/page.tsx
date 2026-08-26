import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("en", "privacy");

export default function EnglishPrivacyPage() {
  return <LegalPage locale="en" routeKey="privacy" />;
}
