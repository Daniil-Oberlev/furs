import { useMutation } from '@tanstack/react-query'
import { FormData } from '../types'
import { formatTelegramMessage, sendToTelegram } from '../utils'

interface UseSendConsultationProps {
  locale: string
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useSendConsultation = ({ locale, onSuccess, onError }: UseSendConsultationProps) => {
  return useMutation({
    mutationFn: async (data: FormData) => {
      const text = formatTelegramMessage(data, locale)
      const result = await sendToTelegram(text)

      if (!result.success) {
        throw new Error(result.error || 'Неизвестная ошибка')
      }

      return result
    },
    onSuccess: () => {
      onSuccess?.()
    },
    onError: (error: Error) => {
      onError?.(error)
    }
  })
}
