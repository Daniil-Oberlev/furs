'use client'

import type React from 'react'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

import { useClickOutside } from '@/hooks/useClickOutside'

import { productData } from '@/shared/Products'

import {
  Breadcrumbs,
  ProductActions,
  ProductDetails,
  ProductImageGallery,
  ProductInfo,
  SimilarProducts
} from './components'
import { LinkButton } from '@/components/ui/LinkButton'

export default function ProductPage() {
  const params = useParams()

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const productId = Number(params.id)

  const product = productData[productId]

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

  const closeGallery = () => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }

  const galleryRef = useClickOutside<HTMLDivElement>(closeGallery, isGalleryOpen)

  const nextImage = () => {
    setGalleryIndex(prev => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setGalleryIndex(prev => (prev - 1 + product.images.length) % product.images.length)
  }

  if (!product) {
    return <div>Товар не найден</div>
  }

  return (
    <div className='min-h-screen bg-stone-100'>
      <div className='container mx-auto px-4 py-6'>
        <Breadcrumbs productName={product.name} />
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
        {isGalleryOpen && (
          <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'>
            <div
              ref={galleryRef}
              className='relative w-full h-full flex items-center justify-center p-4'
            >
              <button
                onClick={closeGallery}
                className='absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors'
              >
                <X className='h-6 w-6 text-white' />
              </button>
              <button
                onClick={prevImage}
                className='absolute left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors'
              >
                <ChevronLeft className='h-6 w-6 text-white' />
              </button>
              <button
                onClick={nextImage}
                className='absolute right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors'
              >
                <ChevronRight className='h-6 w-6 text-white' />
              </button>
              <div className='relative max-w-4xl max-h-full'>
                <Image
                  src={product.images[galleryIndex]}
                  alt={`${product.name} - фото ${galleryIndex + 1}`}
                  width={800}
                  height={1000}
                  className='max-w-full max-h-full object-contain'
                />
              </div>
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full px-4 py-2'>
                <span className='text-white text-base font-inter'>
                  {galleryIndex + 1} / {product.images.length}
                </span>
              </div>
              <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      galleryIndex === index ? 'border-amber-400' : 'border-white/30'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={64}
                      height={64}
                      className='w-full h-full object-contain'
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
