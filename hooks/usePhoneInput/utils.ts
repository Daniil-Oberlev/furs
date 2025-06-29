import { ALT_COUNTRY_CODE, COUNTRY_CODE, PHONE_LENGTH } from '@/hooks/usePhoneInput/constants'

export const formatPhoneNumber = (input: string): string => {
  const digits = input.replace(/\D/g, '')
  if (digits.length === 0) return ''

  let processedDigits = digits
  if (digits.startsWith(ALT_COUNTRY_CODE) && digits.length === PHONE_LENGTH) {
    processedDigits = COUNTRY_CODE + digits.slice(1)
  } else if (!digits.startsWith(COUNTRY_CODE) && digits.length > 0) {
    processedDigits = COUNTRY_CODE + digits
  }

  processedDigits = processedDigits.slice(0, PHONE_LENGTH)

  const countryCode = processedDigits.slice(0, 1)
  const rest = processedDigits.slice(1)
  const parts: string[] = []
  if (rest.length > 0) parts.push(rest.slice(0, 3))
  if (rest.length > 3) parts.push(rest.slice(3, 6))
  if (rest.length > 6) parts.push(rest.slice(6, 8))
  if (rest.length > 8) parts.push(rest.slice(8, 10))

  return `+${countryCode}${parts.length ? ' ' : ''}${
    parts[0] ? `(${parts[0]})` : ''
  }${parts[1] ? ` ${parts[1]}` : ''}${parts[2] ? `-${parts[2]}` : ''}${
    parts[3] ? `-${parts[3]}` : ''
  }`
}
