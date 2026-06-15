import { ogImage, ogSize, ogContentType } from "@/lib/seo/og-template";

export const dynamic = "force-static";
export const alt = "Cybromines Email Agent — AI lead detection from your inbox";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Email Agent · CEA",
    title: "Turn your inbox into a lead pipeline",
  });
}
