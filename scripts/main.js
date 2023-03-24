"use strict";


//Task #1


const arr1 = [];

for (let i = 10; i < 21; i++){
    arr1.push(i);
}

console.log(arr1);

//Task #2


let arr2 = [];

for(let i = 0; i < arr1.length; i++){
     arr2.push(arr1[i] ** 2);
}

console.log(arr2);

// Task #3


const arr3 = [];

let arrResult3 = [];

for (let i = 1; i < 11; i++){
    arr3.push(i);
}

for (let i = 0; i < arr3.length; i++){
    arrResult3.push(arr3[i] * 7);
}

console.log(arrResult3);

// Task #4


const arr4 = [];

let sum4 = null;


for (let i = 1; i < 16; i++){
    arr4.push(i);
}


for(let i = 0; i < arr4.length; i++){
    sum4 += arr4[i];
}

console.log(sum4);


// Task #5


const arr5 = [];

for (let i = 15; i < 36; i++){
    arr5.push(i);
}


let sum5 = null;

for(let i = 0; i < arr5.length; i++){
    sum5 += arr5[i];
}

console.log(sum5);


//Task #6


const arr6 = [];

for (let i = 1; i < 501; i++){
    arr6.push(i);
}


let average6 = null;
let sum6 = null;

for (let i = 0; i < arr6.length; i++){
    sum6 += arr6[i];

    average6 = sum6 / arr6.length;
}


console.log(average6);


// Task #7


const arr7 = [];
let arrEven7 = [];
let sum7 = null;


for (let i = 0; i < 81; i++){
    arr7.push(i);
    if (i % 2 === 0){
        arrEven7.push(i);
    }
}

for (let i = 0; i < arrEven7.length; i++){
    sum7 += arrEven7[i];
}


console.log(sum7);


// Task #8


const arr8 = [];
let arrOdd8 = [];

for (let i = 100; i < 201; i++) {
    arr8.push(i);
    if (i % 3 === 0) {
        arrOdd8.push(i)
    }
}

console.log(arrOdd8)


// Task #9 , 10 , 11


const number = Math.floor(Math.random()*100);

console.log(`Random number ${number} `);

const arrow9 = [];

const arrow10 = [];

let sumArrow11 = null;


for (let i = 0; i < number; i++){
    if (number % i === 0){
        arrow9.push(i);
    }
}


console.log(arrow9);


for (let i = 0; i < arrow9.length; i++){
    if (arrow9[i] % 2 === 0 ){
        arrow10.push(arrow9[i]);
    }
}


console.log(arrow10)


for (let i = 0; i < arrow10.length; i++){
    sumArrow11 += Number(arrow10[i]);
}


console.log(sumArrow11)


// Task #12


let firstArrow12 = [];

let secondArrow12 = [];

let multiply12 = [];

for (let i = 0; i < 11; i++){
    firstArrow12.push(i);
    secondArrow12.push(i);
}

for (let i = 0; i < firstArrow12.length; i++){
    multiply12.push(`${firstArrow12[i]} * ${secondArrow12[i]} = ${(firstArrow12[i]*secondArrow12[i])}`);
}

console.log(multiply12);