"use client"

import {
  AboutSection,
  ContactFormSection,
  ContactsSection,
  FeaturedSection,
  HeroSection,
  ServicesSection
} from "./components/sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <HeroSection/>
      <FeaturedSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactFormSection/>
      <ContactsSection/>
    </div>
  )
}