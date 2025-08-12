import { Resend } from 'resend'
import { validateEmailConfig } from '@/config/email'

export async function POST(req: Request) {
  try {
    const { text, subject = 'Новая заявка с сайта FURS' } = await req.json()

    const config = validateEmailConfig()

    // Создаем экземпляр Resend
    const resend = new Resend(config.apiKey)

    // Отправляем email
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      subject: subject,
      text: text,
      html: text.replace(/\n/g, '<br>') // Конвертируем переносы строк в HTML
    })

    if (error) {
      throw new Error(`Resend error: ${error.message}`)
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId: data?.id
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      }),
      { status: 500 }
    )
  }
}
