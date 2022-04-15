const { expect, assert } = require('chai');
const { sum } = require('./myModule');
describe('Demo Test', () => {
    it('passing test', () => {
        'do nothing';
    });
    it('works with 5 and 3', () => {
        assert.equal(sum(5, 3), 8)

        // expect(sum(5, 3)).to.equal(8);

        // if (sum(5, 3) != 8) {
        //     throw Error('did not work')
        // }
    });
});

//npm run test

// function sum(a, b) {
//     let sum = a + b;
//     return sum;
// }