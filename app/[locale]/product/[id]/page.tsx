'use client'

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
import { useProduct } from './hooks/useProduct'

import { ROUTES } from '@/config/routes'

export default function ProductPage() {
  const { product, BREADCRUMBS_ITEMS, similarProducts } = useProduct()

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
            href={ROUTES.CATALOG}
            variant='amberOutline'
            icon={<ArrowLeft />}
            iconPosition='left'
            text='Вернуться к каталогу'
          >
            Вернуться к каталогу
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
