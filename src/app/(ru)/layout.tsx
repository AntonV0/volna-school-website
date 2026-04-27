import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootDocument } from "@/components/layout/root-document";
import { SiteShell } from "@/components/layout/site-shell";
import { siteContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  ...siteContent.ru.metadata,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/ru",
    languages: {
      en: "/",
      ru: "/ru",
    },
  },
};

export default function RussianRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootDocument locale="ru">
      <SiteShell locale="ru">{children}</SiteShell>
    </RootDocument>
  );
}
