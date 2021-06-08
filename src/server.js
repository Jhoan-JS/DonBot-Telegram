require("dotenv").config({ path: "../.env" });
process.env.NTBA_FIX_319;
process.env.NTBA_FIX_350;
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
const commandsPornHub = require(path.join(
  __dirname,
  "Commands/commandsPHub.js"
));
PornBot.on("message", async (msg) => {
  const userMessage = msg.text.toString().toLowerCase();
  const userId = msg.chat.id;
  // PornBot.sendMessage(userId, "Hello dear user");

  if (userMessage === "/asian") {
    picPorn = await commands.asianPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/ass") {
    picPorn = await commands.assPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/anal") {
    picPorn = await commands.analPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/hairypussy") {
    picPorn = await commands.hairyPussyPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/trap") {
    picPorn = await commands.trapsPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/amateur") {
    picPorn = await commands.amateurPicPorn();
    PornBot.sendPhoto(userId, picPorn);
  } else if (userMessage === "/college") {
    picPorn = await commands.collegePicPorn();
    console.log(picPorn);
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
  } else if (userMessage === "/amateurgif") {
    picPorn = await commands.ameteurGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  } else if (userMessage === "/collegegif") {
    picPorn = await commands.collegeGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  } else if (userMessage === "/analgif") {
    picPorn = await commands.analGifPorn();
    console.log(picPorn);
    PornBot.sendDocument(userId, picPorn);
  } else if (userMessage === "/asianvideo") {
    picPorn = await commandsPornHub.getPornHubVideo();
    console.log(picPorn);
    PornBot.sendMessage(userId, picPorn);
  }
});

PornBot.on("polling_error", (error) => {
  console.log(error.code); // => 'EFATAL'
});

module.exports = r;
