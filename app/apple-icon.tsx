import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090B",
        }}
      >
        <div
          style={{
            width: "112px",
            height: "112px",
            borderRadius: "28px",
            background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#09090B",
            fontSize: "72px",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size },
  );
}
