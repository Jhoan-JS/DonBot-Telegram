require("dotenv").config({ paht: "./.env" });

const { Telegraf } = require("telegraf");
const listOfFuctions = require("./helpers/list");

//Initializations
console.log(process.env.TOKEN);
const PornBot = new Telegraf(process.env.TOKEN);

//Commands
PornBot.help((ctx) => {
  ctx.reply("Help");
});

//Pics
PornBot.command(
  [
    "asian",
    "ass",
    "anal",
    "amateur",
    "hairypussy",
    "college",
    "trap",
    "bisexual",
    "petite",
    "cute",
    "panties",
  ],
  async (ctx) => {
    const getPic = await listOfFuctions.getFuctionPic(
      ctx.message.text.replace("/", "")
    );

    try {
      const picPorn = await getPic(ctx.message.text.replace("/", ""));

      ctx.replyWithPhoto(picPorn);
    } catch (error) {}
  }
);

//Gifs
PornBot.command(
  [
    "asiangif",
    "assgif",
    "analgif",
    "amateurgif",
    "hairypussygif",
    "collegegif",
    "trapgif",
    "bisexualgif",
    "petitegif",
    "cutegif",
    "pantiesgif",
  ],
  async (ctx) => {
    const getPic = await listOfFuctions.getFuctionGif(
      ctx.message.text.replace("/", "")
    );

    try {
      const picPorn = await getPic(ctx.message.text.replace("/", ""));

      ctx.replyWithVideo(picPorn);
    } catch (error) {}
  }
);

PornBot.launch();
// Enable graceful stop
process.once("SIGINT", () => PornBot.stop("SIGINT"));
process.once("SIGTERM", () => PornBot.stop("SIGTERM"));
