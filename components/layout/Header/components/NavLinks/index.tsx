import Link from 'next/link'
import { NavItem } from './types'

interface INavLinks {
  links: NavItem[]
  onLinkClick?: () => void
}

export const NavLinks = ({ links, onLinkClick }: INavLinks) => (
  <ul className='flex space-x-8 lg:space-x-8 flex-col lg:flex-row'>
    {links.map(link => (
      <li key={link.name}>
        {link.url ? (
          <Link
            href={link.url}
            className='text-stone-700 hover:text-amber-700 transition-colors duration-200 font-cormorant text-xl'
            onClick={onLinkClick}
          >
            {link.name}
          </Link>
        ) : (
          <button
            className='text-stone-700 hover:text-amber-700 transition-colors duration-200 font-cormorant text-xl'
            onClick={() => {
              link.onClick?.()
              onLinkClick?.()
            }}
          >
            {link.name}
          </button>
        )}
      </li>
    ))}
  </ul>
)
