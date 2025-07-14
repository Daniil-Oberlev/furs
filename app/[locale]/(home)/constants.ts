import { productData } from '@/shared/Products'
import { IServiceCard } from './components/ServiceCard/types'

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

export const SERVICES: IServiceCard[] = [
  {
    title: 'Персональная примерка',
    description: 'Индивидуальная примерка в комфортной обстановке нашего салона',
    buttonText: 'Записаться',
    variant: 'amber',
    size: 'default'
  },
  {
    title: 'Консультация стилиста',
    description: 'Профессиональная помощь в выборе идеальной модели',
    buttonText: 'Консультация',
    variant: 'amber',
    size: 'default'
  },
  {
    title: 'Индивидуальный пошив',
    description: 'Создание уникальной шубы по вашим размерам и пожеланиям',
    buttonText: 'Узнать больше',
    variant: 'amber',
    size: 'default'
  }
]
