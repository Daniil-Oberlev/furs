'use client'

import { ValuesSection, VisitSection } from '@/components/sections'
import {
  FeaturedProductsSection,
  ServicesSection,
  ContactFormSection,
  ContactsSection,
  HeroSection
} from './components/sections'

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
