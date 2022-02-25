function processOddPositions(arr) {
    let sorted = [];
    for (let i = 1; i <= arr.length; i+=2){
        sorted.push(arr[i])
    }
    let result = sorted.reverse().map(a => a * 2);
    return result;
}
processOddPositions([3, 0, 10, 4, 7, 3])