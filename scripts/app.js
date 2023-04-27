"use strict";

// Task #1

const arr1 = ['a', 'b', 'c', 'd'];

alert (`${arr1[0] + arr1[1]}  ,  ${arr1[2]+arr1[3]}`)

// Task #2


const arr2 = [2, 5, 3, 9];

const arrFunc2 =() =>{
   let a = arr2[0] * arr2[1];
    let b = arr2[2] * arr2[3];
    let result = a + b;
    return alert(result);
}
arrFunc2();

// Task #3

const arr3 =  [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];


alert(arr3[1][0]);


// Task #4


const object4 =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}

alert(object4['js'][0])


// Task #5


const arr5 = [];
let symb5 = 'x';

for (let i = 0; i < 10; i++){
    arr5.push(symb5);
    symb5 += 'x';
}


// Task #6


const arr6 = [];

let symb6 = 1;

for (let i = 1; i <= 9; i++) {
    arr6.push(`${i}`.repeat(i));
}



// Task #7


function arrayFill(value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}


// Task #8


const arr8 = [2, 4, 1, 3, 5, 6];

let sum8 = 0;
let count8 = 0;

for (let i = 0; i < arr8.length; i++) {
    sum8 += arr8[i];
    count8++;
    if (sum8 > 10) {
        break;
    }
}


// Task #9


const arr9 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr9.length / 2; i++) {
    const num = arr9[i];
    arr9[i] = arr9[arr9.length - 1 - i];
    arr9[arr9.length - 1 - i] = num;
}


// Task #10


const arr10 = [[9, 4, 7], [1, 3], [6]];

const sum10 = arr10.flat().reduce(function (sum, num){
    return sum + num
},0)



// Task #11


const arr11 = [[[2, 2], [3, 3]], [[4, 4], [5, 5]]];
const sum11 = arr11.flat(2).reduce(function (sum, num){
    return sum + num
},0)

console.log(sum11);
