
const numberOfFilms = +prompt('hello!', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;
        console.log('done')
    }else{
        console.log('error'); 
        i--
    }; 

}; 


if(personalMovieDb.count < 10){
    console.log("Просмотренно довольно мало фильмов")
} else if(personalMovieDb >= 10 && personalMovieDb.count < 30){
    console.log("вы классический зритель")
} else if(personalMovieDb.count >= 30){
    console.log("Вы киноман")
}else{
    console.log('error')
}




const personalMovieDb = +prompt('одна из твоих любимых серий?', '')


const mrRobotDb = {
    count: personalMovieDb, 
    dataB: {}
}; 

for(let i = 0; i < 2; i++){

const a = prompt("на сколько оцениваешь сериал?", ""),
      b = prompt("какая твоя последния серия?", '')

}




const helloFriend = +prompt('Hello friend. u really won\'t visit this site?', ''); 

if(helloFriend != ''){
    alert('okay.goodbye')
}else{
    console.log('all right'); 
}; 

const mrRobotDB = {
    count: helloFriend, 
    mrObject: {}, 
    mrMassivs: []
}; 


// const startTalkWithMe =

const a = prompt('u really wathched mr robot>', ''); 

if(a != '' && a != typeof(Number)){
    console.log('really work')
} 



const signIn = prompt('how old r u?', '');

if(signIn < 18){
   console.log((!= sighInApp));
}else if(signIn > 18){
    console.log('all right, u can sigh in')
}else{
    console.log('okay, good shit') 
}; 


const helloFriend = +prompt('Hello friend. u really won\'t visit this site?', ''); 

if(helloFriend == ''){
    alert('okay.goodbye')
}else{
    console.log('all right'); 
}; 

function sighInApp(){
const mrRobotDB = {
    count: helloFriend, 
    mrObject: {}, 
    signInBD: signIn
}; 

for(let i = 0; i < 2; i++){

const a = prompt('u really wathched mr robot>', ''); 

if(a == '' && a != typeof(Number)){
    console.log('this is person not watched mr robot')
}else{
    console.log('all right')
};

const b = prompt('how many episodes have you watched?', '');

if(b < 50 && b == ''){
    console.log('hmm')
}else{
    console.log('all right')
}; 


mrRobotDB.mrObject[a] = b; 

}; 
};

function calc(a, b){
    return (a + b)
};

console.log(calc(25, 3))
console.log(calc(25, 3))
console.log(calc(25, 3))
console.log(calc(25, 3))



let num = 10

function showFirstMessage (text, number) {
    console.log(text)
    console.log(number)
    let num = 3333; 
    console.log(num)

}; 

showFirstMessage('Hello', 3);
console.log(num); 

function calc(a , b){
    return (a + b)
}; 

console.log(calc(2,2));
console.log(calc(2,2));
console.log(calc(2,2));
calc(2,4);
calc(2,6);




const anotherNUm = ret()
console.log(anotherNUm)

const logger = function () {
    console.log("Hello")

}; 

logger();

const calc = (a, b) =>  {
    return a + b
}; 

console.log(calc(3,3))


// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.


function sayHello(name) { 

    console.log(sayHello);
    return 

}; 

function sayHello(name){
    console.log(sayHello)
    name = "Привет, Антон!"
    return name
}; 

console.log(sayHello());


const usdCurr = 3; 
const eEurCurr = 2; 

function convert(amount, curr){
    console.log(curr * amount); 
}; 

function convert(amount, curr){
    console.log(curr * amount); 
}; 

convert(500, usdCurr); 
convert(500, eEurCurr); 








const eurCurr = 15; 
const discount = 0.1; 

function convert(amount, curr){
    return curr * amount; 
};

function promotion(result){
    console.log(result * discount)
}

const res = convert(500, eurCurr)

promotion(res);


function test(){
    for(let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return
    }

    console.log('Done')
}

test(); 


// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

function sayHello (name){
    console.log(sayHello)
    return name 
}

sayHello('привет');

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.


// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


function returnNeighboringNumbers(number) {



    

}


function sayHello(name) {
    console.log(sayHello)
    return name 

}



// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.


function sayHello (name){
    return name
}







let helloFriend;

function start(){
    helloFriend = +prompt('hello, let\'s talk?:) pls, say yes');

    while (helloFriend == '' || helloFriend == null || isNaN(helloFriend)) {

        helloFriend = +prompt('hello, let\'s talk?:) pls, say yes');

    }
};

start(); 

// if(helloFriend == '' ){
//     alert('fuck u')
// }else{
//     console.log('good')
// }; 

const personalMovieDb = +prompt('all right, what is your favorite series? ', '')

const mrRobotDb = {
    count: personalMovieDb, 
    dataB: {}
}; 

for(let i = 0; i < 2; i++){

const a = prompt("how much do you rate it?", ""),
      b = prompt("what is your latest episode?", '')

        if(a != '' && b != '' && a.length < 50){
            console.log('good shit')
        }else{
            console.log('error')
        }; 

    };

if(mrRobotDb.count < 10){
    console.log('still not enough, well, nothing :)')
}else if(mrRobotDb.count <= 20){
    console.log('оооо, already watching season 2!')
}else if(mrRobotDb.count <= 30){
    console.log('fuck... this person is fierce:))')
}else{
    console.log("error 404"); 
};

