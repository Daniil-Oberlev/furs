import type React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ConsultationForm } from '@/app/components/forms'

import { TypographyP } from '@/components/ui/typography'

interface ProductActionsProps {
  purchaseLink: string
}

export const ProductActions = ({ purchaseLink }: ProductActionsProps) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link
          href={purchaseLink}
          target='_blank'
          className='flex-1'
        >
          <Button
            size='lg'
            className='w-full bg-amber-700 hover:bg-amber-800 text-stone-100 px-8 py-4 font-semibold'
          >
            Купить в ЦУМе
          </Button>
        </Link>
        <div className='flex-1'>
          <ConsultationForm buttonText='Записаться на примерку' />
        </div>
      </div>
      <div className='text-center'>
        <TypographyP className='text-lg'>
          Бесплатная доставка по Москве • Гарантия 2 года • Индивидуальная подгонка
        </TypographyP>
      </div>
    </div>
  )
}
