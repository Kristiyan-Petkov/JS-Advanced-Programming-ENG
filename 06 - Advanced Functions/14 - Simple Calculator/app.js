function calculator() {
    const selectorA = document.querySelector("#num1");
    const selectorB = document.querySelector("#num2");
    const resultSelect = document.querySelector("#result");

    const calculate = {
        selector1: selectorA,
        selector2: selectorB,
        resultSelector: resultSelect,
        init: function init(selector1, selector2, resultSelector) {
            console.log('init activated');
        },
        add: function add() {
            let addition = Number (this.selector1.value) + Number (this.selector2.value);
            this.resultSelector.value = addition;
        },
        subtract: function subtract() {
            let substraction = Number (this.selector1.value) - Number (this.selector2.value);
            this.resultSelector.value = substraction;
        }
    }
    return calculate;
}

const calculate = calculator ();
calculate.init (this.selector1, this.selector2, document.querySelector("#result").textContent);
