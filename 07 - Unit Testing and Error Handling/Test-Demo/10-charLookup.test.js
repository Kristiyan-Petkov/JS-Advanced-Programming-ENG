const { expect, assert } = require('chai');
const lookupChar = require('./10-charLookup');

describe('Char Lookup', () => {
    it('is string', () => {
        // expect(isOddOrEven("")).to.be.undefined;
        expect(lookupChar(3,0)).to.be.undefined;
        expect(lookupChar([],0)).to.be.undefined;
        expect(lookupChar({},0)).to.be.undefined;
    });

    it('index is integer', () => {
        // expect(isOddOrEven("")).to.be.undefined;
        expect(lookupChar("good",-1.2)).to.be.undefined;
        expect(lookupChar("morning",0.1)).to.be.undefined;
        expect(lookupChar("everyone",1.1)).to.be.undefined;
    });

    it('index is incorrect', () => {
        expect(lookupChar("",0)).to.equal("Incorrect index");
        expect(lookupChar("good",-1)).to.equal("Incorrect index");
        expect(lookupChar("morning",7)).to.equal("Incorrect index");
    });

    it('returns correct char', () => {
        expect(lookupChar("good",3)).to.equal("d");
        expect(lookupChar("morning",4)).to.equal("i");
        expect(lookupChar("everyone",0)).to.equal("e");
    });
});