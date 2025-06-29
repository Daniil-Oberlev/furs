'use client'

import React, { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { useClickOutside } from '@/hooks/useClickOutside'

import { IProductImageGallery } from './types'

export const ProductImageGallery = ({ images, category, productName }: IProductImageGallery) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)
  const galleryRef = useClickOutside<HTMLDivElement>(() => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }, isGalleryOpen)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    const image = imageRef.current.querySelector('img')
    if (image) {
      image.style.transformOrigin = `${x}% ${y}%`
    }
  }, [])

  const openGallery = useCallback((index: number) => {
    setGalleryIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeGallery = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }, [])

  const nextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryIndex(prev => (prev + 1) % images.length)
  }, [])

  const prevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryIndex(prev => (prev - 1 + images.length) % images.length)
  }, [])

  const handleThumbnailClick = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryIndex(index)
  }

  return (
    <div className='space-y-4'>
      <div className='relative'>
        <Badge className='absolute top-4 left-4 z-10 bg-amber-700 text-stone-100 font-cormorant text-sm px-3 py-1'>
          {category}
        </Badge>
        <div
          ref={imageRef}
          className='relative overflow-hidden bg-white rounded-lg group cursor-zoom-in'
          onMouseMove={handleMouseMove}
          onClick={() => openGallery(selectedImage)}
        >
          <Image
            src={images[selectedImage]}
            alt={productName}
            width={800}
            height={1000}
            className='w-full h-[600px] object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-200'
          />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg overflow-hidden border-2 transition-colors bg-stone-200 hover:border-amber-600/60 ${
              selectedImage === index ? 'border-amber-700' : 'border-stone-300'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} - фото ${index + 1}`}
              width={200}
              height={200}
              className='w-full h-24 object-cover transition-transform duration-300 hover:scale-105'
            />
          </button>
        ))}
      </div>
      {isGalleryOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'
          onClick={closeGallery}
        >
          <div
            ref={galleryRef}
            className='relative w-full max-w-4xl h-full flex items-center justify-center p-4'
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className='absolute top-4 -right-0 z-10 bg-amber-600/90 hover:bg-amber-800/60 rounded-full p-2 transition-colors'
              aria-label='Закрыть галерею'
            >
              <X className='h-6 w-6 text-white' />
            </button>
            <button
              onClick={prevImage}
              className='absolute -left-0 z-10 bg-amber-600/90 hover:bg-amber-800/60 rounded-full p-2 transition-colors'
              aria-label='Предыдущее изображение'
            >
              <ChevronLeft className='h-6 w-6 text-white' />
            </button>
            <button
              onClick={nextImage}
              className='absolute -right-0 z-10 bg-amber-600/90 hover:bg-amber-800/60 rounded-full p-2 transition-colors'
              aria-label='Следующее изображение'
            >
              <ChevronRight className='h-6 w-6 text-white' />
            </button>
            <div className='relative max-w-4xl max-h-full'>
              <Image
                src={images[galleryIndex]}
                alt={`${productName} - фото ${galleryIndex + 1}`}
                width={800}
                height={1000}
                className='max-w-full max-h-full object-contain'
                priority
              />
            </div>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full px-4 py-2'>
              <span className='text-white text-base font-inter'>
                {galleryIndex + 1} / {images.length}
              </span>
            </div>
            <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2'>
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={handleThumbnailClick(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    galleryIndex === index ? 'border-amber-400' : 'border-white/30'
                  }`}
                  aria-label={`Перейти к изображению ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
