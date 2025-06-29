import Link from 'next/link'

import { TypographyH4 } from '@/components/ui/typography'
import { CATALOG_LINKS } from '@/components/layout/Footer/components/Catalog/constants'

export const Catalog = () => {
  return (
    <div>
      <TypographyH4 className='text-stone-200 mb-4'>Каталог</TypographyH4>
      <ul className='space-y-2 text-sm text-stone-400 font-inter'>
        {CATALOG_LINKS.map(link => (
          <li key={link.name}>
            <Link
              href={link.url}
              className='hover:text-amber-400 transition-colors'
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
