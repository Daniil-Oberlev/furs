export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  ABOUT: '/about',
  LOOKBOOK: '/lookbook',
  CONTACTS: '/contacts',
  PRODUCT: (id: string | number) => `/product/${id}`
} as const
