import { StudentPortalShell } from "@/components/private-portal/student-portal-shell";
import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import {
  getRequiredPrivatePortalUser,
  isMissingSupabasePublicEnv,
} from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

const homeworkScope = [
  {
    description:
      "Assigned homework will only appear after the owner approves the student-facing data model and publication workflow.",
    label: "Assignments",
  },
  {
    description:
      "Learning materials are reserved for reviewed, permissioned resources rather than extracted class content or private files.",
    label: "Materials",
  },
  {
    description:
      "Completion status needs a future policy for what students can see and how teachers or admins manage it.",
    label: "Progress",
  },
] as const;

export default async function StudentHomeworkPage() {
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
      features={homeworkScope}
      intro="A protected placeholder for assigned homework and learning materials once the owner approves exactly what students should access."
      setupNeeded={setupNeeded}
      statusLabel="Homework and materials"
      title="Student homework"
      user={user}
    />
  );
}
