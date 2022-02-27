function jansNotation(arr) {
    let operands = [];
    for (let element of arr) {
        if (Number.isInteger(element)) {
            operands.push(element);
        } else {
            if (operands.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            let operationResult;
            switch (element) {
                case "+":
                    operationResult = operands[operands.length - 2] + operands[operands.length - 1];
                    break;
                case "-":
                    operationResult = operands[operands.length - 2] - operands[operands.length - 1];
                    break;
                case "*":
                    operationResult = operands[operands.length - 2] * operands[operands.length - 1];
                    break;
                case "/":
                    operationResult = operands[operands.length - 2] / operands[operands.length - 1];
                    break;
            }
            operands.splice(operands.length - 2, 2, operationResult);
        }
    }
    if (operands.length > 1) {
        console.log('Error: too many operands!');
        return;
    }
    console.log(operands[0]);
}
jansNotation([5,
    3,
    4,
    '*',
    '-'])