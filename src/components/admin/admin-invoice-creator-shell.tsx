import type { AdminAuthUser } from "@/lib/admin/auth";
import { AdminNavigation } from "@/components/admin/admin-navigation";
import { getInternalInvoiceChecklist } from "@/lib/admin/operations";
import { signOutPrivatePortalUser } from "@/lib/private-portal/actions";

const decisionGates = [
  {
    label: "Invoice numbers",
    status: "Needs reservation policy",
  },
  {
    label: "Sending",
    status: "Email provider not chosen",
  },
  {
    label: "Payment matching",
    status: "Manual record first",
  },
  {
    label: "Spreadsheet import",
    status: "Private review needed",
  },
] as const;

type AdminInvoiceCreatorShellProps = {
  setupNeeded?: boolean;
  user: AdminAuthUser;
};

export function AdminInvoiceCreatorShell({
  setupNeeded = false,
  user,
}: AdminInvoiceCreatorShellProps) {
  const signedInLabel = user.email ? "Signed in" : "Authenticated session";
  const checklist = getInternalInvoiceChecklist();

  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Invoice creator
            </h1>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="break-all rounded-md border border-[#72d7df]/35 bg-[#15303b] px-4 py-3 text-sm text-[#d8f7f9]">
              {signedInLabel}
            </div>
            {setupNeeded ? null : (
              <form action={signOutPrivatePortalUser}>
                <button
                  className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-[#d8f7f9] transition hover:border-white/30 hover:bg-white/[0.06]"
                  type="submit"
                >
                  Sign out
                </button>
              </form>
            )}
          </div>
        </header>

        <AdminNavigation activePath="/admin/invoices" />

        <section className="grid gap-5 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#72d7df]">
              First safe invoice slice
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal">
              Draft workflow only
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c3d7df]">
              {setupNeeded
                ? "Supabase Auth and admin access are not configured, so this invoice area is closed and no billing data is shown."
                : "This page defines the internal invoice workflow boundary before real billing records, invoice numbers, email sending, or imported spreadsheet data are connected."}
            </p>
          </div>

          <div className="rounded-md border border-[#f1c66b]/30 bg-[#2d2a1d] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
            <h2 className="text-lg font-semibold tracking-normal text-[#ffe5a6]">
              Not live billing
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#f8e7b8]">
              No invoice records are created, sent, emailed, exported, or linked
              to payments from this shell. The real creator should only be
              activated after numbering, review, and retention rules are agreed.
            </p>
          </div>
        </section>

        <section className="grid gap-5 pb-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-md border border-white/10 bg-[#122734] p-6">
            <h2 className="text-lg font-semibold tracking-normal">
              Internal workflow checklist
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-[#c3d7df]">
              {checklist.map((item, index) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#72d7df]/14 text-xs font-semibold text-[#72d7df]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-normal">
              Decision gates
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {decisionGates.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.035] p-4"
                  key={item.label}
                >
                  <h3 className="text-base font-semibold tracking-normal">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-[#b9cdd5]">{item.status}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
