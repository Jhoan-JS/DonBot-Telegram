const axios = require("axios");

const customData = []; // Data with specifics paramets
const helpers = require("../helpers/helper");

exports.getRedGifsNormalData = async () => {
  try {
    const request = await axios.get(
      `https://api.redgifs.com/v2/gifs/search?search_text=Trans,&count=400`
    );

    const data = await helpers.getGif(request.data.gifs);

    return data;
  } catch (error) {
    console.log(error);
  }
};
