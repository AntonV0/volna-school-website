import localFont from "next/font/local";
import type { ReactNode } from "react";

import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import type { Locale } from "@/lib/i18n/config";

const geistSans = localFont({
  src: "../../assets/fonts/Geist.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../../assets/fonts/GeistMono.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

type RootDocumentProps = {
  children: ReactNode;
  locale: Locale;
};

export function RootDocument({ children, locale }: RootDocumentProps) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      lang={locale}
    >
      <body className="min-h-full">
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
