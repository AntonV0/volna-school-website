import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { getPrivatePortalRole } from "@/lib/private-portal/auth";
import {
  canAccessPrivatePortal,
  type PrivatePortalRole,
} from "@/lib/private-portal/config";
import { createClient } from "@/lib/supabase/server";

export type AdminAuthRole = Extract<PrivatePortalRole, "admin" | "owner">;

export type AdminAuthUser = Pick<User, "id" | "email"> & {
  role: AdminAuthRole;
};

const adminAllowedEmailsEnvName = "ADMIN_ALLOWED_EMAILS";

export class AdminAuthConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AdminAuthConfigurationError";
  }
}

export function isAdminAuthConfigurationError(
  error: unknown,
): error is AdminAuthConfigurationError {
  return error instanceof AdminAuthConfigurationError;
}

function getAdminEmailAllowlist() {
  const rawValue = process.env[adminAllowedEmailsEnvName];

  if (!rawValue?.trim()) {
    throw new AdminAuthConfigurationError(
      `Missing ${adminAllowedEmailsEnvName}. Set one or more owner/admin email addresses in server-only environment variables before using admin routes.`,
    );
  }

  const emails = rawValue
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (emails.length === 0) {
    throw new AdminAuthConfigurationError(
      `${adminAllowedEmailsEnvName} is configured but contains no valid email addresses.`,
    );
  }

  return new Set(emails);
}

function getAllowedAdminRole(user: User): AdminAuthRole | null {
  const role = getPrivatePortalRole(user);

  if (
    role &&
    (role === "owner" || role === "admin") &&
    canAccessPrivatePortal(role, "admin")
  ) {
    return role;
  }

  return null;
}

export async function getRequiredAdminUser(): Promise<AdminAuthUser> {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/");
  }

  const role = getAllowedAdminRole(user);

  if (role) {
    return {
      email: user.email,
      id: user.id,
      role,
    };
  }

  const normalizedEmail = user.email?.trim().toLowerCase();
  const allowedEmails = getAdminEmailAllowlist();

  if (!normalizedEmail || !allowedEmails.has(normalizedEmail)) {
    redirect("/");
  }

  return {
    email: user.email,
    id: user.id,
    role: "owner",
  };
}
