function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = num;
    let actions = [op1, op2, op3, op4, op5];
    let counter = 0;
    for (let action of actions) {
        counter++
        switch (action) {
            case "chop":
                number /=2
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number++;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number *= 0.8;
                break;
        }
        if (counter < 5){
            console.log(number.toFixed(0));
        }
    }
    console.log(number.toFixed(1));  
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')