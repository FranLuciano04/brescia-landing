import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bresciagroup.com"),
  title: "Brescia Group · Content & Marketing para Turismo",
  description:
    "Estudio de contenido especializado en turismo. Creamos audiovisual y fotografía para hoteles boutique y destinos.",
  openGraph: {
    title: "Brescia Group · Content & Marketing para Turismo",
    description:
      "Estudio de contenido especializado en turismo. Creamos audiovisual y fotografía para hoteles boutique y destinos.",
    images: [{ url: "/villa-1-fireplace.jpeg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
