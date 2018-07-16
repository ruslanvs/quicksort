// const exports = module.exports = {};
const count = 25
const min = 0
const max = 100000

function generateRandomSetOfIntegers (min, max, count){
    const randomSetOfIntegers = [];
    for (i = 0; i < count; i++ ){
        const randomInt = Math.floor(Math.random() * (max - min)+min);
        randomSetOfIntegers.push(randomInt);
    }
    return randomSetOfIntegers
}
module.exports = generateRandomSetOfIntegers(min, max, count)