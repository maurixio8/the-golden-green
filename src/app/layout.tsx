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

export const metadata: Metadata = {
  metadataBase: new URL("https://thegoldengreen.co"),
  title: "Distribuidora Aguacate — The Golden Green | Aguacate fresco en Cajicá",
  description:
    "Pedidos por kilos de aguacate Papelillo, Hass y plátano fresco para recoger en bodega en Cajicá. Atención directa por WhatsApp.",
  openGraph: {
    title: "Distribuidora Aguacate — The Golden Green",
    description:
      "Aguacate y plátano fresco por kilos para recoger en bodega en Cajicá.",
    url: "https://thegoldengreen.co",
    siteName: "The Golden Green",
    images: [
      {
        url: "/images/bulto-abierto.jpg",
        width: 1200,
        height: 630,
        alt: "Bulto abierto con aguacates frescos",
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
  themeColor: "#0E0E0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
