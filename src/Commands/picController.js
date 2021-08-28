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
const asianPicPorn = async () => {
  // let dataPost = [];
  // const dataImages = []
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
  // Call redditApi en collect the imgs
  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
  } catch (error) {}
};

const assPicPorn = async () => {
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

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
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
    "buttsthatgrip"
  ];
  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];
  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
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
    return dataImages[randomNumber].link;
  } catch (error) {}
};

const amateurPicPorn = async () => {
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

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
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
    "fuckyeahcollegesluts"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
  } catch (error) {}
};

const trapsPicPorn = async () => {
  const subReddits = [
    "traps",
    "Sissies",
    "femboy",
    "FemBoys",
    "Tgirls",
    "GoneWildCD",
    "sissyhypno",
    "Sissyperfection",
    "sissykik",
    "Sissygasms",
    "SissyInspiration",

    "CagedAndFucked",
    "bitchsissies"
  ];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];

  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];

  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  try {
    const dataImages = await sort(randomReddit, "pic");

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

    //Select a random img from array
    return dataImages[randomNumber].link;
  } catch (error) {}
};

module.exports = {
  asianPicPorn,

  assPicPorn,

  analPicPorn,

  amateurPicPorn,

  collegePicPorn,

  hairyPussyPicPorn,

  trapsPicPorn
};
