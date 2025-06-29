import { ArrowRight } from 'lucide-react'
import { TypographyH2, TypographyP } from '@/components/ui/typography'

import { ProductCard } from '@/components/ui/ProductCard'

import { FEATURE_PRODUCTS } from './utils'
import { LinkButton } from '@/components/ui/LinkButton'

export const FeaturedSection = () => {
  return (
    <section
      id='catalog'
      className='py-24 bg-stone-50'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <TypographyH2 className='mb-4'>Избранные модели</TypographyH2>
          <TypographyP className='text-2xl'>Наши самые популярные шубы</TypographyP>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {FEATURE_PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              furType={product.furType}
              price={product.price}
              image={product.image}
              category={product.category}
              purchaseLink={product.purchaseLink}
            />
          ))}
        </div>
        <div className='text-center mt-12'>
          <LinkButton
            href='/catalog'
            text='Показать все товары'
            icon={<ArrowRight />}
            size='lg'
          />
        </div>
      </div>
    </section>
  )
}
