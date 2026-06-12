import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thegoldengreen.co"),
  title: "The Golden Green | Aguacate y plátano fresco en Cajicá",
  description:
    "Pedidos por kilos de aguacate y plátano fresco para recoger en bodega en Cajicá. Atención directa por WhatsApp.",
  openGraph: {
    title: "The Golden Green",
    description:
      "Aguacate y plátano fresco por kilos para recoger en bodega en Cajicá.",
    url: "https://thegoldengreen.co",
    siteName: "The Golden Green",
    images: [
      {
        url: "/images/selected/bulto-abierto.jpg",
        width: 1200,
        height: 630,
        alt: "Bulto abierto con aguacates frescos en The Golden Green",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060906",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
