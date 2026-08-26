import { LegalPage } from "@/components/legal/legal-page";
import { createLegalMetadata } from "@/lib/legal/metadata";

export const metadata = createLegalMetadata("ru", "privacy");

export default function RussianPrivacyPage() {
  return <LegalPage locale="ru" routeKey="privacy" />;
}
