import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ServiceWorker } from "../components/service-worker";
import "./globals.css";

/* =========================================
   FUENTES
   ========================================= */

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* =========================================
   CONFIGURACIÓN DEL SITIO
   ========================================= */

const SITE_URL = "https://aris-eternal-flowers.vercel.app";

const SITE_NAME = "Ari's Eternal Flowers";

const SITE_DESCRIPTION =
  "Ramos de flores eternas hechos a mano: rosas, girasoles, tulipanes, lámparas florales y creaciones personalizadas. Regalos que permanecen, momentos que perduran. Envíos locales y personalización a pedido.";

/* =========================================
   METADATA
   ========================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Flores que permanecen`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "flores eternas",
    "ramos eternos",
    "rosas eternas",
    "girasoles tejidos",
    "tulipanes eternos",
    "lámparas florales",
    "ramos personalizados",
    "regalos artesanales",
    "limpiapipas",
    "ramos temáticos",
    "Hot Wheels ramo",
    "Harry Potter ramo",
    "Ari's Eternal Flowers",
    "flores que duran",
    "regalos originales",
  ],

  authors: [{ name: "Ari's Eternal Flowers" }],
  creator: "Ari's Eternal Flowers",
  publisher: "Ari's Eternal Flowers",

  category: "shopping",
  applicationName: SITE_NAME,

  manifest: "/manifest.json",

  verification: {
    google: "7OZCOLgyHGKF0eIENsW6WJs8Vz29Cyx3YBF-15gJtTs",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: "Ari's Eternal Flowers",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    locale: "es_CU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Flores que permanecen`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ramo de flores eternas hechas a mano por Ari's Eternal Flowers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Flores que permanecen`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
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

  alternates: {
    canonical: SITE_URL,
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

/* =========================================
   VIEWPORT
   ========================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#6d1f3a" },
  ],
  colorScheme: "light",
};

/* =========================================
   LAYOUT
   ========================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
        <Analytics />
        <ServiceWorker />
      </body>
    </html>
  );
}
