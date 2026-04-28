import { ImageResponse } from "next/og";

export function GET() {
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
          <div
            style={{
              alignItems: "center",
              background: "#108CA3",
              borderRadius: "50%",
              boxShadow: "0 24px 60px rgba(16, 140, 163, 0.28)",
              color: "white",
              display: "flex",
              flexShrink: 0,
              fontSize: 108,
              fontWeight: 800,
              height: 180,
              justifyContent: "center",
              lineHeight: 1,
              width: 180,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
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
