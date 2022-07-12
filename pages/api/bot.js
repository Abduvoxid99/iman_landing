require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = '1849989606:AAE9nTC6c3uvNIeKbqT35z-OyLaSSoEv29I'

const TelegramBot = require('node-telegram-bot-api')

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

export default (req, res) => {
  const { username, phone, question } = req.body

  const mailOption = `
    Client: ${username}
    Phone number: ${phone}
    Question: ${question}
    
    `
  // bot.sendMessage(`@iman_bot_test`, mailOption)
  try {
    bot.sendMessage('@testiman111', mailOption)
  } catch (e) {
    res.send('error')
  }

  res.send('success')
}
