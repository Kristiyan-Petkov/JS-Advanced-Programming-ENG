const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe("Tests of object", function () {
    describe("Tests of sumNumber", function () {
        it("inputs are not as required", function () {
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers('', '')).to.be.undefined;
            expect(testNumbers.sumNumbers(1)).to.be.undefined;
            expect(testNumbers.sumNumbers()).to.be.undefined;
            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [])).to.be.undefined;
            expect(testNumbers.sumNumbers([], [])).to.be.undefined;
            expect(testNumbers.sumNumbers({}, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;
            expect(testNumbers.sumNumbers({}, {})).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '1')).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
        });
        it("works with numbers", function () {
            expect(testNumbers.sumNumbers(1, 1)).to.equal(2.00);
            expect(testNumbers.sumNumbers(1, -1)).to.equal(0.00);
            expect(testNumbers.sumNumbers(-1, 1)).to.equal(0.00);
            expect(testNumbers.sumNumbers(-1, -1)).to.equal(-2.00);

        });
        it("works with decimals", function () {
            expect(testNumbers.sumNumbers(1.378, 1.622)).to.equal(3.00);
            expect(testNumbers.sumNumbers(1.378, 1.600)).to.equal(2.98);
            expect(testNumbers.sumNumbers(-1.378, -1.600)).to.equal(-2.98);
            expect(testNumbers.sumNumbers(-1.378, 1.600)).to.equal(0.22);
        });
    });

    describe("numberChecker", function () {
        it("input is not as required", function () {
            expect(testNumbers.numberChecker('')).to.equal('The input is not a number!');
            expect(testNumbers.numberChecker()).to.equal('The input is not a number!');
            expect(testNumbers.numberChecker([])).to.equal('The input is not a number!');
            expect(testNumbers.numberChecker({})).to.equal('The input is not a number!');
            expect(testNumbers.numberChecker('a')).to.equal('The input is not a number!');
            expect(testNumbers.numberChecker(null)).to.equal('The input is not a number!');
        });
        it("return even correctly", function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
        });
        it("return odd correctly", function () {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        });
    });

    describe("averageSumArray", function () {
        it("returns correctly", function () {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1,-2,-3])).to.equal(-2);
            expect(testNumbers.averageSumArray([-1,-1])).to.equal(-1);
            expect(testNumbers.averageSumArray([0])).to.equal(0);
            expect(testNumbers.averageSumArray([0,0])).to.equal(0);v
        });
    });
});
