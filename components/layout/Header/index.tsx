'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Menu, X } from 'lucide-react'

import { Logo } from '@/components/ui/Logo'
import { NavLinks } from './components'
import { ContactsModal } from './components/ContactsModal'

import { useClickOutside } from '@/hooks/useClickOutside'

import { ALL_NAV_LINKS, LEFT_NAV_LINKS, RIGHT_NAV_LINKS } from './components/NavLinks/constants'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const openContactsModal = useCallback(() => {
    setIsContactsModalOpen(true)
  }, [])

  const closeContactsModal = useCallback(() => {
    setIsContactsModalOpen(false)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const modifiedRightNavLinks = useMemo(
    () =>
      RIGHT_NAV_LINKS.map(link =>
        link.action === 'openContacts' ? { ...link, onClick: openContactsModal } : link
      ),
    [openContactsModal]
  )

  const modifiedAllNavLinks = useMemo(
    () =>
      ALL_NAV_LINKS.map(link =>
        link.action === 'openContacts' ? { ...link, onClick: openContactsModal } : link
      ),
    [openContactsModal]
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) closeMenu()
        if (isContactsModalOpen) closeContactsModal()
      }
    },
    [isMenuOpen, isContactsModalOpen, closeMenu, closeContactsModal]
  )

  useEffect(() => {
    const shouldPreventScroll = isMenuOpen || isContactsModalOpen
    document.body.style.overflow = shouldPreventScroll ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen, isContactsModalOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const mobileMenuRef = useClickOutside<HTMLDivElement>(closeMenu, { enabled: isMenuOpen })

  return (
    <>
      <header className='bg-velvet border-b border-gold sticky top-0 z-40'>
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
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type='button'
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
          ref={mobileMenuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className='container mx-auto px-4 py-4'>
            <NavLinks
              links={modifiedAllNavLinks}
              onLinkClick={closeMenu}
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
