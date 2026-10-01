"use client";

// Keep the last-resort fallback independent of the layout, fonts and shared components.
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <head>
        <title>Unable to load page | Volna School</title>
        <meta name="robots" content="noindex" />
      </head>
      <body
        style={{
          margin: 0,
          background: "#fbfbf8",
          color: "#123142",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <main
          style={{
            maxWidth: 640,
            margin: "auto",
            padding: "64px 24px",
            lineHeight: 1.7,
          }}
        >
          <p style={{ color: "#07566d", fontWeight: 700 }}>Volna School</p>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", lineHeight: 1.15 }}>
            We couldn’t load this page.
          </h1>
          <p>
            Please try again, or return to the homepage. If the problem
            continues, contact the school for help.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "center",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                font: "inherit",
                padding: "12px 22px",
                background: "#b42e2e",
                color: "white",
                border: 0,
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* A full navigation recovers even when the client router/layout has failed. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" style={{ color: "#07566d", padding: "12px 0" }}>
              Return home
            </a>
          </div>
          <p>
            <a href="mailto:info@volnaschool.com" style={{ color: "#07566d" }}>
              Email the school
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
