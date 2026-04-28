import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export type AdminAuthUser = Pick<User, "id" | "email">;

export async function getRequiredAdminUser(): Promise<AdminAuthUser> {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/");
  }

  return {
    email: user.email,
    id: user.id,
  };
}
