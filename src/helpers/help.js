//Functions helpers 

// function generateRandomNumber(number) {

// }


const getDataPic = (data) => {

    const images = []
    data.forEach(img => {
        if (img.url.includes('png') || img.url.includes('jpg')) {
            images.push({
                link: img.url,
                score: img.score
            })
        }
    });

    return images


}


const generateRandomNumber = number => {
    console.log(number);
    return Math.ceil(Math.random() * number)

}



module.exports = {
    generateRandomNumber,
    getDataPic
}