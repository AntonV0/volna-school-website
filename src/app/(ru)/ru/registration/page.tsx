import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "ru",
  "registration",
  registrationContent.ru.metadata,
);

export default function RussianRegistrationPage() {
  return <RegistrationPage locale="ru" />;
}
