import { PrivatePortalShell } from "@/components/private-portal/private-portal-shell";
import type { PrivatePortalUser } from "@/lib/private-portal/auth";
import {
  getRequiredPrivatePortalUser,
  isMissingSupabasePublicEnv,
} from "@/lib/private-portal/auth";

export const dynamic = "force-dynamic";

export default async function TeacherPage() {
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
    <PrivatePortalShell
      portal="teacher"
      setupNeeded={setupNeeded}
      user={user}
    />
  );
}
