exports.getGif = (data) => {
  const gifs = [];

  data.forEach((gif) => {
    gifs.push(gif.urls.hd);
  });

  return gifs;
};
