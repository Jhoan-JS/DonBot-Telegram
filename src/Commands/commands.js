const path = require('path')
const helpers = require(path.join(__dirname, '../helpers/help.js'))

const snoowrap = require('snoowrap');

const r = new snoowrap({
    userAgent: 'DonBot',
    clientId: '6iRNBv1tqxrCZA',
    clientSecret: 'M7UM2siJ0DpyzdO8D9iDVpsrGhLtHA',
    refreshToken: '948423918612-2gb6nqUlKGJjxXFsv3-fngIarqQ3sw'
});


//task for another day: add getHot,getNew and getRising

const asianPicPorn = async () => {

    // let dataPost = [];
    // const dataImages = []
    const subReddits = ['AsiansGoneWild', 'juicyasians', 'AsianPorn', 'AsianHotties', 'NSFW_Japan']

    const randomReddit = subReddits[helpers.generateRandomNumber(subReddits.length - 1)]


    // Call redditApi en collect the imgs
    const dataImages = await r.getSubreddit(randomReddit).getTop({ time: 'week', limit: 40 }).then(data => {
        return helpers.getDataPic(data)
        // console.log(data);
    }).catch(err => {
        return console.log(err);
    })



    console.log(randomReddit);
    console.log(dataImages);




    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1)

    //Select a random img from array
    return dataImages[randomNumber].link

}

const assPicPorn = async () => {

    const subReddits = ['ass', 'CuteLittleButts', 'bigasses', 'booty', 'pawg', 'cosplaybutts']


    const randomReddit = subReddits[helpers.generateRandomNumber(subReddits.length - 1)]

    console.log(randomReddit);
    const dataImages = await r.getSubreddit(randomReddit).getTop({ time: 'week', limit: 40 }).then(data => {
        return helpers.getDataPic(data)
    })


    console.log(dataImages.length);
    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1)

    //Select a random img from array
    return dataImages[randomNumber].link
}



const hairyPussyPicPorn = async () => {

    const subReddits = ['HairyPussy', 'RugsOnly', 'FireCrotch', 'landingstrip',]

    const randomReddit = subReddits[helpers.generateRandomNumber(subReddits.length - 1)]
    const dataImages = await r.getSubreddit(randomReddit).getTop({ time: 'week', limit: 40 }).then(data => {
        return helpers.getDataPic(data)
    })

    console.log(randomReddit);
    console.log(dataImages);

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1)

    //Select a random img from array
    return dataImages[randomNumber].link
}

const trapsPicPorn = async () => {

    const subReddits = ['traps', 'Sissies', 'femboy', 'FemBoys', 'Tgirls']
    const randomReddit = subReddits[helpers.generateRandomNumber(subReddits.length - 1)]
    const dataImages = await r.getSubreddit(randomReddit).getTop({ time: 'week', limit: 50 }).then(data => {

        return helpers.getDataPic(data)
    })

    const randomNumber = helpers.generateRandomNumber(dataImages.length - 1)


    return dataImages[randomNumber].link
}

module.exports = {
    asianPicPorn,
    assPicPorn,
    hairyPussyPicPorn,
    trapsPicPorn
}