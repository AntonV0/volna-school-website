import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("en", "privacy", {
  title: `${legalContent.en.privacy.title} | Volna School`,
  description: legalContent.en.privacy.summary,
});

export default function EnglishPrivacyPage() {
  return <LegalPage locale="en" routeKey="privacy" />;
}
