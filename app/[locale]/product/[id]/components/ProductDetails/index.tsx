import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Card, CardContent } from '@/components/ui/card'

import { IProduct } from '@/@types'

interface ProductDetailsProps {
  description: string
  details: IProduct['details']
}

export const ProductDetails = ({ description, details }: ProductDetailsProps) => {
  return (
    <div className='space-y-6'>
      <TypographyP className='font-sarif text-lg leading-relaxed'>{description}</TypographyP>
      <Card className='bg-white border-stone-200 shadow-sm'>
        <CardContent className='p-6'>
          <TypographyH3 className='text-lg mb-3'>Характеристики</TypographyH3>
          <div className='grid grid-cols-1 gap-2 text-base font-inter'>
            <div className='flex justify-between'>
              <span className='text-stone-600'>Материал:</span>
              <span className='text-stone-800'>{details.material}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-stone-600'>Подкладка:</span>
              <span className='text-stone-800'>{details.lining}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-stone-600'>Происхождение:</span>
              <span className='text-stone-800'>{details.origin}</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-stone-600'>Размеры:</span>
              <span className='text-stone-800'>{details.sizes}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
