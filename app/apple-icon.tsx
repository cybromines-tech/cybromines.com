import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/site/logo";

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
          background: "#111015",
        }}
      >
        <LogoMark width={132} height={75} dotColor="#FFFFFF" />
      </div>
    ),
    { ...size },
  );
}
