const PornHub = require("pornhub.js");
const pornHub = new PornHub();

// const pornhub = require("@justalk/pornhub-api");

const path = require("path");
const helpers = require(path.join(__dirname, "../helpers/help.js"));

const getPornHubVideo = async () => {
  console.log("gola");
  const options = {
    page: helpers.generateRandomNumber(10),
    // production: "professional",
    ordering: "Most Relevant",
    premium: true
  };

  const videos = await pornHub
    .search("Video", "asian", options)
    .then((search) => {
      //   console.log(typeof data);
      return helpers.getDataVideo(search.data);
    })
    .catch((e) => {
      console.log(e);
    });

  // const videos = await pornhub
  //   .search("Ass", "Video", ["title", "Video", "premium"])
  //   .then((search) => {
  //     //   console.log(typeof data);
  //     console.log(search);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  // console.log(videos);
  const randomNumber = helpers.generateRandomNumber(videos.length - 1);

  return videos[randomNumber].url;
};

module.exports = {
  getPornHubVideo
};
