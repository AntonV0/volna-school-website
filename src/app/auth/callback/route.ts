import { NextResponse, type NextRequest } from "next/server";

import { isMissingSupabasePublicEnv } from "@/lib/private-portal/auth";
import {
  getPrivateLoginPath,
  sanitizePrivateNextPath,
} from "@/lib/private-portal/config";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = request.nextUrl;
  const code = requestUrl.searchParams.get("code");
  const nextPath = sanitizePrivateNextPath(requestUrl.searchParams.get("next"));

  if (!code) {
    return NextResponse.redirect(
      new URL(`${getPrivateLoginPath(nextPath)}&status=error`, requestUrl),
    );
  }

  let supabase;

  try {
    supabase = await createClient();
  } catch (error) {
    if (isMissingSupabasePublicEnv(error)) {
      return NextResponse.redirect(
        new URL(
          `${getPrivateLoginPath(nextPath)}&status=config-error`,
          requestUrl,
        ),
      );
    }

    throw error;
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL(`${getPrivateLoginPath(nextPath)}&status=error`, requestUrl),
    );
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl));
}
