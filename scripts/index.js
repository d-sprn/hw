"use strict";

// Task #1

const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);


user.name = 'Pete';
console.log(user);


delete user.name;
console.log(user);


// Task #2


const user_1 = {};
user_1.name = 'John';
console.log(user_1);

user_1.name = 'Pete';
console.log(user_1);  //Changed


// Task #3


const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function calcSalaries(){
    return +(salaries.John) + +(salaries.Ann) + +(salaries.Pete)
}

const sum = calcSalaries();

console.log(sum);