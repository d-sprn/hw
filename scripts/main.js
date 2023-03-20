"use strict";


//Task #1


const arr = [];

for (let i = 10; i < 21; i++){
    arr.push(i);
};



//Task #2



for(let i = 0; i < arr.length; i++){
    const num1 = (arr[i] ** 2);
};


// Task #3


const arr2 = [];

for (let i = 1; i < 11; i++){
    arr2.push(i);
};

for (let i = 0; i < arr2.length; i++){
    const num2 = (arr2[i] * 7);
};


// Task #4


const arr3 = [];

for (let i = 1; i < 16; i++){
    arr3.push(i);
}

let sum = null;

for(let i = 0; i < arr3.length; i++){
    sum += arr3[i];
};


// Task #5


const arr4 = [];

for (let i = 15; i < 36; i++){
    arr4.push(i);
}


let sum5 = null

for(let i = 0; i < arr4.length; i++){
    sum5 += arr4[i];
};


//Task #6


const arr6 = [];

for (let i = 1; i < 501; i++){
    arr6.push(i);
};


let average = null;
let sum6 = null;

for (let i = 0; i < arr6.length; i++){
    sum6 += arr6[i];

    average = sum6 / arr6.length;
}



// Task #7


const arr7 = [];
let arrEven = [];
let sum7 = null;


for (let i = 0; i < 81; i++){
    arr7.push(i);
    if (i % 2 === 0){
        arrEven.push(i);
    }
};

for (let i = 0; i < arrEven.length; i++){
    sum7 += arrEven[i];
};



// Task #8


const arr8 = [];
let arrOdd3 = [];

for (let i = 100; i < 201; i++){
    arr8.push(i);
    if (i % 3 === 0){
        arrOdd3.push(i)
    };
};



// Task #9 , 10 , 11


const number = Math.floor(Math.random()*100);

console.log(number);

const arrow = [];

let sumArrow = null;


for (let i = 0; i < number; i++){
    if (number % i === 0){
        arrow.push(i);
    };
};


for (let i = 0; i < arrow.length; i++){
    sumArrow += Number(arrow[i]);
};


// Task #12


let firstArrow = [];

let secondArrow = [];

let multiply = [];

for (let i = 0; i < 11; i++){
    firstArrow.push(i);
    secondArrow.push(i);
};
for (let i = 0; i < firstArrow.length; i++){
    multiply.push(`${firstArrow[i]} * ${secondArrow[i]} = ${(firstArrow[i]*secondArrow[i])}`);
}
