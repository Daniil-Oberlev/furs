import { ContactFormData } from './types'

export const formatContactEmailMessage = (data: ContactFormData): string => {
  return [
    `Новое сообщение с сайта FURS`,
    ``,
    `Имя: ${data.name || 'Не указано'}`,
    `Телефон: ${data.phone || 'Не указано'}`,
    `Email: ${data.email || 'Не указано'}`,
    `Сообщение: ${data.message || 'Не указано'}`
  ].join('\n')
}

export const sendContactToEmail = async (
  text: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        subject: 'Новое сообщение с сайта FURS'
      })
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
