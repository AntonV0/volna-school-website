import { AdminNavigation } from "@/components/admin/admin-navigation";

export default function TrialRegistrationsLoading() {
  return (
    <main className="min-h-screen bg-[#0f1720] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#72d7df]">
              Volna School Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Trial registrations
            </h1>
          </div>
          <div className="h-11 w-48 rounded-md border border-[#72d7df]/20 bg-[#15303b]" />
        </header>

        <AdminNavigation activePath="/admin/trial-registrations" />

        <section className="grid gap-4 py-6 sm:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              className="h-28 rounded-md border border-white/10 bg-white/[0.035]"
              key={item}
            />
          ))}
        </section>

        <section className="grid gap-4 pb-10">
          {[0, 1].map((item) => (
            <div
              className="h-56 rounded-md border border-white/10 bg-white/[0.035]"
              key={item}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
