/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import { VOLNA_BRAND_LOGOS } from "@/lib/brand-assets";

export function GET(request: Request) {
  const logo = VOLNA_BRAND_LOGOS.en;
  const logoUrl = new URL(logo.src, request.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F8FCFD",
          color: "#123142",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#EEF8FB",
            border: "2px solid #C8E8EF",
            borderRadius: 24,
            display: "flex",
            gap: 44,
            height: "100%",
            padding: 64,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <img
              alt={logo.alt}
              height={119}
              src={logoUrl}
              style={{ objectFit: "contain" }}
              width={476}
            />
            <div
              style={{
                color: "#108CA3",
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Online Russian School
            </div>
            <div
              style={{
                color: "#123142",
                fontSize: 88,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Volna School
            </div>
            <div
              style={{
                color: "#607884",
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: 720,
              }}
            >
              A bilingual website rebuild scaffold for learners and families.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      height: 630,
      width: 1200,
    },
  );
}
