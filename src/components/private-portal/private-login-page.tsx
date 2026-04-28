import Link from "next/link";

import { requestPrivatePortalMagicLink } from "@/lib/private-portal/actions";
import {
  defaultPrivatePortalPath,
  sanitizePrivateNextPath,
} from "@/lib/private-portal/config";

const statusMessages: Record<
  string,
  { tone: "error" | "success"; text: string; title: string }
> = {
  "config-error": {
    text: "Supabase authentication environment variables are not configured yet.",
    title: "Configuration needed",
    tone: "error",
  },
  error: {
    text: "The sign-in link could not be sent. Check the email address or try again later.",
    title: "Sign-in failed",
    tone: "error",
  },
  "missing-email": {
    text: "Enter the email address connected to your private portal account.",
    title: "Email required",
    tone: "error",
  },
  sent: {
    text: "If this email has an approved account, a private sign-in link has been sent.",
    title: "Check your email",
    tone: "success",
  },
  "signed-out": {
    text: "You have been signed out of the private portal.",
    title: "Signed out",
    tone: "success",
  },
};

type PrivateLoginPageProps = {
  nextPath?: string | null;
  status?: string | null;
};

export function PrivateLoginPage({ nextPath, status }: PrivateLoginPageProps) {
  const safeNextPath = sanitizePrivateNextPath(nextPath ?? defaultPrivatePortalPath);
  const message = status ? statusMessages[status] : null;

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-10 sm:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              Volna School Portal
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Private sign in
            </h1>
            <p className="mt-4 text-base leading-7 text-[#c3d7df]">
              Request a secure email link for the approved admin, teacher, or
              student portal. Access is still controlled by Supabase roles and
              private route guards.
            </p>
            <Link
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-[#72d7df]/60 hover:bg-[#1a3b48]"
              href="/"
            >
              Back to website
            </Link>
          </div>

          <form
            action={requestPrivatePortalMagicLink}
            className="rounded-md border border-white/10 bg-[#122734] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:p-8"
          >
            <input name="next" type="hidden" value={safeNextPath} />
            <div>
              <label
                className="text-sm font-semibold text-[#e7f8fb]"
                htmlFor="portal-email"
              >
                Email address
              </label>
              <input
                autoComplete="email"
                className="mt-2 min-h-12 w-full rounded-md border border-white/15 bg-white px-4 py-3 text-base text-[#0f1720] outline-none transition placeholder:text-[#61727a] focus:border-[#72d7df] focus:ring-2 focus:ring-[#72d7df]/30"
                id="portal-email"
                name="email"
                placeholder="name@example.com"
                required
                type="email"
              />
            </div>

            {message ? (
              <div
                className={`mt-5 rounded-md border p-4 text-sm ${
                  message.tone === "success"
                    ? "border-[#72d7df]/35 bg-[#72d7df]/10 text-[#d8f7f9]"
                    : "border-[#f1c66b]/35 bg-[#f1c66b]/10 text-[#ffe5a6]"
                }`}
                role="status"
              >
                <p className="font-semibold">{message.title}</p>
                <p className="mt-1 leading-6">{message.text}</p>
              </div>
            ) : null}

            <button
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#ef3232] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(239,50,50,0.22)] transition hover:bg-[#c92222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef3232]"
              type="submit"
            >
              Send secure sign-in link
            </button>

            <p className="mt-4 text-sm leading-6 text-[#b9cdd5]">
              New accounts and roles are created by the school. This form does
              not create public self-service accounts.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
