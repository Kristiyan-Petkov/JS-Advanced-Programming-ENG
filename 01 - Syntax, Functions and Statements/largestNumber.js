function largestNumber(one, two, three){
    let numbers = [one, two, three];
    let sorted = numbers.sort((a,b) => b - a);
    console.log(`The largest number is ${sorted[0]}.`);
}
largestNumber(5, -3, 16)