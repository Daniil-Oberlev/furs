'use client'

import { Logo, Navigation, ShortAddress } from './components'

export const Header = () => {
  return (
    <header className='bg-stone-100/95 backdrop-blur-sm border-b border-amber-600/20 sticky top-0 z-40'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Logo />
        <Navigation />
        <ShortAddress />
      </div>
    </header>
  )
}
