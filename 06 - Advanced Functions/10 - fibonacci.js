function result (){
    const currentNum = [];
    return function (){
        if (currentNum.length <= 1){
            currentNum.push(1);
            return 1;
        } else {
            let nextSum = currentNum[0] + currentNum[1];
            currentNum.unshift(nextSum);
            return nextSum
        }
    }
}