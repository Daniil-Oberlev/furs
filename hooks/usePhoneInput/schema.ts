import { z } from 'zod'
import { COUNTRY_CODE, PHONE_LENGTH } from '@/hooks/usePhoneInput/constants'

export const phoneSchema = z
  .string()
  .transform(val => val.replace(/\D/g, ''))
  .refine(val => val.length === 0 || val.startsWith(COUNTRY_CODE), {
    message: 'Номер должен начинаться с +7'
  })
  .refine(val => val.length === 0 || val.length === PHONE_LENGTH, {
    message: 'Номер должен содержать 11 цифр'
  })
