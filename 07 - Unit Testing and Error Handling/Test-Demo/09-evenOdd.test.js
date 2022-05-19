const { expect, assert } = require('chai');
const { isOddOrEven } = require('./09-evenOdd.js');

describe('Even or Odd', () => {
    it('is string', () => {
        // expect(isOddOrEven("")).to.be.undefined;
        expect(isOddOrEven(3)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('is odd', () => {
        expect(isOddOrEven("3")).to.equal("odd");
        expect(isOddOrEven("FGA")).to.equal("odd");
    });
    it('is even', () => {
        expect(isOddOrEven("22")).to.equal("even");
        expect(isOddOrEven("FFGA")).to.equal("even");
    });
})