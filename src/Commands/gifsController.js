const path = require("path");
const helpers = require("../helpers/help");

//task for another day: add getHot,getNew and getRising
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

const asianGifPorn = async () => {
  const subReddits = [
    "AsiansGoneWild",
    "juicyasians",
    "AsianPorn",
    "AsianHotties",
    "NSFW_Japan"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  const dataImages = await sort(randomReddit, "gif");
  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  //Select a random img from array
  return dataImages[randomNumber].link;
};

const assGifPorn = async () => {
  const subReddits = [
    "ass",
    "CuteLittleButts",
    "bigasses",
    "booty",
    "pawg",
    "cosplaybutts"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  const dataImages = await sort(randomReddit, "gif");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);
  return dataImages[randomNumber].link;
};

const analGifPorn = async () => {
  const subReddits = [
    "anal",
    "AnalGW",
    "distension",
    "MasterOfAnal",
    "painal",
    "anal_gifs",
    "buttsthatgrip"
  ];
  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  const dataImages = await sort(randomReddit, "gif");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);
  return dataImages[randomNumber].link;
};

const hairyPussyGifPorn = async () => {
  const subReddits = ["HairyPussy", "RugsOnly", "FireCrotch", "landingstrip"];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  const dataImages = await sort(randomReddit, "gif");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  //Select a random img from array
  return dataImages[randomNumber].link;
};

const amateurGifPorn = async () => {
  const subReddits = [
    "RealGirls",
    "Amateur",
    "amateurcumsluts",
    "AmateurPorn",
    "realasians",
    "FunWithFriends"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  const dataImages = await sort(randomReddit, "gif");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  return dataImages[randomNumber].link;
};

//College

const collegeGifPorn = async () => {
  const subReddits = [
    "collegesluts",
    "CollegeAmateurs",
    "CollegeInitiation",
    "bestofcollege",
    "LegalCollegeGirls",
    "fuckyeahcollegesluts"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  const dataImages = await sort(randomReddit, "gif");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  return dataImages[randomNumber].link;
};

const trapsGifPorn = async () => {
  const subReddits = [
    "traps",
    "Sissies",

    "FemBoys",
    "Tgirls",
    "GoneWildCD",
    "sissyhypno",
    "Sissyperfection",

    "SissyInspiration",

    "CagedAndFucked",
    "bitchsissies"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  console.log(randomReddit);
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber].link;
  } catch (error) {}
};

module.exports = {
  asianGifPorn,
  assGifPorn,

  analGifPorn,

  amateurGifPorn,

  collegeGifPorn,

  hairyPussyGifPorn,

  trapsGifPorn
};
