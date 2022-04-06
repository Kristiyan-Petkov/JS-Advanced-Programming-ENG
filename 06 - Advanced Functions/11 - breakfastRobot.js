function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    const stock = {
        flavour: 0,
        carbohydrate: 0,
        fat: 0,
        protein: 0,
    }

    const result = function manager(str) {
        let tokens = str.split(' ');
        let command = tokens[0];
        let var1 = tokens[1];
        let quantity = Number (tokens[2]);

        switch (command) {
            case "restock":
                stock[var1] += quantity;
                return 'Success';
                break;
            case "prepare":
                let cooking = Object.entries(recipes[var1]);
                
                for (let [ingredient, quant] of cooking){
                    if (stock[ingredient] * quantity >= quant){
                        
                    } else {
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }
                for (let [ing, qua] of cooking){
                    stock[ing] -= qua;
                }
                return 'Success';
                break;
            case "report":
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
                break;
        }
    }
    return result
}


result = solution();
console.log(result('prepare turkey 1'));
console.log(result('restock protein 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock carbohydrate 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock fat 10'));
console.log(result('prepare turkey 1'));
console.log(result('restock flavour 10'));
console.log(result('prepare turkey 1'));
console.log(result('report'));

var expectationPairs = [
    ['prepare turkey 1', 'Error: not enough protein in stock'],
    ['restock protein 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough carbohydrate in stock'],
    ['restock carbohydrate 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough fat in stock'],
    ['restock fat 10', 'Success'],
    ['prepare turkey 1', 'Error: not enough flavour in stock'],
    ['restock flavour 10', 'Success'],
    ['prepare turkey 1', 'Success'],
    ['report', 'protein=0 carbohydrate=0 fat=0 flavour=0']
];