import { ImageResponse } from "next/og";

export const size = {
  height: 180,
  width: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#F8FCFD",
          display: "flex",
          height: "180px",
          justifyContent: "center",
          width: "180px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#108CA3",
            borderRadius: "50%",
            boxShadow: "0 12px 40px rgba(16, 140, 163, 0.28)",
            color: "white",
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            height: "132px",
            justifyContent: "center",
            lineHeight: 1,
            width: "132px",
          }}
        >
          V
        </div>
      </div>
    ),
    size,
  );
}
