const randomArray = require('./randomArray');

console.log(randomArray)

let didSort = true;
while (didSort == true){
    didSort = false;
    for (i = 0; i < randomArray.length - 1; i++){
        if (randomArray[i] > randomArray[i + 1]){
            didSort = true
            let temp = randomArray[i]
            randomArray[i] = randomArray[i + 1]
            randomArray[i + 1] = temp
        }
    }
}

console.log(randomArray)