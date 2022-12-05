"use strict"

let num = 50;
while (num <= 55) {
    num++
    console.log(num);
};


let num = 50;

do {
    num++
    console.log(num);
}

while (num < 55); 

for (let i = 1; i < 4; i++) {

    console.log(i)

}


for(let i = 1; i < 10; i++){
    if(i === 6){
        continue
    };
    if(i === 3){
        continue
    }

    console.log(i)
}