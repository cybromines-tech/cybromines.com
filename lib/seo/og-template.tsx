import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared branded OG-image template (1200×630), generated at build time.
 * Used by per-section opengraph-image routes for richer social share cards.
 */
export function ogImage({
  eyebrow,
  title,
  footer = "cybromines.com",
}: {
  eyebrow: string;
  title: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090B",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 88% 100%, rgba(34,211,238,0.28), transparent 45%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
            }}
          />
          <div style={{ color: "#FAFAFA", fontSize: "30px", fontWeight: 600 }}>
            Cybromines
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#22D3EE",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: "24px", color: "#71717A" }}>{footer}</div>
      </div>
    ),
    { ...ogSize },
  );
}
