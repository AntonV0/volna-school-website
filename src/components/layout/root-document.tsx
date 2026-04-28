import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import type { Locale } from "@/lib/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

type RootDocumentProps = {
  children: ReactNode;
  locale: Locale;
};

export function RootDocument({ children, locale }: RootDocumentProps) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      lang={locale}
    >
      <body className="min-h-full">
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
