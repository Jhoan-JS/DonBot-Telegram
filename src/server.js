require("dotenv").config({ path: __dirname + "/.env" });

const { Telegraf } = require("telegraf");
const listOfFuctions = require("./helpers/list");

//Initializations

const PornBot = new Telegraf(process.env.TOKEN);

//Commands
PornBot.help((ctx) => {
  ctx.reply("Help");
});

//Pics
PornBot.command(
  ["asian", "ass", "anal", "amateur", "hairypussy", "college", "trap"],
  async (ctx) => {
    const getPic = await listOfFuctions.getFuctionPic(
      ctx.message.text.replace("/", "")
    );

    const picPorn = await getPic();

    ctx.replyWithPhoto(picPorn);
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
    "trapgif"
  ],
  async (ctx) => {
    const getPic = await listOfFuctions.getFuctionGif(
      ctx.message.text.replace("/", "")
    );

    const picPorn = await getPic();

    ctx.replyWithVideo(picPorn);
  }
);

PornBot.launch();
// Enable graceful stop
process.once("SIGINT", () => PornBot.stop("SIGINT"));
process.once("SIGTERM", () => PornBot.stop("SIGTERM"));
