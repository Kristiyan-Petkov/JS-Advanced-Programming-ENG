function carFactory(obj) {
    //create vehicle
    let newObj = { model: obj.model };
    //add engine
    if (obj.power > 120) {
        newObj.engine = {
            power: 200,
            volume: 3500
        }
    } else if (obj.power > 90) {
        newObj.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        newObj.engine = {
            power: 90,
            volume: 1800
        }
    }
    //build carriage
    newObj.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    //put wheels on
    let wheelsSize = obj.wheelsize;
    if (wheelsSize % 2 === 0){
        newObj.wheels = [wheelsSize - 1, wheelsSize - 1, wheelsSize - 1, wheelsSize - 1];
    } else {
        newObj.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];
    }

    return newObj;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})