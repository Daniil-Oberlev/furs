import { Star } from 'lucide-react'
import { TypographyH1 } from '@/components/ui/typography'

interface ProductInfoProps {
  name: string
  price: string
}

export const ProductInfo = ({ name, price }: ProductInfoProps) => {
  return (
    <div>
      <TypographyH1 className='text-2xl mb-3'>{name}</TypographyH1>
      <div className='flex items-center space-x-4 mb-4'>
        <div className='flex items-center space-x-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className='h-4 w-4 fill-amber-600 text-amber-600'
            />
          ))}
        </div>
        <span className='text-stone-600 text-base font-inter'>(47 отзывов)</span>
      </div>
      <div className='text-3xl font-playfair font-light mb-4'>{price}</div>
    </div>
  )
}
