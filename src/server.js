require("dotenv").config({ path: "../.env" });
process.env.NTBA_FIX_319;
const TelegramBot = require("node-telegram-bot-api");
const PornBot = new TelegramBot(process.env.TOKEN, { polling: true });
const path = require("path");

const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: "DonBot",
  clientId: "6iRNBv1tqxrCZA",
  clientSecret: "M7UM2siJ0DpyzdO8D9iDVpsrGhLtHA",
  refreshToken: "948423918612-2gb6nqUlKGJjxXFsv3-fngIarqQ3sw"
});

//Requires

const commands = require(path.join(__dirname, "Commands/commands.js"));

PornBot.on("message", async (msg) => {
  const userMessage = msg.text.toString().toLowerCase();
  const userId = msg.chat.id;
  // PornBot.sendMessage(userId, "Hello dear user");

  console.log("sd");

  if (userMessage === "/asian") {
    picPorn = await commands.asianPicPorn();

    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/ass") {
    picPorn = await commands.assPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/hairypussy") {
    picPorn = await commands.hairyPussyPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/trap") {
    picPorn = await commands.trapsPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/trapgif") {
    picPorn = await commands.trapsGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  } else if (userMessage === "/assgif") {
    picPorn = await commands.assGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  } else if (userMessage === "/asiangif") {
    picPorn = await commands.asianGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  }
});

PornBot.on("polling_error", (error) => {
  console.log(error.code); // => 'EFATAL'
});

module.exports = r;
