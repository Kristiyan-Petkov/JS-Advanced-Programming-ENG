function negativePositiveNumbers(arr){
    let result = [];
    for (let num of arr){
        let number = Number (num);
        if (number >= 0){
            result.push(number)
        } else {
            result.unshift(number)
        }
    }
    console.log(result.join(`\n`));
}
negativePositiveNumbers([7, -2, 8, 9])