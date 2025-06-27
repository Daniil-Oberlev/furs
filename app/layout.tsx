import React from "react";
import type {Metadata} from "next";

import {Cormorant_Garamond, Inter, Playfair_Display} from "next/font/google";

import "./globals.css";

import {Head} from "./Head";
import {Footer, Header} from "@/components/layout";
import Loading from "./loading";

import {COMPANY_NAME} from "@/shared/Address";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SABLEFUR - Эксклюзивные шубы из натурального меха | Москва",
  description:
    "Роскошные шубы из соболя, норки, каракульчи и кашемира. Индивидуальный пошив, примерка в салоне. Более 25 лет опыта. Гарантия качества 2 года.",
  keywords:
    "шубы, меховые изделия, соболь, норка, каракульча, кашемир, индивидуальный пошив, примерка шуб, Москва, SABLEFUR",
  authors: [{name: COMPANY_NAME}],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://sablefur.ru",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} - Эксклюзивные шубы из натурального меха`,
    description:
      "Роскошные шубы из соболя, норки, каракульчи и кашемира. Индивидуальный пошив, примерка в салоне.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SABLEFUR - Эксклюзивные шубы",
      },
    ],
  },
  alternates: {
    canonical: "https://sablefur.ru",
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ru">
    <Head/>
    <body
      className={`${inter.className} ${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}
    >
    <Header/>
    <Loading/>
    <main>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}