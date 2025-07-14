'use client'

import { Phone } from 'lucide-react'

import { Logo, Navigation } from './components'

import { COMPANY_PHONE } from '@/shared/Address'

export const Header = () => {
  return (
    <header className='bg-stone-100/95 backdrop-blur-sm border-b border-amber-600/20 sticky top-0 z-40'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Logo />
        <Navigation />
        <address>
          <a
            href='tel:${COMPANY_PHONE}'
            className='flex items-center space-x-4'
          >
            <Phone className='h-5 w-5 text-amber-700' />
            <span className='text-stone-700 font-medium font-playfair text-lg'>
              {COMPANY_PHONE}
            </span>
          </a>
        </address>
      </div>
    </header>
  )
}
