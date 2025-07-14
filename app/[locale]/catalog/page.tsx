'use client'

import { ArrowLeft } from 'lucide-react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductCard } from '@/components/ui/ProductCard'

import { BREADCRUMBS_ITEMS } from './constants'
import { productData } from '@/shared/Products'

const products = Object.entries(productData).map(([id, product]) => ({
  id: Number(id),
  name: product.name,
  furType: product.furType,
  price: product.price,
  image: product.images[0],
  category: product.category,
  purchaseLink: product.purchaseLink
}))

export default function CatalogPage() {
  return (
    <div className='min-h-screen bg-stone-100'>
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumbs items={BREADCRUMBS_ITEMS} />

        <PageHeader
          title='КОЛЛЕКЦИЯ ОСЕНЬ-ЗИМА 25/26'
          description='Новая коллекция эксклюзивных шуб из натурального меха высочайшего качества'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {products.map(product => (
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
        <div className='text-center'>
          <LinkButton
            href='/'
            text='Вернуться на главную'
            variant='amberOutline'
            icon={<ArrowLeft />}
            iconPosition='left'
            className='bg-white'
          />
        </div>
      </div>
    </div>
  )
}
