'use client'

import dynamic from 'next/dynamic'
import { ValuesSection, VisitSection } from '@/components/sections'
import {
  ServicesSection,
  ContactFormSection,
  ContactsSection,
  HeroSection
} from './components/sections'

// Lazy load the FeaturedProductsSection to reduce initial bundle size
const FeaturedProductsSection = dynamic(
  () => import('./components/sections').then(mod => ({ default: mod.FeaturedProductsSection })),
  {
    loading: () => (
      <div className='py-12 bg-stone-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='h-8 bg-stone-200 rounded animate-pulse mb-4'></div>
            <div className='h-6 bg-stone-200 rounded animate-pulse'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className='bg-white border-2 border-stone-200 rounded-lg p-6'
              >
                <div className='h-96 bg-stone-200 rounded animate-pulse mb-4'></div>
                <div className='h-6 bg-stone-200 rounded animate-pulse mb-2'></div>
                <div className='h-4 bg-stone-200 rounded animate-pulse mb-4'></div>
                <div className='flex justify-between items-center'>
                  <div className='h-6 bg-stone-200 rounded animate-pulse w-24'></div>
                  <div className='h-8 bg-stone-200 rounded animate-pulse w-20'></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: false
  }
)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <ValuesSection />
      <VisitSection />
      <ServicesSection />
      <ContactFormSection />
      <ContactsSection />
    </>
  )
}
