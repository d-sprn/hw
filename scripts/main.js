"use strict";

const age = prompt('Write your age');

const city = prompt('Write your city');

let userCountry = null;

let userSport = null;

let sport = null;


if(age !== null && city !== null  ){
    sport = prompt('Write your favourite sport');
}



if(age === null){
    alert('Why you don\'t tell your age?');
}
if (city === null) {
    alert('Why you don\'t tell your city?');
}
if (sport === null){
    alert('Why you don\'t tell yur favourite sport?')
}

// function checkUser(){
//     if(age === null){
//       return alert('Why you don\'t tell your age?');
//     } else if (city === null) {
//         return alert('Why you don\'t tell your city?');
//     } else if (sport === null){
//         alert('Why you don\'t tell yur favourite sport?');
//     } else {
//         return alert(summary)
//     }
// }


// if(age === null){
//     alert('Why you don\'t tell your age?');
//     } else if (city === null) {
//     alert('Why you don\'t tell your city?');
//     } else if (sport === null){
//      alert('Why you don\'t tell yur favourite sport?');
//     } else {
//       alert(summary)
//     }

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

let summary = `Your age: ${age}, You live in capital of ${userCountry}, You want be like: ${userSport}`

alert(summary)