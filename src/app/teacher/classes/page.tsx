import { TeacherWorkspaceShell } from "@/components/private-portal/teacher-workspace-shell";
import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import {
  getRequiredPrivatePortalUser,
  isMissingSupabasePublicEnv,
} from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

export default async function TeacherClassesPage() {
  let user: PrivatePortalUser | null = null;
  let setupNeeded = false;

  try {
    user = await getRequiredPrivatePortalUser("teacher");
  } catch (error) {
    if (isMissingSupabasePublicEnv(error)) {
      setupNeeded = true;
    } else {
      throw error;
    }
  }

  return (
    <TeacherWorkspaceShell
      activeSection="classes"
      setupNeeded={setupNeeded}
      user={user}
    />
  );
}
