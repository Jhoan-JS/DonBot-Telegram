const path = require('path')
const helpers = require(path.join(__dirname, '../helpers/help.js'))

const snoowrap = require('snoowrap');

const r = new snoowrap({
    userAgent: 'DonBot',
    clientId: '6iRNBv1tqxrCZA',
    clientSecret: 'M7UM2siJ0DpyzdO8D9iDVpsrGhLtHA',
    refreshToken: '948423918612-2gb6nqUlKGJjxXFsv3-fngIarqQ3sw'
});


const asianPicPorn = async () => {
    console.log("hi");
    let dataPost = [];
    const dataImages = []

    const subreddit = await r.getSubreddit('AsiansGoneWild').getTop({ time: 'week', limit: 50 }).then(data => {
        data.forEach((post) => {
            dataPost.push({
                link: post.url,

            })
        });
        dataPost.forEach((post) => {
            if (post.link.includes('png') || post.link.includes('jpg')) {
                dataImages.push({
                    link: post.link
                })
            }
        })
    })







    console.log(dataImages.length - 1);

    const numberImages = helpers.generateRandomNumber(dataImages.length - 1)


    return dataImages[numberImages].link

}


module.exports = {
    asianPicPorn
}