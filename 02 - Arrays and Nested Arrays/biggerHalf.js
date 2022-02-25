function biggerHalf(arr) {
    let sorted = arr
        .map(Number)
        .sort((a, b) => a - b);
    
    let finalSlice; 
    if (arr.length % 2 === 0){
        finalSlice = sorted.slice(arr.length/2)
    } else {
        finalSlice = sorted.slice(arr.length/2)
    }

    return finalSlice;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])