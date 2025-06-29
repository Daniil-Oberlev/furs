import { TypographyH4 } from '@/components/ui/typography'

import { COMPANY_EMAIL, COMPANY_PHONE, SHOP_ADDRESS } from '@/shared/Address'

export const FullAddress = () => {
  return (
    <address>
      <TypographyH4 className='text-stone-200 mb-4'>Контакты</TypographyH4>
      <div className='space-y-2 text-sm text-stone-400 font-inter'>
        <a href='tel:${COMPANY_PHONE}'>
          <p>{COMPANY_PHONE}</p>
        </a>
        <a href='mailto:${COMPANY_EMAIL}'>
          <p>{COMPANY_EMAIL}</p>
        </a>
        <p>{SHOP_ADDRESS}</p>
      </div>
    </address>
  )
}
