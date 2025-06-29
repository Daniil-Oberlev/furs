import { TypographyH2, TypographyP } from '@/components/ui/typography'

import { ServiceCard } from './components'

import { SERVICES } from './constants'

export const ServicesSection = () => {
  return (
    <section
      id='services'
      className='py-16 bg-stone-100'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <TypographyH2 className='mbprog-4'>Наши услуги</TypographyH2>
          <TypographyP>Полный спектр услуг для наших клиентов</TypographyP>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {SERVICES.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              variant={service.variant}
              size={service.size}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
