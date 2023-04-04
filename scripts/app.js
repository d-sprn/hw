"use strict";

// Task #1


const firstArray1 = [1, 2, 3] ;
const secondArray1 =  [4, 5, 6];

const resultArray1 = [...firstArray1, ...secondArray1];


// Task #2


const array2 = [1, 2, 3];

array2.reverse()


// Task #3


const array3 = [1, 2, 3];

array3.push(4, 5, 6)

// Task #4


const array4 = [1, 2, 3];

array4.unshift(4, 5, 6);


// Task #5


const array5 =  ['js', 'css', 'jq'];

alert(array5[0]);


// Task #6


const array6 =  ['js', 'css', 'jq'];

alert(array6[array5.length-1]);


// Task #7


const array7 = [1, 2, 3, 4, 5];

const resultArray7 = array7.splice(0,3);


// Task #8


const array8 = [1, 2, 3, 4, 5];

const resultArray8 = array8.splice(3, array8.length);


// Task #9


const array9 = [1, 2, 3, 4, 5];

array9.splice(1,2)


// Task #10


const array10 = [1, 2, 3, 4, 5];

const resultArray10 = array10.splice(1,3);



// Task #11


const array11 = [1, 2, 3, 4, 5];

array11.splice(4, 0, 'a', 'b', 'c');



// Task #12


const array12 = [1, 2, 3, 4, 5];

array12.splice(1, 0, 'a', 'b');
array12.splice(array12.length-1,0, 'c');
array12.splice(array12.length, 0, 'e');


// Task #13


const array13 = [3, 4, 1, 2, 7];

array13.sort();


// Task #14


const array14 = [5, 6, 7, 8, 9];
let sum14 = null;

for(let i = 0; i < array14.length; i++){
    sum14 += array14[i];
}


// Task #15


let array15 = [5, 6, 7, 8, 9];

const arrFunc15 = () => {

    let sum15 = [];

    for (let i = 0; i < array15.length; i++){
        sum15.splice(i, 0, Math.pow(array15[i], 2));
    }
    return array15 = sum15
}

arrFunc15()


// Task #16

const arrFunc16 = (value) => {
    return value < 0;
}
let array16 = [1,-3, 5, 6,-7, 8, 9,-11].filter(arrFunc16);


// Task #17

const arrFunc17 = (value) => {
    return value % 2 === 0;
}

let array17 = [1,-3, 5, 6,-7, 8, 9,-11].filter(arrFunc17);


// Task #18


const arrFunc18 = (word) => {
    return word.length > 5
}

const array18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].filter(arrFunc18)



// Task #19


const arrFunc19 = (array) => {
    return Array.isArray(array)
}

const array19 = [1, 2, [3, 4], 5, [6, 7]].filter(arrFunc19)


// Task #20


const arrFunc20 = (num) => {
    return num < 0;
}

const array20 =  [5,-3, 6,-5, 0,-7, 8, 9];
const result20 = array20.filter(arrFunc20)

console.log(result20.length)












