import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";

export const metadata = {
  title: `${legalContent.en.privacy.title} | Volna School`,
  description: legalContent.en.privacy.summary,
};

export default function EnglishPrivacyPage() {
  return <LegalPage locale="en" routeKey="privacy" />;
}
