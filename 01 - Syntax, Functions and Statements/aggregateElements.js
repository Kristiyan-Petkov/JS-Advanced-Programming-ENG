function aggregateElements(input){
    let sum = input.reduce((a,b) => a + b);
    console.log(sum);

    let result = 0;
    for (let num of input){
        result += 1/num;
    }
    console.log(result);

    console.log(input.join(''));
}
aggregateElements([2, 4, 8, 16])