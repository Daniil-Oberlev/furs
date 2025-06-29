import React from 'react'

import { COMPANY_NAME, COMPANY_PHONE, SHOP_ADDRESS } from '@/shared/Address'

export const Head = () => {
  return (
    <head>
      <meta
        name='theme-color'
        content='#d97706'
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ClothingStore',
            'name': COMPANY_NAME,
            'description': 'Эксклюзивные шубы из натурального меха',
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
            'priceRange': '1140000-3600000 RUB',
            'paymentAccepted': 'Cash, Credit Card',
            'currenciesAccepted': 'RUB'
          })
        }}
      />
    </head>
  )
}
