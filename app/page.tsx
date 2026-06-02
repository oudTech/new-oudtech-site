import type { Metadata } from "next";
import { generateWebPageSchema } from "@/lib/structured-data";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GrowthSection from "@/components/sections/GrowthSection";
import AcademySection from "@/components/sections/AcademySection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://oudtechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "OudTech — Modern Technology Solutions",
  description:
    "We design and engineer scalable digital products for ambitious companies. Explore our services in product strategy, UX, full-stack engineering, and AI integration.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OudTech - Modern Technology Solutions",
    description:
      "We design and engineer scalable digital products for ambitious companies. Explore our services in product strategy, UX, full-stack engineering, and AI integration.",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "OudTechnologies",
      },
    ],
    type: "website",
    url: "/",
  },
};

export default function HomePage() {
  const schema = generateWebPageSchema({
    url: BASE_URL,
    name: "OudTech — Modern Technology Solutions",
    description:
      "Oud Technologies builds practical digital solutions — product design, web and mobile development, and SEO for modern businesses.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GrowthSection />
      <AcademySection />
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}
