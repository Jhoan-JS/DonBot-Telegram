const picController = require("../Commands/picController");
const gifsController = require("../Commands/gifsController");
const getFuctionPic = (userCommand) => {
  //   "asian", "ass", "anal", "amateur", "hairypussy", "college", "traps";
  const listFuctionsPic = {
    asian: picController.asianPicPorn,
    ass: picController.assPicPorn,
    anal: picController.analPicPorn,
    amateur: picController.amateurPicPorn,
    hairypussy: picController.hairyPussyPicPorn,
    college: picController.collegePicPorn,
    trap: picController.trapsPicPorn
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
    amateurgif: gifsController.amateurGifPorn,
    asiangif: gifsController.asianGifPorn,
    assgif: gifsController.assGifPorn,
    analgif: gifsController.analGifPorn,

    hairypussygif: gifsController.hairyPussyGifPorn,
    collegegif: gifsController.collegeGifPorn,
    trapgif: gifsController.trapsGifPorn
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
