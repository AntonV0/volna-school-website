import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/content/legal-content";

export const metadata = {
  title: `${legalContent.ru.privacy.title} | Volna School`,
  description: legalContent.ru.privacy.summary,
};

export default function RussianPrivacyPage() {
  return <LegalPage locale="ru" routeKey="privacy" />;
}
