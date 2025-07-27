import Link from 'next/link'

import Image from 'next/image'

export const Logo = () => {
  return (
    <Link
      href='/'
      className='text-[#cfaf80] tracking-wider'
    >
      <Image
        src='./logo.png'
        width={150}
        height={128}
        alt='логотип'
      />
    </Link>
  )
}
