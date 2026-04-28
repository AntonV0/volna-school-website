import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootDocument } from "@/components/layout/root-document";
import { SiteShell } from "@/components/layout/site-shell";
import { siteContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const socialImageUrl = new URL("/og", siteUrl).toString();

export const metadata: Metadata = {
  ...siteContent.en.metadata,
  applicationName: "Volna School",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/ru",
    },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    description: siteContent.en.metadata.description,
    images: [socialImageUrl],
    locale: "en",
    siteName: "Volna School",
    title: siteContent.en.metadata.title,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    description: siteContent.en.metadata.description,
    images: [socialImageUrl],
    title: siteContent.en.metadata.title,
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootDocument locale="en">
      <SiteShell locale="en">{children}</SiteShell>
    </RootDocument>
  );
}
