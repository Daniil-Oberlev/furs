import { TypographyH3, TypographyLead } from '@/components/ui/typography'

import { Catalog, Copyright, FullAddress, Services } from './components'

import { COMPANY_NAME } from '@/shared/Address'

export const Footer = () => {
  return (
    <footer className='bg-stone-900 border-t border-amber-600/20 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <TypographyH3 className='text-amber-400 mb-4'>{COMPANY_NAME}</TypographyH3>
            <TypographyLead className='text-stone-400 font-cormorant '>
              Роскошные шубы для истинных ценителей качества и стиля
            </TypographyLead>
          </div>
          <Catalog />
          <Services />
          <FullAddress />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}
