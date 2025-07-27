import { memo } from 'react'
import Link from 'next/link'

import type { INavLinks } from './types'
import type { NavItem } from '@/config/types'

export const NavLinks = memo<INavLinks>(
  ({
    links,
    onLinkClick,
    className = 'flex space-x-8 lg:space-x-8 flex-col lg:flex-row'
  }: INavLinks) => (
    <ul className={className}>
      {links.map((link: NavItem) => (
        <li key={link.name}>
          {link.url ? (
            <Link
              href={link.url}
              className='text-[#cfaf80] hover:text-gold transition-colors duration-200 font-cormorant text-xl'
              onClick={onLinkClick}
            >
              {link.name}
            </Link>
          ) : (
            <button
              className='text-[#cfaf80] hover:text-gold transition-colors duration-200 font-cormorant text-xl'
              onClick={() => {
                link.onClick?.()
                onLinkClick?.()
              }}
              type='button'
            >
              {link.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  )
)

NavLinks.displayName = 'NavLinks'
