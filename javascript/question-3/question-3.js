function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getInteger = getRandomInteger(5,10)
console.log('integer', getInteger)