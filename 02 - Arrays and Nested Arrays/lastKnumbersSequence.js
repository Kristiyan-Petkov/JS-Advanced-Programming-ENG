function lastKnumbersSequence(n, k){
    let result = [1];
    for (let i = 1; i < n; i++){
        if (result.length < k){
            result.push(result.reduce((a,b) => a + b))
        } else {
            let sliced = result.slice(result.length - k).reduce((a,b) => a + b);
            result.push(sliced);
        }
    }
    return result;
}
lastKnumbersSequence(6, 3)