import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Cybromines — Enterprise software, reimagined with AI agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default brand OG image, generated as a static PNG at build time.
export default function OgImage() {
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
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top bar */}
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

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FAFAFA",
            }}
          >
            <span>Enterprise software,&nbsp;</span>
            <span>reimagined with&nbsp;</span>
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI agents
            </span>
          </div>
          <div style={{ fontSize: "28px", color: "#A1A1AA", maxWidth: "900px" }}>
            One platform for your ERP, fintech, and automation — built for GCC
            enterprises.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#71717A",
          }}
        >
          <div>cybromines.com</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>ERP</span>
            <span>AI Agents</span>
            <span>WhatsApp CRM</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
