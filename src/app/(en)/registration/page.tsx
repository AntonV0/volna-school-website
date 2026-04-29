import { RegistrationPage } from "@/components/registration/registration-page";
import { registrationContent } from "@/content/registration-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "en",
  "registration",
  registrationContent.en.metadata,
);

type EnglishRegistrationPageProps = {
  searchParams: Promise<{
    course?: string;
  }>;
};

export default async function EnglishRegistrationPage({
  searchParams,
}: EnglishRegistrationPageProps) {
  const params = await searchParams;

  return <RegistrationPage initialCourseInterest={params.course} locale="en" />;
}
