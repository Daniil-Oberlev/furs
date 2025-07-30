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
            asChild
            variant='amber'
            className='w-full font-cormorant text-lg py-3 rounded-lg shadow-md transition-colors duration-200'
          >
            <a
              href={purchaseLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Купить в ЦУМе
            </a>
          </Button>
        </Link>
        <div className='flex-1'>
          <ConsultationForm
            buttonText='Записаться на примерку'
            variant='amber'
          />
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
