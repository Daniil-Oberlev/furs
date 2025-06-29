import { productData } from '@/shared/Products'

export const FEATURE_PRODUCTS = Object.entries(productData)
  .slice(0, 9)
  .map(([id, product]) => ({
    id: Number(id),
    name: product.name,
    furType: product.furType,
    price: product.price,
    image: product.images[0],
    category: product.category,
    purchaseLink: product.purchaseLink
  }))
