require("dotenv").config({ paht: "./.env" });

const { Telegraf } = require("telegraf");
const listOfFuctions = require("./helpers/list");

//Initializations
console.log(process.env.TOKEN);
const PornBot = new Telegraf(process.env.TOKEN);

PornBot.start((ctx) => {
  ctx.reply(
    "Hi, I'm your porn bot. Type /help to see all my commands and get satisfactory experience"
  );
});

//Commands
PornBot.help((ctx) => {
  ctx.reply(
    "NSFW Pics\n /asian - Cute asian girl pic \n/ass - Ass pic \n/anal - Anal pic \n/hairypussy - Unshaven pussy(weird shit) \n/college - Cute college girl(not illegal) \n/femboy - The best thing in the life(You know it) \n/petite - Cute small girl(not illegal bro) \n/cute - gorgeous girls \n/panties - PANTIES(If you are into this shit) \n\nNSFW Gifs\n /asiangif - Cute asian girl gif \n/assgif - ass gif \n/analgif - anal gif \n/hairypussygif - unshaven pussy(weird shit) \n/collegegif - cute college girl(not illegal) \n/femboygif - The best thing in the life(You know it) \n/petitegif - cute small girl(not illegal bro) \n/cutegif - gorgeous girls \n/pantiesgif - PANTIES(If you are into this shit) "
  );
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
    ,
    "femboy",
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
    "femboygif",
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
