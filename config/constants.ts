import { ROUTES } from './routes'

export const COMPANY = {
  NAME: 'SABLEFUR',
  PHONE: '+7 (495) 123-45-67',
  PHONE_2: '+7 (495) 123-45-68',
  EMAIL: 'info@sablefur.ru',
  ADDRESS: 'ТД ЦУМ, г. Москва, ул. Петровка, д. 2',
  WEBSITE: 'https://sablefur.ru'
} as const

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
} as const

export const NAVIGATION = {
  LEFT_LINKS: [
    { name: 'Преимущества', url: `${ROUTES.ABOUT}/#about` },
    { name: 'О нас', url: ROUTES.ABOUT },
    { name: 'Каталог', url: ROUTES.CATALOG },
    { name: 'Lookbook', url: ROUTES.LOOKBOOK }
  ],
  RIGHT_LINKS: [
    { name: 'Услуги', url: '/#services' },
    { name: 'Контакты', action: 'openContacts' }
  ]
} as const

export const PRODUCT_CATEGORIES = {
  PREMIUM: 'Премиум',
  LUXURY: 'Люкс'
} as const

export const FUR_TYPES = {
  SABLE: 'соболь',
  MINK: 'норка',
  KARAKUL: 'каракуль',
  FOX: 'лиса',
  OCELOT: 'оцелот'
} as const

export const VALIDATION = {
  PHONE_REGEX: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
} as const

export * from './telegram'
