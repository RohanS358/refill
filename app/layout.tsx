import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { jakarta } from "./fonts";
import { site } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "critical care nutrition",
    "clinical nutrition Nepal",
    "nutraceutical company Nepal",
    "disease-specific metabolic nutrition",
    "amino acid formulations",
    "omega-3",
    "calcium supplements",
    "medical devices Nepal",
  ],
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  foundingDate: String(site.founded),
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "NP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <a
          href="#content"
          className="text-eyebrow fixed left-5 top-5 z-[100] -translate-y-24 bg-primary px-4 py-3 text-primary-foreground transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
