'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { productData } from '@/shared/Products'
import { ROUTES } from '@/config/routes'

export const useProduct = () => {
  const params = useParams()
  const productId = Number(params.id)
  const product = productData[productId]

  const BREADCRUMBS_ITEMS = useMemo(
    () => [
      { text: 'Главная', href: ROUTES.HOME },
      { text: 'Каталог', href: ROUTES.CATALOG },
      { text: product?.name || '' }
    ],
    [product]
  )

  const similarProducts = useMemo(
    () =>
      Object.values(productData)
        .filter(p => p.id !== productId)
        .map(p => ({
          ...p,
          image: p.images[0]
        })),
    [productId]
  )

  return {
    product,
    BREADCRUMBS_ITEMS,
    similarProducts
  }
}
