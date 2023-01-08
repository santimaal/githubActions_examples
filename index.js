const core = require('@actions/core');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
try {
  const token = core.getInput('telegram_token');
  const chatID = core.getInput('telegram_chat');
  const nombre = 'Santi';
  const telegram_msg = `Workflow ejecutado correctamente tras el último commit. Saludos ${nombre}`;
  const response_msg = "Mensaje enviado";
  const bot = new TelegramBot(token, { polling: true });

  bot.sendMessage(chatID, telegram_msg)
      .then(data => {
          console.log(response_msg);
          core.setOutput('msg', response_msg);
          process.exit(0)
      })
      .catch(e => core.setFailed(e));
}
catch (e){
  core.setFailed(e.message)
}

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   console.log(msg);

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, msg.text);
// });