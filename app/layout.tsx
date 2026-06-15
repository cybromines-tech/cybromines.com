import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/site/theme-provider";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloatButton } from "@/components/site/whatsapp-float-button";
import { Analytics } from "@/components/site/analytics";
import { JsonLd } from "@/components/site/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/jsonld";
import { siteConfig, pageUrl } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  category: "technology",
  keywords: [
    "AI software house",
    "ERP system",
    "CRM system",
    "POS system",
    "inventory management software",
    "production management software",
    "property management software",
    "queue management system",
    "AI agents",
    "business process automation",
    "WhatsApp CRM",
    "custom software development",
    "enterprise software",
    "GCC software company",
  ],
  alternates: {
    canonical: pageUrl("/"),
    languages: { en: pageUrl("/"), "x-default": pageUrl("/") },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(siteConfig.googleSiteVerification
      ? { google: siteConfig.googleSiteVerification }
      : {}),
    ...(siteConfig.bingSiteVerification
      ? { other: { "msvalidate.01": siteConfig.bingSiteVerification } }
      : {}),
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    url: pageUrl("/"),
  },
  twitter: { card: "summary_large_image", site: "@cybromines", creator: "@cybromines" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FBFBFD" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {/* Mark JS as available before paint so CSS scroll-reveals only hide
            content when they can actually be revealed (no blank sections). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <JsonLd schema={[organizationSchema(), websiteSchema()]} />
          <a
            href="#main-content"
            className="sr-only rounded-btn focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-surface-elevated focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloatButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
