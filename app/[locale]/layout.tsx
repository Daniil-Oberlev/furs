import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'
import '../globals.css'
import { Head } from '../Head'
import { Footer, Header } from '@/components/layout'
import Loading from '../loading'
import { COMPANY_NAME } from '@/shared/Address'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
})

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}): Promise<Metadata> {
  let messages
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default
  } catch {
    notFound()
  }

  return {
    title: messages.metadata?.title || 'SABLEFUR - Эксклюзивные шубы из натурального меха | Москва',
    description:
      messages.metadata?.description || 'Роскошные шубы из соболя, норки, каракульчи и кашемира.',
    keywords:
      messages.metadata?.keywords ||
      'шубы, меховые изделия, соболь, норка, каракульча, кашемир, индивидуальный пошив, примерка шуб, Москва, SABLEFUR',
    authors: [{ name: COMPANY_NAME }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: params.locale === 'ru' ? 'ru_RU' : 'en_US',
      url: `https://sablefur.ru/${params.locale}`,
      siteName: COMPANY_NAME,
      title: messages.metadata?.title || `${COMPANY_NAME} - Эксклюзивные шубы из натурального меха`,
      description:
        messages.metadata?.description || 'Роскошные шубы из соболя, норки, каракульчи и кашемира.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: messages.metadata?.imageAlt || 'SABLEFUR - Эксклюзивные шубы'
        }
      ]
    },
    alternates: {
      canonical: `https://sablefur.ru/${params.locale}`
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <html lang={params.locale}>
      <Head />
      <body
        className={`${inter.className} ${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}
      >
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          <Header />
          <Loading />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
