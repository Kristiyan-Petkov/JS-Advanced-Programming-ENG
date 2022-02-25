function sameNumbers(num) {
    let numToString = num.toString();
    let char = numToString[0];
    let checkResult = true;
    for (let chars of numToString) {
        if (chars != char) {
            console.log('false');
            checkResult = false;
            break;
        }
    }
    if (checkResult) {
        console.log('true');
    }
    let sum = numToString
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(sum);
}
sameNumbers(1234)