require('dotenv').config({ path: '../.env' },)
process.env.NTBA_FIX_319
const TelegramBot = require('node-telegram-bot-api')
const PornBot = new TelegramBot(process.env.TOKEN, { polling: true });
const path = require('path')

//Requires 
const commands = require(path.join(__dirname, 'Commands/commands.js'))


PornBot.on('message', async (msg) => {
    const userMessage = msg.text.toString().toLowerCase()
    const userId = msg.chat.id
    // PornBot.sendMessage(userId, "Hello dear user");

    console.log("sd");


    if (userMessage === '/asian') {
        picPorn = await commands.asianPicPorn()

        PornBot.sendPhoto(userId, picPorn)
    }



})