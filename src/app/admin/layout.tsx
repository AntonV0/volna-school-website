import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootDocument } from "@/components/layout/root-document";
import "../globals.css";

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: "Admin | Volna School",
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
