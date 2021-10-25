const path = require("path");
const commands = require("../Commands/picController");
const snoowrap = require("snoowrap");

const r = new snoowrap({
  userAgent: "DonBot",
  clientId: "6iRNBv1tqxrCZA",
  clientSecret: "M7UM2siJ0DpyzdO8D9iDVpsrGhLtHA",
  refreshToken: "948423918612-2gb6nqUlKGJjxXFsv3-fngIarqQ3sw"
});

const getDataPic = (data) => {
  const images = [];
  data.forEach((img) => {
    if (img.url.includes("png") || img.url.includes("jpg")) {
      images.push({
        link: img.url,

        score: img.score
      });
    }
  });

  return images;
};
const getDataGif = async (data) => {
  const images = [];

  data.forEach((img) => {
    if (img.url.includes(".gif") || img.url.includes(".mp4")) {
      //Replace gifv to mp4
      img.url = img.url.replace(".gifv", ".mp4");
      console.log(img.url);
      images.push({
        link: img.url,
        score: img.score
      });
    }
  });


  console.log(images);
  return images;
};

// const getDataVideo = (data) => {
//   const videos = [];

//   data.forEach((video) => {
//     videos.push({
//       titlel: video.title,
//       url: video.url,
//       previewl: video.preview,
//       mime_type: "video/mp4"
//     });
//     // console.log(video);
//   });

//   return videos;
// };

const generateRandomNumber = (number) => {
  return Math.ceil(Math.random() * number);
};

const getNew = async (randomReddit, type) => {
  return await r
    .getSubreddit(randomReddit)
    .getNew({
      time: "all",
      limit: 600,
      search: "gif"
    })
    .then((data) => {
      if (type == "pic") {
    
        return getDataPic(data);
      } else {
        return getDataGif(data);
      }
    })
    .catch((e) => {
      return e;
    });
};
const getTop = async (randomReddit, type) => {
  return await r
    .getSubreddit(randomReddit)
    .getTop({
      time: "all",
      limit: 400,
      search: "gif"
    })
    .then((data) => {
      if (type == "pic") {
        return getDataPic(data);
      } else {
        return getDataGif(data);
      }
    })
    .catch((e) => {
      return e;
    });
};

const getHot = async (randomReddit, type) => {
  return await r
    .getSubreddit(randomReddit)
    .getHot({
      time: "all",
      limit: 400,
      search: "gif"
    })
    .then((data) => {
      if (type == "pic") {
        return getDataPic(data);
      } else {
        return getDataGif(data);
      }
    })
    .catch((e) => {
      return e;
    });
};

//List of commands of fuctions

// const getFuctionPic = (command) => {
//   const listFuctionsPic = { asian: function( asianPicPorn };
//   let FuctionPic = "";
//   // for (const fuction in listFuctionsPic) {
//   //   if (command === fuction) {
//   //     return (FuctionPic = listFuctionsPic[fuction]);
//   //   }
//   // }

//   return listFuctionsPic.asian;
// };

module.exports = {
  generateRandomNumber,
  getDataPic,
  getDataGif,

  getNew,
  getTop,
  getHot
};
