const path = require("path");
const helpers = require("../helpers/help");

//task for another day: add getHot,getNew and getRising
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});
const asianPicPorn = async () => {
  // let dataPost = [];
  // const dataImages = []
  const subReddits = [
    "AsiansGoneWild",
    "juicyasians",
    "AsianPorn",
    "AsianHotties",
    "NSFW_Japan",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  // Call redditApi en collect the imgs
  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const assPicPorn = async () => {
  const subReddits = [
    "ass",
    "CuteLittleButts",
    "bigasses",
    "booty",
    "pawg",
    "cosplaybutts",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const analPicPorn = async () => {
  const subReddits = [
    "anal",
    "AnalGW",
    "distension",
    "MasterOfAnal",
    "painal",
    "anal_gifs",
    "buttsthatgrip",
  ];
  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const hairyPussyPicPorn = async () => {
  const subReddits = ["HairyPussy", "RugsOnly", "FireCrotch", "landingstrip"];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const amateurPicPorn = async () => {
  const subReddits = [
    "RealGirls",
    "Amateur",
    "amateurcumsluts",
    "AmateurPorn",
    "realasians",
    "FunWithFriends",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

//College

const collegePicPorn = async () => {
  const subReddits = [
    "collegesluts",
    "CollegeAmateurs",
    "CollegeInitiation",
    "bestofcollege",
    "LegalCollegeGirls",
    "fuckyeahcollegesluts",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const femboyPicPorn = async () => {
  const subReddits = ["traps", "FemBoys", "traphentai", "DeliciousTraps"];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const data = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(data.length - 1);

    return data[randomNumber];
  } catch (error) {}
};

const trapsPicPorn = async () => {
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
    "bitchsissies",
    "SissyHentai",

    "Shemales",
    "transporn",
    "GoneWildTrans",
    "traphentai",
    "ShemalesParadise",
    "Tgifs",
    "bigdickgirl",
    "DeliciousTraps",
    "HungTraps",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];

  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const bisexualPicPorn = async () => {
  const subReddits = [
    "Bisexy",
    "bigonewild",

    "heteroflexible",
    "fucklicking",
    "bicuckold",
    "suckingtogether",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  console.log(randomReddit);
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};
const pantiesPicPorn = async () => {
  const subReddits = [
    "PantiesToTheSide",
    "panties",
    "Pantyfetish",
    "MyCalvins",
    "anklepanties",
    "ToplessInPanties",
    "undies",
    "sheerpanties",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  console.log(randomReddit);
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

const petitePicPorn = async () => {
  const subReddits = [
    "PetiteGoneWild",
    "dirtysmall",
    "HugeDickTinyChick",
    "xsmallgirls",
    "funsized",
    "petite",
    "skinnytail",
    "SexiestPetites",
    "PetiteGirls",
    "Waif",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  console.log(randomReddit);
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

const cutePicPorn = async () => {
  const subReddits = [
    "adorableporn",
    "TooCuteForPorn",
    "CuteModeSlutMode",
    "smilers",
    "sillygirls",
    "NSFWsmiles",
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  console.log(randomReddit);
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

module.exports = {
  asianPicPorn,

  assPicPorn,

  analPicPorn,

  amateurPicPorn,

  collegePicPorn,

  hairyPussyPicPorn,
  femboyPicPorn,
  trapsPicPorn,
  bisexualPicPorn,
  pantiesPicPorn,
  cutePicPorn,
  petitePicPorn,
};
