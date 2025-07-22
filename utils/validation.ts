import { z } from 'zod'
import { VALIDATION } from '@/config/constants'

export const isValidEmail = (email: string): boolean => {
  return VALIDATION.EMAIL_REGEX.test(email.trim())
}

export const isValidPhone = (phone: string): boolean => {
  return VALIDATION.PHONE_REGEX.test(phone.trim())
}

export const isRequired = (value: string): boolean => {
  return value.trim().length > 0
}

export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength
}

export const sanitizeHtml = (html: string): string => {
  if (typeof window === 'undefined') {
    return html
  }
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Product name is required'),
  furType: z.array(z.string()).min(1, 'At least one fur type is required'),
  price: z.string().min(1, 'Product price is required'),
  images: z
    .array(
      z.object({
        src: z.string().url('Image source must be a valid URL'),
        alt: z.string().min(1, 'Image alt text is required')
      })
    )
    .min(1, 'At least one product image is required'),
  category: z.string().min(1, 'Product category is required'),
  purchaseLink: z.string().url('Purchase link must be a valid URL'),
  description: z.string().min(1, 'Product description is required'),
  details: z.array(z.string()).min(1, 'At least one detail is required')
})

export type Product = z.infer<typeof productSchema>

export const validateProduct = (product: unknown) => {
  return productSchema.safeParse(product)
}
