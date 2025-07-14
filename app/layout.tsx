import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'SABLEFUR',
  description: 'Luxurious fur coats'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
