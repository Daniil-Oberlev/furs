import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/config/routes'
import type { TImage } from '@/config/types'

interface ProductCardProps {
  id: number
  name: string
  furType: string[]
  price: string
  image: string | TImage
  category: string
  purchaseLink: string
  imageHeight?: string
  contentPadding?: string
  textSize?: string
  className?: string
}

export const ProductCard = memo(function ProductCard({
  id,
  name,
  furType,
  price,
  image,
  category,
  purchaseLink,
  imageHeight = 'h-96',
  contentPadding = 'p-6',
  textSize = 'text-lg',
  className
}: ProductCardProps) {
  return (
    <Link
      href={ROUTES.PRODUCT(id)}
      key={id}
      aria-label={`Перейти к продукту ${name}`}
    >
      <Card
        className={cn(
          'bg-white border-2 border-[#cfaf80] hover:border-[#cfaf80] transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer',
          className
        )}
      >
        <div className='relative overflow-hidden'>
          <Badge className='absolute top-3 left-3 z-10 bg-[#cfaf80] text-velvet text-sm font-cormorant px-3 py-1'>
            {category}
          </Badge>
          <Image
            src={typeof image === 'string' ? image : image.src}
            alt={typeof image === 'string' ? name : image.alt}
            width={400}
            height={500}
            loading='lazy'
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
            className={cn(
              'w-full object-contain group-hover:scale-105 transition-transform duration-300',
              imageHeight
            )}
          />
        </div>
        <CardContent className={cn('bg-velvet', contentPadding)}>
          <h3
            className={cn('font-medium text-truffle mb-1 leading-tight font-cormorant', textSize)}
          >
            {name}
          </h3>
          <p className='text-sm text-truffle mb-3 font-inter'>{furType.join(', ')}</p>
          <div className='flex items-center justify-between gap-2'>
            <span
              className={cn(
                'font-semibold text-truffle whitespace-nowrap flex-shrink-0 font-playfair',
                textSize
              )}
            >
              {price}
            </span>
            <Link
              href={purchaseLink}
              target='_blank'
              onClick={e => e.stopPropagation()}
            >
              <Button
                size='sm'
                className='bg-[#cfaf80] hover:bg-[#cfaf80] text-velvet px-3 py-2 text-base font-cormorant font-medium'
              >
                Купить
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})
