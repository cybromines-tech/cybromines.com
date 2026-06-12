/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cybromines.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "out",
  trailingSlash: true,
  exclude: ["/dev/components", "/dev/components/"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/dev"] }],
    additionalSitemaps: [`${siteUrl.replace(/\/$/, "")}/sitemap.xml`],
  },
  transform: async (config, path) => {
    // Priority + changefreq heuristics by route depth.
    const isHome = path === "/";
    const isBlogPost = path.startsWith("/blog/") && path !== "/blog/";
    return {
      loc: path,
      changefreq: isBlogPost ? "monthly" : "weekly",
      priority: isHome ? 1.0 : isBlogPost ? 0.6 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
