import Link from "next/link";

const adminNavItems = [
  {
    href: "/admin",
    label: "Overview",
  },
  {
    href: "/admin/trial-registrations",
    label: "Trial registrations",
  },
] as const;

type AdminNavigationProps = {
  activePath: (typeof adminNavItems)[number]["href"];
};

export function AdminNavigation({ activePath }: AdminNavigationProps) {
  return (
    <nav
      aria-label="Admin sections"
      className="flex flex-wrap gap-2 border-b border-white/10 py-4"
    >
      {adminNavItems.map((item) => {
        const isActive = item.href === activePath;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md border px-3 py-2 text-sm font-medium transition ${
              isActive
                ? "border-[#72d7df]/60 bg-[#72d7df]/14 text-white"
                : "border-white/10 bg-white/[0.03] text-[#c3d7df] hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            }`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
