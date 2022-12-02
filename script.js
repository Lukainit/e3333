function porscheShop(name){

    let budget = 100000 //"$"

    const cars = {
        someCars : {
            turBo911: 50999,
            turBoS911: 2000, 
            panaMera : 4099,
            Macan: 120999
        },

        motorbike : {
            modelOne: 20999, 
            modelTwo: 30999,
            modelThree: 21000, 
        }

    };

    if(budget >= cars.someCars['panaMera'] || cars.someCars['turBo911'] || cars.someCars['turBoS911']){
        console.log('u have new car, great Job')
    }else if(budget >= motorbike.modelOne || modelTwo || modelThree){
        console.log('u can\'t- badly paid')
    }else{
        console.log(':c')
    }


};

porscheShop(Nazar);




