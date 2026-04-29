import { StudentPortalShell } from "@/components/private-portal/student-portal-shell";
import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import {
  getRequiredPrivatePortalUser,
  isMissingSupabasePublicEnv,
} from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

const lessonScope = [
  {
    description:
      "Live lesson access will require a future integration decision and will not expose direct meeting URLs in this scaffold.",
    label: "Access links",
  },
  {
    description:
      "Lesson timing and course context need an approved source of truth before any student-specific schedule is shown.",
    label: "Schedule context",
  },
  {
    description:
      "Any recordings or follow-up resources must be reviewed for student permissions before publication.",
    label: "Resources",
  },
] as const;

export default async function StudentLessonsPage() {
  let user: PrivatePortalUser | null = null;
  let setupNeeded = false;

  try {
    user = await getRequiredPrivatePortalUser("student");
  } catch (error) {
    if (isMissingSupabasePublicEnv(error)) {
      setupNeeded = true;
    } else {
      throw error;
    }
  }

  return (
    <StudentPortalShell
      features={lessonScope}
      intro="A protected placeholder for future lesson access integration. It does not contain live meeting links, class URLs, or private resources."
      setupNeeded={setupNeeded}
      statusLabel="Lesson access"
      title="Student lessons"
      user={user}
    />
  );
}
