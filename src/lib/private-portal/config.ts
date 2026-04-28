export const privatePortalRoles = [
  "owner",
  "admin",
  "teacher",
  "student",
] as const;

export type PrivatePortalRole = (typeof privatePortalRoles)[number];

export const privatePortalKeys = ["admin", "teacher", "student"] as const;

export type PrivatePortalKey = (typeof privatePortalKeys)[number];

export const privatePortalRoutes: Record<PrivatePortalKey, string> = {
  admin: "/admin",
  student: "/student",
  teacher: "/teacher",
};

export const privatePortalAccess: Record<
  PrivatePortalKey,
  readonly PrivatePortalRole[]
> = {
  admin: ["owner", "admin"],
  student: ["owner", "admin", "student"],
  teacher: ["owner", "admin", "teacher"],
};

export const privatePortalRoleLabels: Record<PrivatePortalRole, string> = {
  admin: "Admin",
  owner: "Owner",
  student: "Student",
  teacher: "Teacher",
};

export const privatePortalLabels: Record<PrivatePortalKey, string> = {
  admin: "Admin",
  student: "Student",
  teacher: "Teacher",
};

export function isPrivatePortalRole(
  value: unknown,
): value is PrivatePortalRole {
  return (
    typeof value === "string" &&
    privatePortalRoles.includes(value as PrivatePortalRole)
  );
}

export function canAccessPrivatePortal(
  role: PrivatePortalRole,
  portal: PrivatePortalKey,
) {
  return privatePortalAccess[portal].includes(role);
}
