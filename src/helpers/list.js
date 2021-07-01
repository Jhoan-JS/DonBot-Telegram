const commands = require("../Commands/commands");
const getFuctionPic = (userCommand) => {
  //   "asian", "ass", "anal", "amateur", "hairypussy", "college", "traps";
  const listFuctionsPic = {
    asian: commands.asianPicPorn,
    ass: commands.assPicPorn,
    anal: commands.analPicPorn,
    amateur: commands.amateurPicPorn,
    hairypussy: commands.hairyPussyPicPorn,
    college: commands.collegePicPorn,
    trap: commands.trapsPicPorn
  };
  let FuctionPic = "";
  for (const fuction in listFuctionsPic) {
    if (userCommand === fuction) {
      return (FuctionPic = listFuctionsPic[fuction]);
    }
  }

  return FuctionPic;
};

const getFuctionGif = (userCommand) => {
  const listFuctionsPic = {
    asiangif: commands.asianGifPorn,
    assgif: commands.assGifPorn,
    analgif: commands.analGifPorn,
    amateurgif: commands.amateurGifPorn,
    hairypussygif: commands.hairyPussyGifPorn,
    collegegif: commands.collegeGifPorn,
    trapgif: commands.trapsGifPorn
  };

  let FuctionPic = "";
  for (const fuction in listFuctionsPic) {
    if (userCommand === fuction) {
      return (FuctionPic = listFuctionsPic[fuction]);
    }
  }

  return FuctionPic;
};

module.exports = {
  getFuctionPic,
  getFuctionGif
};
