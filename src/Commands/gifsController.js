const path = require("path");
const helpers = require("../helpers/help");
const redgifsAPI = require("../RedGifsAPI/controllers/redgifsAPI");
let redGifsNormalData = [];
//task for another day: add getHot,getNew and getRising
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

if (process.env.NODE_ENV === "production") {
  const getRedGifsNormalData = async () => {
    let veces = 0;
    console.log(veces);
    try {
      const data = await redgifsAPI.getRedGifsNormalData();

      redGifsNormalData = data;
    } catch (error) {}

    veces++;
  };
  getRedGifsNormalData();
}

const asianGifPorn = async () => {
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

  try {
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const assGifPorn = async () => {
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
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const analGifPorn = async () => {
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
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const hairyPussyGifPorn = async () => {
  const subReddits = ["HairyPussy", "RugsOnly", "FireCrotch", "landingstrip"];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

const amateurGifPorn = async () => {
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
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
};

//College

const collegeGifPorn = async () => {
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
    const dataImages = await sort(randomReddit, "gif");
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber];
  } catch (error) {}
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
    const data = await sort(randomReddit, "gif");

    const gifs = data.concat(redGifsNormalData);

    const randomNumber = helpers.generateRandomNumber(gifs.length - 1);

    return gifs[randomNumber];
  } catch (error) {}
};

const bisexualGifPorn = async () => {
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

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};
const pantiesGifPorn = async () => {
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

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

const petiteGifPorn = async () => {
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

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

const cuteGifPorn = async () => {
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

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "gif");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    return dataImages[randomNumber];
  } catch (error) {}
};

module.exports = {
  asianGifPorn,
  assGifPorn,

  analGifPorn,

  amateurGifPorn,

  collegeGifPorn,

  hairyPussyGifPorn,

  trapsGifPorn,
  bisexualGifPorn,
  pantiesGifPorn,
  cuteGifPorn,
  petiteGifPorn,
};
