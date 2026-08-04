import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/home/AuroraBackground";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newzonix.com"),
  title: {
    default: "NEWZONIX — The AI Business Platform",
    template: "%s | NEWZONIX",
  },
  description:
    "NEWZONIX helps businesses launch, automate, and scale using AI — governed workflows, unified data, and enterprise-grade controls in one platform.",
  keywords: [
    "AI business platform",
    "business automation",
    "AI workflows",
    "enterprise AI",
    "operations automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEWZONIX — The AI Business Platform",
    description:
      "Launch, automate, and scale your business with AI that runs it. Governed workflows, unified data, and enterprise-grade controls.",
    url: "https://www.newzonix.com",
    siteName: "NEWZONIX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEWZONIX — The AI Business Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWZONIX — The AI Business Platform",
    description:
      "Launch, automate, and scale your business with AI that runs it.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEWZONIX",
    url: "https://www.newzonix.com",
    logo: "https://www.newzonix.com/favicon.svg",
    description:
      "NEWZONIX is an AI business platform helping companies launch, automate, and scale operations with governed AI workflows.",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEWZONIX",
    url: "https://www.newzonix.com",
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-white px-5 py-3 text-[14px] font-semibold text-midnight-950 opacity-0 transition-all duration-200 focus:translate-y-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <AuroraBackground />
        <Header />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
