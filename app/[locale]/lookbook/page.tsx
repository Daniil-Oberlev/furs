'use client'

import Image from 'next/image'

import { VisitSection } from '@/components/sections'
import { PageHeader } from '@/components/ui/PageHeader'

import { TypographyH2, TypographyP } from '@/components/ui/typography'

import { lookbookImages } from './constants'

export default function LookbookPage() {
  return (
    <div className='container mx-auto px-4 pt-8'>
      <PageHeader
        title='LOOKBOOK'
        description='Вдохновляющие образы с нашими меховыми изделиями'
        descriptionClassName='text-stone-800 mb-0'
      />

      <div className='mb-8'>
        <div className='relative h-[70vh] rounded-lg overflow-hidden shadow-2xl'>
          <Image
            src='/lookbook/EA0071.jpg'
            alt='SABLEFUR Collection Hero'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-12'>
            <div className='text-center text-white'>
              <TypographyH2 className='text-white text-3xl md:text-4xl mb-4 font-light'>
                КОЛЛЕКЦИЯ ОСЕНЬ-ЗИМА 25/26
              </TypographyH2>
              <TypographyP className='text-white text-lg opacity-90'>
                Эксклюзивные изделия из натурального меха
              </TypographyP>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-16'>
        <div className='text-center mb-12'>
          <TypographyH2 className='text-3xl mb-4'>Галерея образов</TypographyH2>
          <TypographyP className='text-lg text-stone-600'>
            Каждая модель рассказывает свою историю
          </TypographyP>
        </div>

        {/* Desktop: 4 columns, Mobile: 2 columns */}
        <div className='columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6'>
          {lookbookImages.map(item => (
            <div
              key={item.id}
              className='break-inside-avoid group cursor-pointer'
            >
              <div className='relative overflow-hidden rounded-lg bg-stone-200 shadow-lg hover:shadow-xl transition-all duration-500'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={item.size === 'large' ? 900 : item.size === 'medium' ? 800 : 850}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    item.size === 'large'
                      ? 'h-[500px] md:h-[600px]'
                      : item.size === 'medium'
                        ? 'h-[400px] md:h-[500px]'
                        : 'h-[450px] md:h-[550px]'
                  }`}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'>
                  <h3 className='text-lg font-playfair font-medium mb-2'>{item.title}</h3>
                  <TypographyP className='text-white/90 text-sm leading-relaxed'>
                    {item.description}
                  </TypographyP>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-16'>
        <div className='bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-12 text-center shadow-2xl'>
          <TypographyH2 className='text-stone-100 mb-6'>Особенности коллекции</TypographyH2>
          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            <div className='text-center'>
              <div className='text-3xl font-playfair font-light text-amber-400 mb-3'>100%</div>
              <div className='text-stone-300 font-cormorant text-lg'>Натуральный мех</div>
              <div className='text-stone-400 text-sm mt-2'>Высочайшего качества</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-playfair font-light text-amber-400 mb-3'>25+</div>
              <div className='text-stone-300 font-cormorant text-lg'>Лет мастерства</div>
              <div className='text-stone-400 text-sm mt-2'>Традиции и инновации</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-playfair font-light text-amber-400 mb-3'>∞</div>
              <div className='text-stone-300 font-cormorant text-lg'>Индивидуальность</div>
              <div className='text-stone-400 text-sm mt-2'>Каждая модель уникальна</div>
            </div>
          </div>
          <TypographyP className='text-stone-300 mb-8 max-w-2xl mx-auto text-lg'>
            Наша коллекция создается с особым вниманием к деталям. Каждая шуба проходит тщательный
            отбор материалов и многоэтапный процесс создания
          </TypographyP>
        </div>
      </div>

      <VisitSection />
    </div>
  )
}
