import { getService, serviceSlugs } from "@/lib/data/services";
import { ogImage, ogSize, ogContentType } from "@/lib/seo/og-template";

export const dynamic = "force-static";
export const alt = "Cybromines service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const svc = getService(service);
  return ogImage({
    eyebrow: "Services",
    title: svc?.name ?? "Services",
  });
}
