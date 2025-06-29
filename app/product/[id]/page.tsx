'use client'

import type React from 'react'
import { useParams } from 'next/navigation'

import { ArrowLeft } from 'lucide-react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import {
  ProductActions,
  ProductDetails,
  ProductImageGallery,
  ProductInfo,
  SimilarProducts
} from './components'
import { LinkButton } from '@/components/ui/LinkButton'

import { productData } from '@/shared/Products'

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = productData[productId]

  const BREADCRUMBS_ITEMS = [
    { text: 'Главная', href: '/' },
    { text: 'Каталог', href: '/catalog' },
    { text: product.name }
  ]

  const similarProducts = Object.entries(productData)
    .filter(([id]) => Number(id) !== productId)
    .map(([id, product]) => ({
      id: Number(id),
      name: product.name,
      furType: product.furType,
      price: product.price,
      image: product.images[0],
      category: product.category,
      purchaseLink: product.purchaseLink
    }))

  if (!product) {
    return <div>Товар не найден</div>
  }

  return (
    <div className='min-h-screen bg-stone-100'>
      <div className='container mx-auto px-4 py-6'>
        <Breadcrumbs items={BREADCRUMBS_ITEMS} />
        <div className='grid lg:grid-cols-2 gap-12'>
          <ProductImageGallery
            images={product.images}
            category={product.category}
            productName={product.name}
          />
          <div className='space-y-6'>
            <ProductInfo
              name={product.name}
              price={product.price}
            />
            <ProductDetails
              description={product.description}
              details={product.details}
            />
            <ProductActions purchaseLink={product.purchaseLink} />
          </div>
        </div>
        <SimilarProducts products={similarProducts} />
        <div className='mt-8 text-center'>
          <LinkButton
            href='/catalog'
            text='Вернуться к каталогу'
            variant='amberOutline'
            icon={<ArrowLeft />}
            iconPosition='left'
          />
        </div>
      </div>
    </div>
  )
}
