"use strict";

const age = prompt('Write your age');

const city = prompt('Write your city');

let userAge = null;

let userCountry = null;

let sport = null;

let userSport = null;



if(age !== null && city !== null){
    sport = prompt('Write your favourite sport');
}


if(age === null){
    userAge = 'Why you don\'t tell your age?';
}else if(age === ''){
    userAge = 'Why you don\'t tell your age?';
}else{
    userAge = `Your age: ${age}`
}


if (city === null) {
    userCountry = 'Why you don\'t tell your city?';
}else if(city === ''){
    userCountry = 'Why you don\'t tell your city?';
} else if(city === 'Kiev'){
    userCountry = 'You live in capital of Ukraine';
} else if(city === 'moscow'){
    userCountry = 'You live in capital of russia';
}else if(city === 'minsk'){
    userCountry = 'You live in capital of belarusia';
}else{
    userCountry = `You live in city; ${city}`
}


if (sport === null){
    userSport = 'Why you don\'t tell your favourite sport?';
} else if(sport === ''){
    userSport = 'Why you don\'t tell your favourite sport?';
}


switch (sport){
    case 'football':
        userSport = 'You want be like: Ronaldo';
        break;
    case 'tennis':
        userSport = 'You want be like: Federer';
        break;
    case 'hockey':
        userSport = 'You want be like: Gretzky';
        break;
}



let summary = `${userAge},\n ${userCountry},\n ${userSport}!!!`


alert(summary)

