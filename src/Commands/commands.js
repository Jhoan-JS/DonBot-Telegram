const path = require("path");
const helpers = require("../helpers/help");

//task for another day: add getHot,getNew and getRising
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: "DonBot",
  clientId: "6iRNBv1tqxrCZA",
  clientSecret: "M7UM2siJ0DpyzdO8D9iDVpsrGhLtHA",
  refreshToken: "948423918612-2gb6nqUlKGJjxXFsv3-fngIarqQ3sw"
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
  const dataImages = await sort(randomReddit, "pic");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  //Select a random img from array
  return dataImages[randomNumber].link;
};

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

  const dataImages = await sort(randomReddit, "pic");

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
  const dataImages = await sort(randomReddit, "pic");

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

const hairyPussyPicPorn = async () => {
  const subReddits = ["HairyPussy", "RugsOnly", "FireCrotch", "landingstrip"];

  const randomReddit =
    subReddits[helpers.generateRandomNumber(subReddits.length - 1)];
  const getSort = [helpers.getNew, helpers.getTop, helpers.getHot];
  const sort = getSort[helpers.generateRandomNumber(getSort.length - 1)];

  const dataImages = await sort(randomReddit, "pic");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  //Select a random img from array
  return dataImages[randomNumber].link;
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

  const dataImages = await sort(randomReddit, "pic");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  return dataImages[randomNumber].link;
};

const ameteurGifPorn = async () => {
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

  const dataImages = await sort(randomReddit, "pic");

  const randomNumber = helpers.generateRandomNumber(dataImages.length - 1);

  return dataImages[randomNumber].link;
};

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

  const dataImages = await sort(randomReddit, "pic");

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
  asianPicPorn,
  asianGifPorn,
  assPicPorn,
  assGifPorn,
  analPicPorn,
  analGifPorn,
  amateurPicPorn,
  ameteurGifPorn,
  collegePicPorn,
  collegeGifPorn,
  hairyPussyPicPorn,
  trapsPicPorn,
  trapsGifPorn
};
