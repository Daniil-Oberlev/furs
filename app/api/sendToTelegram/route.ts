import { getTelegramUrl, validateTelegramConfig } from '@/config'

export async function POST(req: Request) {
  try {
    const { text } = await req.json()

    const { botToken, chatId } = validateTelegramConfig()

    const telegramUrl = getTelegramUrl(botToken)
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        `Telegram API error: ${response.status} ${response.statusText}, Details: ${JSON.stringify(errorData)}`
      )
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Неизвестная ошибка'
      }),
      { status: 500 }
    )
  }
}
