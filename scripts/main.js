"use strict";



function fib(n){
    let firstNumb = 1;
    let secondNumb = 1;
    for (let i = 3; i <=n ; i++){
        let thirdNumber = firstNumb + secondNumb;
        firstNumb = secondNumb;
        secondNumb = thirdNumber;
    }
    return secondNumb;
}

alert(fib(3))