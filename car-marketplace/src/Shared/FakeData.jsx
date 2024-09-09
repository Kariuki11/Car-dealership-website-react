import { faker } from '@faker-js/faker';
function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        Image:'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=25XB&client=byo&paint=P0300&fabric=FKUSW&sa=S01ED,S02TF,S0302,S03AT,S03MB,S0420,S0459,S0494,S04AT,S04NW,S05A4,S05AC,S05AS,S05DM,S06AC,S0775,S07HW,S09T5&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0New',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList=faker.helpers.multiple(createRandomeCarList,{
    count:10
})

export default{
    carList
}