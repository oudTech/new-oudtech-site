import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { playfairDisplay } from "@/lib/fonts";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueMontreal-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../public/fonts/NeueMontreal-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OudTech — Modern Technology Solutions",
    template: "%s | OudTech",
  },
  description:
    "OudTech delivers cutting-edge technology solutions — from product design to scalable engineering — for ambitious businesses.",
  keywords: ["technology", "software", "engineering", "design", "OudTech"],
  authors: [{ name: "OudTech", url: BASE_URL }],
  creator: "OudTech",
  publisher: "OudTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "OudTech",
    title: "OudTech — Modern Technology Solutions",
    description: "Cutting-edge technology solutions for ambitious businesses.",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "OudTech — Modern Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OudTech — Modern Technology Solutions",
    description: "Cutting-edge technology solutions for ambitious businesses.",
    images: ["/og-img.png"],
    creator: "@oudtech",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${neueMontreal.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
