function storeCatalogue(arr) {
    let catalogue = {};
    //fill catalogue with products
    for (let product of arr) {
        let [productName, productPrice] = product.split(' : ');
        catalogue[productName] = Number(productPrice);
    }
    //sort products in alphabetical order
    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    //print result
    let category = sorted[0][0][0];
    console.log(sorted[0][0][0]);
    for (let [product, price] of sorted) {

        if (product[0] != category) {
            category = product[0];
            console.log(category);
        }
        console.log(`  ${product}: ${price}`);
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])