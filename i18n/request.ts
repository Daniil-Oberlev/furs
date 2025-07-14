import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'ru']
export const defaultLocale = 'ru'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
