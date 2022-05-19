const { expect, assert } = require('chai');
const { mathEnforcer } = require('./11-mathEnforcer');

describe('mathEnforcer', function () {
    describe('test addFive function', function () {
        it('input is not a number', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive("")).to.be.undefined;
            expect(mathEnforcer.addFive("a")).to.be.undefined;
            expect(mathEnforcer.addFive("1")).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });
        it('input is a number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(-0.01)).to.equal(4.99);
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(0.01)).to.equal(5.01);
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
    })
    describe('subtractTen', function () {
        it('input is not a number', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen("")).to.be.undefined;
            expect(mathEnforcer.subtractTen("a")).to.be.undefined;
            expect(mathEnforcer.subtractTen("1")).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        it('input is a number', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(-0.01)).to.equal(-10.01);
            expect(mathEnforcer.subtractTen(-0.01)).to.be.closeTo(-10.01, 0.01);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(0.01)).to.equal(-9.99);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
    })
    describe('sum', function () {
        it('input is not a number', () => {
            expect(mathEnforcer.sum({}, 0)).to.be.undefined;
            expect(mathEnforcer.sum([], 0)).to.be.undefined;
            expect(mathEnforcer.sum("", 0)).to.be.undefined;
            expect(mathEnforcer.sum("a", 0)).to.be.undefined;
            expect(mathEnforcer.sum("1", 0)).to.be.undefined;
            expect(mathEnforcer.sum(0, {})).to.be.undefined;
            expect(mathEnforcer.sum(0, [])).to.be.undefined;
            expect(mathEnforcer.sum(0, "")).to.be.undefined;
            expect(mathEnforcer.sum(0, "a")).to.be.undefined;
            expect(mathEnforcer.sum(0, "1")).to.be.undefined;
            expect(mathEnforcer.sum("", {})).to.be.undefined;
            expect(mathEnforcer.sum("a", [])).to.be.undefined;
            expect(mathEnforcer.sum("1", "")).to.be.undefined;
            expect(mathEnforcer.sum([], "a")).to.be.undefined;
            expect(mathEnforcer.sum({}, "1")).to.be.undefined;
            expect(mathEnforcer.sum(0, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 0)).to.be.undefined;
        });
        it('input is a number', () => {
            expect(mathEnforcer.sum(-1, 0.01)).to.equal(-0.99);
            expect(mathEnforcer.sum(-0.006, 0)).to.be.closeTo(-0.006, 0.01);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(0.01, 0)).to.equal(0,01);
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
    })
})