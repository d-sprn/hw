'use strict'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// indexOf

const indexOfFunc = (arr, item, index = 0) => {
    for (let i = index; i < arr.length; i++ ){
        if (arr[i] === item){
            return i;
        }
    }
    return -1;
}

// lastIndexOf

const lastIndexOfFunc = (arr, item, index = arr.length - 1) => {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}


// find

const currentToDoList = [
    'смотреть сериальчики',
    'читать книгу',
    'пить кофе',
    'гладить кота',
    'гулять',
]
const find = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return item;
    }
    return undefined;
}


// findIndex

const findIndex = (arr, item) =>{
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item) return i;
    }
    return -1
}


// includes

const includes = (arr, item) =>{
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item) return true;
    }
    return false
}



// every

let result = true

for (let i = 0; i < array.length; i++){
    if (array[i] >= 10) {
        result = false;
        break
    }
}


// some

let result2 = false;

for (let i = 0; i < currentToDoList.length; i++){
    if (currentToDoList[i]  === 'гулять') {
        result2 = true;
        break
    }
}

