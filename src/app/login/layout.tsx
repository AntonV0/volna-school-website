import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootDocument } from "@/components/layout/root-document";
import "../globals.css";

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: "Private Sign In | Volna School",
};

export default function LoginRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
