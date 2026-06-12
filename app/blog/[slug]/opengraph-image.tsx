import { ImageResponse } from "next/og";
import { getPost, getPublishedSlugs } from "@/lib/blog";

export const dynamic = "force-static";
export const alt = "Cybromines blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export default async function BlogOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Cybromines Blog";
  const tag = post?.tags?.[0] ?? "Blog";

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
            "radial-gradient(circle at 18% 0%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 85% 100%, rgba(34,211,238,0.28), transparent 45%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "11px",
              background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
            }}
          />
          <div style={{ color: "#FAFAFA", fontSize: "28px", fontWeight: 600 }}>
            Cybromines
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#22D3EE",
            }}
          >
            {tag}
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: "24px", color: "#71717A" }}>cybromines.com/blog</div>
      </div>
    ),
    { ...size },
  );
}
