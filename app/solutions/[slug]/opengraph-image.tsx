import { getSolution, solutionSlugs } from "@/lib/data/solutions";
import { ogImage, ogSize, ogContentType } from "@/lib/seo/og-template";

export const dynamic = "force-static";
export const alt = "Cybromines solution";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = getSolution(slug);
  return ogImage({
    eyebrow: sol ? `${sol.category} · ${sol.shortName}` : "Solutions",
    title: sol?.tagline ?? "Every system your business runs on",
  });
}
