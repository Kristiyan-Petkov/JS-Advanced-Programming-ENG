const { expect, assert } = require('chai');
const library = require('./library');


describe("Tests library object", function () {
    describe("test calcPriceOfBook", function () {
        it("has valid inputs", function () {
            expect(library.calcPriceOfBook(1, 1)).to.equal("Invalid input");
            expect(library.calcPriceOfBook([], 1)).to.equal("Invalid input");
            expect(library.calcPriceOfBook({}, 1)).to.equal("Invalid input");
            expect(library.calcPriceOfBook(null, 1)).to.equal("Invalid input");
            expect(library.calcPriceOfBook(undefined, 1)).to.equal("Invalid input");
            expect(library.calcPriceOfBook("A", "1")).to.equal("Invalid input");
            expect(library.calcPriceOfBook("A", [])).to.equal("Invalid input");
            expect(library.calcPriceOfBook("A", {})).to.equal("Invalid input");
            expect(library.calcPriceOfBook("A", undefined)).to.equal("Invalid input");
            expect(library.calcPriceOfBook("A", 1.2)).to.equal("Invalid input");
        });
        it("has correct outputs", function () {
            expect(library.calcPriceOfBook("A", 1979)).to.equal(10.00);
            expect(library.calcPriceOfBook("A", 1980)).to.equal(10.00);
            expect(library.calcPriceOfBook("A", 1981)).to.equal(20.00);
        });
    });
});