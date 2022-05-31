function juiceFlavors(arr) {
    const juices = new Map();
    const bottles = new Map();
    for (let entry of arr) {
        let [juice, quantity] = entry.split(' => ');
        if (juices.has(juice)) {
            let newTotal = Number(quantity) + juices.get(juice)
            let bttls = Math.floor(newTotal / 1000);
            if (bttls > 0) {
                newTotal -= bttls * 1000;
                juices.set(juice, newTotal);
                if (bottles.has(juice)) {
                    let currentBottles = bottles.get(juice);
                    bottles.set(juice, currentBottles + bttls);
                } else {
                    bottles.set(juice, bttls);
                }
            } else {
                juices.set(juice, newTotal);
            }

        } else {
            let bttls = Math.floor(Number(quantity) / 1000);
            if (bttls > 0) {
                newQuant = Number(quantity) - (bttls * 1000);
                juices.set(juice, newQuant);
                if (bottles.has(juice)) {
                    let currentBottles = bottles.get(juice);
                    bottles.set(juice, currentBottles + bttls);
                } else {
                    bottles.set(juice, bttls);
                }
            } else {
                juices.set(juice, Number(quantity));
            }
        };
    }
    let bottlesToPrint = Array.from(bottles)
    for (let [product, bottles] of bottlesToPrint) {
        console.log(`${product} => ${bottles}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('-----------');

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);