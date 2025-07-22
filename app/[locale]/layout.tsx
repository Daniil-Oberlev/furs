import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { ErrorBoundary } from 'react-error-boundary'

import '../globals.css'
import { Head } from '../Head'
import { Footer, Header } from '@/components/layout'
import Loading from '../loading'

import { COMPANY } from '@/config/constants'

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

const messagesMap: Record<string, () => Promise<any>> = {
  ru: () => import('@/messages/ru.json'),
  en: () => import('@/messages/en.json')
}

export async function generateMetadata({
  params
}: {
  params: { locale: string }
}): Promise<Metadata> {
  let messages
  try {
    messages = (await messagesMap[params.locale]()).default
  } catch {
    notFound()
  }

  const title =
    messages.metadata?.title || `${COMPANY.NAME} - Эксклюзивные шубы из натурального меха | Москва`
  const description =
    messages.metadata?.description || 'Роскошные шубы из соболя, норки, каракульчи и кашемира.'
  const keywords =
    messages.metadata?.keywords ||
    'шубы, меховые изделия, соболь, норка, каракульча, кашемир, индивидуальный пошив, примерка шуб, Москва, SABLEFUR'

  return {
    title,
    description,
    keywords,
    authors: [{ name: COMPANY.NAME }],
    creator: COMPANY.NAME,
    publisher: COMPANY.NAME,
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: params.locale === 'ru' ? 'ru_RU' : 'en_US',
      url: `${COMPANY.WEBSITE}/${params.locale}`,
      siteName: COMPANY.NAME,
      title,
      description
    },
    alternates: {
      canonical: `${COMPANY.WEBSITE}/${params.locale}`
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
    messages = (await messagesMap[params.locale]()).default
  } catch {
    notFound()
  }

  return (
    <html lang={params.locale}>
      <Head />
      <body
        className={`${inter.className} ${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}
      >
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <NextIntlClientProvider
            locale={params.locale}
            messages={messages}
          >
            <Header />
            <Loading />
            <main className='min-h-screen bg-stone-100'>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
