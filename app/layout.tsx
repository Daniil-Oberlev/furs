import type { Metadata } from 'next'
import type React from 'react'

import './globals.css'
import { Providers } from './providers'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SABLEFUR',
    description: 'Luxurious fur coats',
    metadataBase: new URL('https://sablefur.ru'),
    openGraph: {
      title: 'SABLEFUR',
      description: 'Luxurious fur coats',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SABLEFUR',
      description: 'Luxurious fur coats'
    },
    other: {
      'viewport': 'width=device-width, initial-scale=1',
      'theme-color': '#cfaf80'
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='preconnect'
          href='https://st-cdn.tsum.com'
        />
        <link
          rel='dns-prefetch'
          href='https://st-cdn.tsum.com'
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
