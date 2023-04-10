"use strict";


const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Task 1

const sumAndCount = (arr) => {
 let sum = 0;
 let count = 0;
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
   sum += arr[i];
   count++;
  }
 }
 return { sum, count };
}

console.log(sumAndCount(arr))


// Task 2


const findMinAndIndex = (array) => {
 const min = array.reduce((x, y) => Math.min(x, y));
 const index = array.indexOf(min)
 return { min, index }
}

console.log(findMinAndIndex(arr))

// Task 3

const findMaxAndIndex = (array) => {
 const max = array.reduce((x, y) => Math.max(x, y));
 const index = array.indexOf(max)
 return { max, index }
}

console.log(findMaxAndIndex(arr))

// Task 4
const minArr = [];
arr.forEach((item) => { if (item < 0 ) minArr.push(item) })

console.log(minArr.length)

// Task 5

const oddFunction = (array) => {
 const oddArr = [];
 array.forEach((item) => { if ((item > 0) && (item % 2 !== 0) ) oddArr.push(item)})
 return oddArr.length
}

console.log(oddFunction(arr))

// Task 6

const evenFunction = (array) => {
 const evenArr = [];
 array.forEach((item) => { if ((item > 0) && (item % 2 === 0) ) evenArr.push(item)})
 return evenArr.length
}

console.log(evenFunction(arr))

// Task 7
const sumEvenFunction = (array) => {
 const evenArr = [];
 array.forEach((item) => { if ((item > 0) && (item % 2 === 0) ) evenArr.push(item)})
 const sumEven = evenArr.reduce((a, b) => { return a + b})
 return sumEven
}
console.log(sumEvenFunction(arr))

// Task 8

const sumOddFunction = (array) => {
 const OddArr = [];
 array.forEach((item) => { if ((item > 0) && (item % 2 !== 0) ) OddArr.push(item)})
 const sumOdd = OddArr.reduce((a, b) => { return a + b})
 return sumOdd
}
console.log(sumOddFunction(arr))

// Task 9

const sumPositive = (firstFunc, secondFunc) => {
 const sum = firstFunc * secondFunc
 return sum
}

console.log(sumPositive(sumEvenFunction(arr), sumOddFunction(arr)))

// Task 10

const biggerNum = (array) => {
 const max = array.reduce((x, y) => Math.max(x, y));
 for (let i = 0; i < array.length; i++)
  if (array[i] < max) { array[i] = 0 }
 return array
}

console.log(biggerNum(arr))
