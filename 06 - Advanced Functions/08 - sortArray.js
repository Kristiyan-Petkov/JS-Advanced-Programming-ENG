var inputArray = [3, 1, 2, 10];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = [1, 2, 3, 10];

function result(arr, str) {
    const source = arr;
    if (str != 'asc') {
        source.sort((a, b) => b - a);
    } else {
        source.sort((a, b) => a - b);
    }
    return source
}


console.log(sortedArray);