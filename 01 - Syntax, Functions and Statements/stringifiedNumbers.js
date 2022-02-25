function stringifiedNumbers(strA, strB){
    let numA = Number (strA);
    let numB = Number (strB);
    let result = 0;

    for (let i = numA; i <= numB; i++){
        result += i;
    }
    console.log(result);
}
stringifiedNumbers('1', '5' )