"use strict";

const age = prompt('Write your age');

const city = prompt('Write your city');

// const sport = prompt('Write your favourite sport');
let sport = null;


let userCountry = null;

let userSport = null;


if(age === true && city === true){
    sport = prompt('Write your favourite sport');
}

switch (city){
    case 'Kiev':
        userCountry = 'Ukraine';
        break;
    case 'moscow':
        userCountry = 'russia';
        break
    case 'minsk':
        userCountry = 'belorusia';
        break
}

switch (sport){
    case 'football':
        userSport = 'Ronaldo';
        break;
    case 'tennis':
        userSport = 'Federer';
        break;
    case 'hockey':
        userSport = 'Gretzky';
        break;
}

// let summary = ('Your age: ', age, 'You live in capital of: ', userCountry, 'You want to be like: ', userSport)

alert(('Your age: ', age, 'You live in capital of: ', userCountry, 'You want to be like: ', userSport))

// alert(summary)