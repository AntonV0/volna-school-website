"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};

export function TurnstileWidget({
  attempt,
  onReadyChange,
}: {
  attempt: number;
  onReadyChange: (ready: boolean) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [retry, setRetry] = useState(0);
  const [message, setMessage] = useState("Loading security check…");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!siteKey || !loaded || !container.current) return;
    const api = (window as Window & { turnstile?: TurnstileApi }).turnstile;
    if (!api) return;
    onReadyChange(false);
    const id = api.render(container.current, {
      sitekey: siteKey,
      size: "flexible",
      callback: () => {
        onReadyChange(true);
        setFailed(false);
        setMessage("Security check complete.");
      },
      "expired-callback": () => {
        onReadyChange(false);
        setMessage("Security check expired. Please complete the fresh check.");
      },
      "error-callback": () => {
        onReadyChange(false);
        setFailed(true);
        setMessage(
          "Security check could not finish. Retry or contact us using the details on this page.",
        );
      },
    });
    return () => api.remove(id);
  }, [attempt, loaded, retry, onReadyChange]);

  if (!siteKey) return null;
  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setLoaded(true)}
        onError={() => {
          setFailed(true);
          setMessage(
            "Security check could not load. Reload this page or contact us directly.",
          );
        }}
      />
      <div ref={container} className="min-w-0" />
      <p className="mt-2 text-sm text-muted-foreground" role="status">
        {message}
      </p>
      {failed && loaded && (
        <button
          type="button"
          className="mt-2 min-h-11 text-sm font-semibold text-brand-teal underline underline-offset-4"
          onClick={() => {
            setFailed(false);
            setMessage("Loading a fresh security check…");
            setRetry((value) => value + 1);
          }}
        >
          Retry security check
        </button>
      )}
    </>
  );
}
