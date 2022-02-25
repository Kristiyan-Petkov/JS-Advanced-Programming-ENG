function sortingNumbers(arr){
    let sorted = arr.sort((a,b) => a - b);
    let result = [];
    let length = sorted.length/2;

    for (let i = 0; i < length; i++){
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    return result.filter(Number);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99])