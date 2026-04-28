"use client";

import Script from "next/script";

const turnstileSiteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

export function TurnstileWidget() {
  if (!turnstileSiteKey) {
    return null;
  }

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="cf-turnstile" data-sitekey={turnstileSiteKey} />
    </>
  );
}
