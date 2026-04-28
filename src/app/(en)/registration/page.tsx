import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "en",
  "registration",
  registrationContent.en.metadata,
);

export default function EnglishRegistrationPage() {
  return <RegistrationPage locale="en" />;
}
