'use client'

import { ArrowLeft } from 'lucide-react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductCard } from '@/components/ui/ProductCard'

import { BREADCRUMBS_ITEMS } from './constants'
import { productData } from '@/shared/Products'
import { ROUTES } from '@/config/routes'

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
    <>
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumbs items={BREADCRUMBS_ITEMS} />

        <PageHeader
          title='КОЛЛЕКЦИЯ ОСЕНЬ-ЗИМА 25/26'
          description='Новая коллекция эксклюзивных шуб из натурального меха высочайшего качества'
        />

        <div className='text-center mb-12'>
          <ConsultationButton
            variant='amber'
            size='lg'
          >
            Записаться на примерку
          </ConsultationButton>
        </div>

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
        <div className='mt-8 text-center'>
          <LinkButton
            href={ROUTES.HOME}
            text='Вернуться на главную'
            variant='amberOutline'
            icon={<ArrowLeft />}
            iconPosition='left'
            className='bg-white'
          />
        </div>
      </div>
    </>
  )
}
