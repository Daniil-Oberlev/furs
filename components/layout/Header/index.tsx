'use client'

import { useState, useEffect } from 'react'

import { Menu, X } from 'lucide-react'

import { Logo, NavLinks } from './components'
import { ContactsModal } from './components/ContactsModal'

import { ALL_NAV_LINKS, LEFT_NAV_LINKS, RIGHT_NAV_LINKS } from './components/NavLinks/constants'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const modifiedRightNavLinks = RIGHT_NAV_LINKS.map(link =>
    link.name === 'Контакты' ? { ...link, onClick: () => setIsContactsModalOpen(true) } : link
  )

  const modifiedAllNavLinks = ALL_NAV_LINKS.map(link =>
    link.name === 'Контакты' ? { ...link, onClick: () => setIsContactsModalOpen(true) } : link
  )

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) setIsMenuOpen(false)
        if (isContactsModalOpen) setIsContactsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMenuOpen, isContactsModalOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isContactsModalOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen, isContactsModalOpen])

  return (
    <>
      <header className='bg-stone-100/95 backdrop-blur-sm border-b border-amber-600/20 sticky top-0 z-40'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between relative'>
          <nav className='hidden lg:flex'>
            <NavLinks links={LEFT_NAV_LINKS} />
          </nav>

          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Logo />
          </div>

          <nav className='hidden lg:flex'>
            <NavLinks links={modifiedRightNavLinks} />
          </nav>

          <button
            className='lg:hidden text-stone-700 hover:text-amber-700 transition-colors'
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X
                className='w-6 h-6'
                strokeWidth={2}
              />
            ) : (
              <Menu
                className='w-6 h-6'
                strokeWidth={2}
              />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className='container mx-auto px-4 py-4'>
            <NavLinks
              links={modifiedAllNavLinks}
              onLinkClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      </header>

      <ContactsModal
        isOpen={isContactsModalOpen}
        setIsOpen={setIsContactsModalOpen}
      />
    </>
  )
}
