'use client'

import { ArrowLeft } from 'lucide-react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductCard } from '@/components/ui/ProductCard'

import { BREADCRUMBS_ITEMS } from './constants'
import { ROUTES } from '@/config/routes'
import { VisitSection } from '@/components/sections'

import { products } from './constants'

export default function CatalogPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <Breadcrumbs
        items={BREADCRUMBS_ITEMS}
        className=''
      />

      <PageHeader
        title='КОЛЛЕКЦИЯ ОСЕНЬ-ЗИМА 25/26'
        description='Новая коллекция эксклюзивных шуб из натурального меха высочайшего качества'
        className='bg-stone-800 py-16 rounded mb-16'
      >
        <ConsultationButton
          variant='amber'
          size='lg'
        >
          Записаться на примерку
        </ConsultationButton>
      </PageHeader>

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

      <VisitSection hideCatalogButton />

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
  )
}
