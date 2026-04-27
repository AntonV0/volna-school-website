import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#108CA3",
          borderRadius: "50%",
          color: "white",
          display: "flex",
          fontSize: 22,
          fontWeight: 800,
          height: "32px",
          justifyContent: "center",
          lineHeight: 1,
          width: "32px",
        }}
      >
        V
      </div>
    ),
    size,
  );
}
