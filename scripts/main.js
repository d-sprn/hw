"use strict";

let userNumber = +prompt('Write number.');

let result = null;

for (let i = 0; i < userNumber; i++){
    if (userNumber / i === 1){
        result = false
    }

}

console.log(result)