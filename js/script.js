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








