import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cybromines",
    short_name: "Cybromines",
    description:
      "AI-native enterprise software — ERP suite, AI agents, and WhatsApp CRM.",
    start_url: "/",
    display: "standalone",
    background_color: "#111015",
    theme_color: "#111015",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
      { src: "/brand/cybromines-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
