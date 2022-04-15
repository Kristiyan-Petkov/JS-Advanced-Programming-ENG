function sum(arr) {
    let sum = arr.reduce((a,b) => a + b);
    return sum;
}

const { expect, assert } = require('chai');
describe('Sum Test', () => {
    it('array of numbers as an argument', () => {
        assert.equal(sum([5,10,5]), 20)

        // expect(sum(5, 3)).to.equal(8);

        // if (sum(5, 3) != 8) {
        //     throw Error('did not work')
        // }
    });
    it('return the sum of the values of all elements inside the array', () => {
        assert.equal(sum([5,8,2]), 15)
    });
});