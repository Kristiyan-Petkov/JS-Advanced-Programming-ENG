function extractIncreasingSubsequence(arr){
    let result = [];
    let currentHighestNum = null;
    for (let num of arr){
        if (currentHighestNum == null || num >= currentHighestNum){
            result.push(num);
            currentHighestNum = num;
        }
    }
    return result;
}
console.log(extractIncreasingSubsequence([
    1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))