'use client'

import {
  FeaturedProductsSection,
  AboutSection,
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
      <AboutSection />
      <ServicesSection />
      <ContactFormSection />
      <ContactsSection />
    </>
  )
}
