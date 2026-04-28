import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootDocument } from "@/components/layout/root-document";
import { SiteShell } from "@/components/layout/site-shell";
import { siteContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const socialImageUrl = new URL("/og", siteUrl).toString();

export const metadata: Metadata = {
  ...siteContent.ru.metadata,
  applicationName: "Volna School",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/ru",
    languages: {
      en: "/",
      ru: "/ru",
    },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    description: siteContent.ru.metadata.description,
    images: [socialImageUrl],
    locale: "ru",
    siteName: "Volna School",
    title: siteContent.ru.metadata.title,
    type: "website",
    url: `${siteUrl}/ru`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteContent.ru.metadata.description,
    images: [socialImageUrl],
    title: siteContent.ru.metadata.title,
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
