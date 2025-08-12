import { FormData } from './types'

export const serviceLabels: Record<string, string> = {
  'fitting': 'Примерка',
  'consultation': 'Консультация стилиста',
  'custom': 'Индивидуальный пошив',
  'care': 'Уход за мехом',
  '': 'Не выбрано'
}

export const formatEmailMessage = (data: FormData, locale: string): string => {
  const formatDate = (date: string) => {
    if (!date) return 'Не выбрано'
    const [year, month, day] = date.split('-')
    return locale === 'ru' ? `${day}.${month}.${year}` : `${month}/${day}/${year}`
  }

  return [
    `Имя: ${data.name || 'Не указано'}`,
    `Телефон: ${data.phone || 'Не указано'}`,
    `Услуга: ${serviceLabels[data.service] || 'Не выбрано'}`,
    `Дата: ${formatDate(data.date)}`,
    `Время: ${data.time || 'Не выбрано'}`
  ].join('\n')
}

export const sendToEmail = async (text: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `Request failed: ${response.statusText}, Details: ${JSON.stringify(errorData)}`
      )
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка'
    }
  }
}
