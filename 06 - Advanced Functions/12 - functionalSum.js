function solve (n) {
    let sum = n;

    return function solve(number) {
        sum += number;
        solve.toString = function () {
            return sum;
        };
        return solve;
    }
}

console.log(solve(1).toString());
