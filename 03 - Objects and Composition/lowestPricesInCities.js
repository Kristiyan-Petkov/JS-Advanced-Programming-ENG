function lowestPricesInCities(arr) {
    let products = [];

    for (let item of arr) {
        let [town, name, price] = item.split(' | ');
        if (products[name] == undefined) {
            products[name] = {
                price: Number(price),
                town,
            }
        } else {
            let control = products[name]['price'];
            if (price < control) {
                products[name]['price'] = Number(price);
                products[name]['town'] = town;
            }
        }
    }
    let result = Object.entries(products);
    for (let product of result) {
        console.log(`${product[0]} -> ${product[1]['price']} (${product[1]['town']})`);
    }
}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])