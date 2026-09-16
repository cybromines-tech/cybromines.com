import { ImageResponse } from "next/og";
import { LogoMark, LogoWordmark } from "@/components/site/logo";
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
          background: "#111015",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(225,57,70,0.32), transparent 45%), radial-gradient(circle at 85% 100%, rgba(255,255,255,0.08), transparent 45%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <LogoMark width={70} height={40} dotColor="#FFFFFF" />
          <LogoWordmark width={264} height={22} color="#FAFAFA" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#FF5C69",
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
