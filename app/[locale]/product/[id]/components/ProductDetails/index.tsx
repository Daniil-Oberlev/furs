import { TypographyH3, TypographyP } from '@/components/ui/typography'
import { Card, CardContent } from '@/components/ui/card'

import { IProduct } from '@/@types'
import React from 'react'

interface ProductDetailsProps {
  description: string
  details: string[] | Record<string, string | string[] | null>
}

export const ProductDetails = ({ description, details }: ProductDetailsProps) => {
  // Преобразуем характеристики в массив пар [название, значение]
  let detailsPairs: [string, string][] = []
  if (Array.isArray(details)) {
    detailsPairs = details.map(item => {
      const idx = item.indexOf(':')
      if (idx !== -1) {
        return [item.slice(0, idx + 1), item.slice(idx + 1).trim()]
      }
      return [item, '']
    })
  } else if (details && typeof details === 'object') {
    detailsPairs = Object.entries(details).map(([key, value]) => {
      let label = key
      // Русские подписи для ключей
      switch (key) {
        case 'material':
          label = 'Материал:'
          break
        case 'lining':
          label = 'Подкладка:'
          break
        case 'origin':
          label = 'Происхождение:'
          break
        case 'sizes':
          label = 'Размеры:'
          break
        case 'colors':
          label = 'Цвета:'
          break
        case 'care':
          label = 'Уход:'
          break
        default:
          label = key + ':'
      }
      let val = Array.isArray(value) ? value.join(', ') : (value ?? '')
      return [label, val]
    })
  }
  return (
    <div className='bg-white rounded-lg p-6 shadow-sm'>
      <h3 className='text-xl font-cormorant font-semibold mb-4 text-stone-800'>Описание</h3>
      <p className='text-stone-700 mb-6'>{description}</p>
      <h4 className='text-lg font-cormorant font-medium mb-2 text-stone-800'>Характеристики</h4>
      <div className='grid grid-cols-2 gap-y-2 gap-x-4 text-stone-800 text-base font-inter'>
        {detailsPairs.map(([label, value], idx) => (
          <React.Fragment key={idx}>
            <div className='text-stone-700'>{label}</div>
            <div className='text-right'>{value}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
