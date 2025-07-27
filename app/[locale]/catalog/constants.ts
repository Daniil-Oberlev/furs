import { productData } from '@/shared/Products'

export const BREADCRUMBS_ITEMS = [{ text: 'Главная', href: '/' }, { text: 'Каталог' }]

export const products = Object.entries(productData).map(([id, product]) => ({
  id: Number(id),
  name: product.name,
  furType: product.furType,
  price: product.price,
  image: product.images[0],
  category: product.category,
  purchaseLink: product.purchaseLink
}))
