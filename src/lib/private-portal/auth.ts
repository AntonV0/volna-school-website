import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import {
  canAccessPrivatePortal,
  getPrivateLoginPath,
  isPrivatePortalRole,
  type PrivatePortalKey,
  type PrivatePortalRole,
  privatePortalRoleClaimKey,
  privatePortalRoutes,
} from "@/lib/private-portal/config";
import { createClient } from "@/lib/supabase/server";

export type PrivatePortalUser = Pick<User, "email" | "id"> & {
  role: PrivatePortalRole;
};

export function isMissingSupabasePublicEnv(error: unknown) {
  return (
    error instanceof Error &&
    error.message.includes("Missing Supabase public environment variables")
  );
}

export function getPrivatePortalRole(user: User): PrivatePortalRole | null {
  const appMetadataRole = user.app_metadata?.[privatePortalRoleClaimKey];

  if (isPrivatePortalRole(appMetadataRole)) {
    return appMetadataRole;
  }

  return null;
}

export async function getRequiredPrivatePortalUser(
  portal: PrivatePortalKey,
): Promise<PrivatePortalUser> {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect(getPrivateLoginPath(privatePortalRoutes[portal]));
  }

  const role = getPrivatePortalRole(user);

  if (!role || !canAccessPrivatePortal(role, portal)) {
    redirect(getPrivateLoginPath(privatePortalRoutes[portal]));
  }

  return {
    email: user.email,
    id: user.id,
    role,
  };
}
