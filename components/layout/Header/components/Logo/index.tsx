import Link from 'next/link'

import { COMPANY_NAME } from '@/shared/Address'

export const Logo = () => {
  return (
    <Link
      href='/'
      className='text-2xl font-playfair font-bold text-amber-700 tracking-wider'
    >
      {COMPANY_NAME}
    </Link>
  )
}
