export const telegramConfig = {
  botToken: process.env.TELEGRAM_BOT_TOKEN,
  chatId: process.env.TELEGRAM_CHAT_ID,
  apiUrl: 'https://api.telegram.org/bot'
}

export const getTelegramUrl = (botToken: string) =>
  `${telegramConfig.apiUrl}${botToken}/sendMessage`

export const validateTelegramConfig = () => {
  if (!telegramConfig.botToken || !telegramConfig.chatId) {
    throw new Error('Отсутствуют переменные окружения для Telegram')
  }
  return {
    botToken: telegramConfig.botToken,
    chatId: Number(telegramConfig.chatId)
  }
}
