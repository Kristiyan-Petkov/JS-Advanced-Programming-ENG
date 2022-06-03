function carProductionRegister(arr) {
    let production = {};
    for (let inputLine of arr) {
        let [make, model, quantity] = inputLine.split(' | ');
        if (production[make] == undefined) {
            production[make] = new Map();
            production[make].set(model, Number(quantity));
        } else if (production[make].has(model)) {
            let newQuantity = production[make].get(model) + Number(quantity);
            production[make].set(model, newQuantity);
        } else {
            production[make].set(model, Number(quantity));
        }
    }
    let toPrint = Object.entries(production);
    for (let [brand, models] of toPrint) {
        console.log(brand);
        let modelsToPrint = Array.from(models);
        for (let [model, quant] of modelsToPrint) {
            console.log(`###${model} -> ${quant}`);
        }
    }
}

carProductionRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volvo | XC90 | 1000000',
    'Fiat | Panda | 1000000',
    'Fiat | Uno | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])