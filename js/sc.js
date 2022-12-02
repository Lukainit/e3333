


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


let numBer = 50; 

while(numBer <= 55) {
    numBer+-
    console.log(numBer)

    if(numBer === 54){
        break
        
    }
};


const num = 1000; 

switch (num) {
    case 49: 
        console.log('ok');
        break;
    case 100: 
        console.log('100')
        break;
    default: 
        console.log('нихуя не верно')
        break

};



const cola = 4,
      fanta = 5, 
      sprite = 4 

let budget = 0; 

if(cola && fanta <= budget ){
    console.log('ты напился')
}else{
    console.log('у тебя попросту нету денег. сорян чувак')
};

 const hamburger = true
 const fries = !true

 if(hamburger && fries){
    console.log('я сыт');
 }else if (hamburger && fries === false ){
    console.log('ничего нету');
 };






const shcool = "Bullshit"

let ok = 'school'

if(shcool == 'Bullshit'){
    console.log( `${shcool} = ${ok}`)
}else if(shcool === 1){
    for(let i = 0; i < 10; i++){
        console.log(i)
        if(i == 8){
            break
        }
    }
}; 




const people = null;

const city = {
    Dnepr: {
        people: ['good', 'with money']
    },

    newYork: {
        money: false,
    }
};

console.log(city.Dnepr['0']);



const hamburger = true; 

const fries = !true; 

if(hamburger && fries){
    console.log('я сыт!')
}

console.log((hamburger && fries));


const hamBurger = 3; 
const frIes = 0; 
const coLa = 0;

console.log((hamBurger === 3 && frIes && coLa))

console.log(1 && 4);

console.log(null && !3)

console.log(true && true); 

if(hamBurger === 1 && frIes && coLa){
    console.log('all right')
}else{
    console.log('bad')
};


console.log(null && undefined)




console.log(1 && !1);

console.log(null && undefined)

console.log( 0 && ''); 


const hamBurger = 0; 
const fries = 3; 
const cola = 0; 
const nuggets = 2

console.log(hamBurger === 3 && cola === 2 || fries === 3 && nuggets); 

 

if(hamBurger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log('все довольны')
}else{
    console.log('мы уходим')
};


let jonhReport, alexReport, sameReport = 'done';

console.log( jonhReport || alexReport || sameReport);



if( jonhReport || alexReport || sameReport){
    console.log('bad')
}else{
    console.log('good')
}


console.log(1 && 2 && 0); 

console.log(1 && 5);



console.log(!1 && 2 || !3)

console.log(25 || null && !3);

console.log( NaN || null || !3 || undefined || 5);


 
console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}









const modelS = 2000; 
const modelX = 0000; 
const modelY = 2000; 
const modelXS = 2000; 

if(modelS === 4000 || modelX === 5000 || modelY === 1000 && modelXS){
    console.log('у нас есть две тачки')
}
         