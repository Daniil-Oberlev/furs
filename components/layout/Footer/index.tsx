import { TypographyH4, TypographyLead } from '@/components/ui/typography'

import { Catalog, Copyright, Services } from './components'

import { Logo } from '@/components/ui/Logo'

// import { COMPANY_EMAIL, COMPANY_PHONE, SHOP_ADDRESS } from '@/shared/Address'
import { COMPANY_EMAIL } from '@/shared/Address'

export const Footer = () => {
  return (
    <footer className='bg-stone-900 border-t border-amber-600/20 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <Logo />
            <TypographyLead className='text-stone-400 font-cormorant '>
              Роскошные шубы для истинных ценителей качества и стиля
            </TypographyLead>
          </div>
          <Catalog />
          <Services />
          <address>
            <TypographyH4 className='text-stone-200 mb-4'>Контакты</TypographyH4>
            <div className='space-y-2 text-sm text-stone-400 font-inter'>
              {/* TODO: временно скрыто*/}
              {/* <a href='tel:${COMPANY_PHONE}'> */}
              {/* <p>{COMPANY_PHONE}</p> */}
              {/* </a> */}
              <a href='mailto:info@sablefur.ru'>
                <p>{COMPANY_EMAIL}</p>
              </a>
              {/* <p>{SHOP_ADDRESS}</p> */}
            </div>
          </address>
        </div>
        <Copyright />
      </div>
    </footer>
  )
}
