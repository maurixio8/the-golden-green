import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://thegoldengreen.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Distribuidora Aguacate — The Golden Green | Aguacate fresco en Cajicá",
    template: "%s | The Golden Green",
  },
  description:
    "Pedidos por kilos de aguacate Papelillo, Hass y plátano fresco para recoger en bodega en Cajicá. Atención directa por WhatsApp.",

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph / Facebook
  openGraph: {
    title: "Distribuidora Aguacate — The Golden Green",
    description:
      "Aguacate y plátano fresco por kilos para recoger en bodega en Cajicá. ¡Escríbenos por WhatsApp!",
    url: SITE_URL,
    siteName: "The Golden Green",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Distribuidora Aguacate — The Golden Green",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Distribuidora Aguacate — The Golden Green",
    description:
      "Aguacate y plátano fresco por kilos para recoger en bodega en Cajicá.",
    images: ["/images/og-image.jpg"],
  },

  // Icons
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/logo-horizontal.png", sizes: "180x180", type: "image/png" }],
  },

  // Robots
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <head>
        {/* Schema.org JSON-LD — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Golden Green — Distribuidora de Aguacate",
              image: `${SITE_URL}/images/logo-horizontal.png`,
              url: SITE_URL,
              telephone: "+57 324 209 5914",
              email: "mauriciobustamantegaravito@gmail.com",
              description:
                "Distribuidora de aguacate Papelillo, Hass y plátano fresco en Cajicá, Colombia. Pedidos por kilos para recoger en bodega.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cajicá",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "05:00",
                  closes: "16:00",
                },
              ],
              areaServed: "Cajicá, Cundinamarca, Colombia",
              hasWhatsApp: true,
              sameAs: [
                "https://wa.me/573242095914",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
