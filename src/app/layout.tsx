import type { Metadata, Viewport } from "next";
import { Funnel_Display, Ubuntu } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0040c1",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.legalName,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Energía renovable",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.legalName} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/nanasolar-blue.png", type: "image/png" },
    ],
    apple: "/logos/nanasolar-blue.png",
  },
  manifest: "/manifest.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: "Nanasolar",
  url: site.url,
  logo: `${site.url}/logos/nanasolar-blue.png`,
  slogan: site.tagline,
  description: site.description,
  areaServed: { "@type": "Country", name: "México" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.whatsapp}`,
    contactType: "customer service",
    areaServed: "MX",
    availableLanguage: ["Spanish"],
  },
  sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.legalName,
  url: site.url,
  inLanguage: "es-MX",
  publisher: {
    "@type": "Organization",
    name: site.legalName,
    logo: { "@type": "ImageObject", url: `${site.url}/logos/nanasolar-blue.png` },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.legalName,
  image: `${site.url}/logos/nanasolar-blue.png`,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "México" },
  address: { "@type": "PostalAddress", addressCountry: "MX" },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Instalación de paneles solares",
      description:
        "Diseño, dimensionamiento e instalación de sistemas fotovoltaicos para residencias, comercios e industrias en México.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-MX"
      className={`${ubuntu.variable} ${funnelDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
