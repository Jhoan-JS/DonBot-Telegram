//Functions helpers 

// function generateRandomNumber(number) {

// }

const generateRandomNumber = number => {
    return Math.ceil(Math.random() * number)
}



module.exports = {
    generateRandomNumber
}