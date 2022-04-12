function subSum(arr, start, end) {
    if (arr.length == 0) {
        return 0;
    }
    if (Array.from(arr) == false) {
        return NaN
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    if (start < 0) {
        start = 0;
    }

    let newArr = arr.slice(start, end + 1);
    if (newArr.length == 0) {
        return 0;
    }
    if (typeof newArr == 'string') {
        return NaN;
    }
    let mapping = newArr.map(Number).reduce((a, b) => a + b);
    return mapping
}
console.log(subSum([10, 20, 30, 40, 50, 60], 1, 3));
console.log('----------');
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log('----------');
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('----------');
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log('----------');
console.log(subSum([], 1, 2));
console.log('----------');
console.log(subSum('text', 0, 2));






