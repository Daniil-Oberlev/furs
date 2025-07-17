import type { Metadata } from 'next'
import type React from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'SABLEFUR',
  description: 'Luxurious fur coats'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
