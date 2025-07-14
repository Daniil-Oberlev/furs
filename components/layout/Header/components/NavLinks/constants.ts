import { NavItem } from './types'

export const LEFT_NAV_LINKS: NavItem[] = [
  { name: 'Преимущества', url: '#' },
  { name: 'О нас', url: '/about' },
  { name: 'Каталог', url: '/catalog' },
  { name: 'Lookbook', url: '/lookbook' }
]

export const RIGHT_NAV_LINKS: NavItem[] = [
  { name: 'Услуги', url: '/#services' },
  { name: 'Контакты', url: '/#contacts' }
]

export const ALL_NAV_LINKS: NavItem[] = [...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS]
