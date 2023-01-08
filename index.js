const TelegramBot = require('node-telegram-bot-api');
const token = process.env.telegram_token;
const chatId = process.env.telegram_chat;
const bot = new TelegramBot(token, { polling: true });
const username = "Santi";

async function sendMessage() {
    await bot.sendMessage(chatId, 'Workflow ejecutado correctamente tras el último commit. Saludos ' + username);
    console.log('Mensaje enviado');
    process.exit(0);
}

sendMessage();