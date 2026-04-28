"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { isMissingSupabasePublicEnv } from "@/lib/private-portal/auth";
import {
  getPrivateLoginPath,
  sanitizePrivateNextPath,
} from "@/lib/private-portal/config";
import { createClient } from "@/lib/supabase/server";

async function getRequestOrigin() {
  const headerStore = await headers();
  const origin = headerStore.get("origin");
  const host = headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto") ?? "https";

  if (origin) {
    return origin;
  }

  return host ? `${protocol}://${host}` : undefined;
}

export async function requestPrivatePortalMagicLink(formData: FormData) {
  const email = formData.get("email");
  const nextPath = sanitizePrivateNextPath(formData.get("next"));

  if (typeof email !== "string" || !email.trim()) {
    redirect(`${getPrivateLoginPath(nextPath)}&status=missing-email`);
  }

  let supabase;

  try {
    supabase = await createClient();
  } catch (error) {
    if (isMissingSupabasePublicEnv(error)) {
      redirect(`${getPrivateLoginPath(nextPath)}&status=config-error`);
    }

    throw error;
  }

  const origin = await getRequestOrigin();
  const emailRedirectTo = origin
    ? `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`
    : undefined;

  const { error } = await supabase.auth.signInWithOtp({
    email: email.trim(),
    options: {
      emailRedirectTo,
      shouldCreateUser: false,
    },
  });

  if (error) {
    redirect(`${getPrivateLoginPath(nextPath)}&status=error`);
  }

  redirect(`${getPrivateLoginPath(nextPath)}&status=sent`);
}

export async function signOutPrivatePortalUser() {
  const supabase = await createClient();

  await supabase.auth.signOut();
  redirect(`${getPrivateLoginPath()}&status=signed-out`);
}
