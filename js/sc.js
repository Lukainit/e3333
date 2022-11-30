


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if(personalMovieDb < 10){
    console.log('Просмотрено довольно мало фильмов')
}else if(10 < 30){
    console.log('Вы классический зритель')
}else{
    console.log('произошла ошибка')
}; 

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '')



// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;









///////////////////////////////////////////////////////////////////////////////////////////////////////////////





let kirillKatas8n = 1200, //budget 1200$
    nazarHpxxph = 1000    //budget 1000$


//appleStore
const someProducts = { 
    iphone: {
        iphone8: 12000, 
        iphoneX: 1000, 
        iphoneSe: 500
    },
    headPhones: {
        airPods1: 300, 
        airPods2: 1100, 
        airPods3: 350,  
    },
    noteBook: {
        macBookPro: 400,
        macBookAir: 1000 
    }
}

if(kirillKatas8n > someProducts.iphone['iphone8']){
    console.log('Kirill bought a new iPhone')
}else if(kirillKatas8n > someProducts.noteBook['macBookAir']){
    console.log('Kirill bougt a new MacBookAir')
}else{
    console.log('Kirill doesn\'t have enough money')
}


const mcDonalds = {
    drinks: {
        cola: 12,
        fanta: 13, 
        sprite: 20
    },

    burgers: {
        bigBurger: 40, 
        smallBurger: 80
    },

    fries: {
        hotFriers: 30
    }
};

if(nazarHpxxph > mcDonalds.drinks.cola || mcDonalds.drinks['fanta']){
    console.log('Nazar got drunk')
}else if(nazarHpxxph > mcDonalds.burgers['bigBurger']){
    console.log('Nazar ate')
}else{
    console.log('Nazar hungry and he want drink')
}




for(let i = 2; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};



for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2; 

while(i <= 15){
    i++
    if(i % 2 === 0){
        continue;
    } else{
        console.log(i)
    }
}


const arrayOfNumbers = [5, 6, 7, 8, 9, 10];

for(let i = 0; i < arrayOfNumbers; i++){
    console.log(arrayOfNumbers)
};


for(let i = 20; i >= 10; i--){
    console.log(i);

    if(i === 13){
        break;
        console.log(i)
    }
}


let i = 3; 

while(i <= 15){
    i++;
    if(i % 4 == 0){
        continue;
    } else{
        console.log(i);
    }
}



let i = 3; 

while(i <= 15){
    i++;
    if(i % 2 === 0){
        continue;
    } else{
        console.log(i);
    }
}


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [arr];

console.log(arr[0])


[ 10, 20, 'Shopping - done', 40, 'Homework - done' ]




const lines = 8;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)



if (4 == 9){

}


a = 10; b = 10; c = a + b * 2; console.log(c / 2);

let nameShop = "AppleStor"

for(let someProducts = 'Apple'; someProducts < 10; someProducts.length){
    console.log(someProducts.length)
};


let i = 10; 

while(i <= 20){
    console.log(i)
}; 

if(4 == 4){
    console.log('d')
}

let num = 2; 

(num === 10) ? console.log('ok') : console.log('d')



const ShopBullshit = {

    phone: {
        iphoneX: ['Lightning', '83% Battery', 'New Case'],
        poco21: ['Nothing'],
        iphoneX: '0'
    },

    lapTop: {
        macbook: ['air', 'pro']
    }
};

if(ShopBullshit != ShopBullshit.phone){
    console.log('телефонов нету')
}else if(ShopBullshit !== ShopBullshit.phone){
    console.log('no')
}else{
    console.log('все есть')
};

]