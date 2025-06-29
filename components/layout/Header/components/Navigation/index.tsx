import Link from 'next/link'

import { NAV_LINKS } from './constants'

export const Navigation = () => {
  return (
    <nav>
      <ul className='hidden md:flex space-x-8'>
        {NAV_LINKS.map(link => (
          <li key={link.url}>
            <Link href={link.url}>
              <span className='text-stone-700 hover:text-amber-700 transition-colors font-cormorant text-xl'>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
