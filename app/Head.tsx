import React from 'react'

import { COMPANY_NAME, COMPANY_PHONE, SHOP_ADDRESS } from '@/shared/Address'

export const Head = () => {
  return (
    <head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ClothingStore',
            'name': COMPANY_NAME,
            'description': 'Эксклюзивные изделия из натурального меха',
            'url': 'https://sablefur.ru',
            'telephone': COMPANY_PHONE,
            'email': 'info@sablefur.ru',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': SHOP_ADDRESS,
              'addressLocality': 'Москва',
              'addressCountry': 'RU'
            },
            'openingHours': 'Mo-Su 10:00-21:00',
            'priceRange': '200000-3600000 RUB',
            'paymentAccepted': 'Cash, Credit Card',
            'currenciesAccepted': 'RUB'
          })
        }}
      />
    </head>
  )
}
