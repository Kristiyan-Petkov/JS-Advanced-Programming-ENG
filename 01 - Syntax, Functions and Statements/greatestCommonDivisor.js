function greatestCommonDivisor(numA, numB){
    let gcd = 0;
    for (let i = numB; i >= 1; i--){
        let integerA = numA/i;
        let integerB = numB/i;
        if (integerA % 1 == 0 && integerB % 1 == 0){
            console.log(i);
            return;
        }
    }
}
greatestCommonDivisor(16, 4)