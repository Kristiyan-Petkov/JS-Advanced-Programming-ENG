function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


// tests:
// Return false for any input that isn't of the correct type
console.log(isSymmetric(1, 2, 3, 2, 1))
// Return true if the input array is symmetric
console.log(isSymmetric([1, 2, 3, 2, 1]))
// Otherwise, return false
console.log(isSymmetric([1, 2, 3, 2, 2]))

// const { expect, assert } = require('chai');
// describe('Is Symmetric', () => {
//     it('input is the correct type', () => {
//         assert.equal(isSymmetric(1,2,3,2,1), false);
//         assert.isTrue(isSymmetric(1,2,3,2,1), false);
//     });
//     it('input array is symmetric', () => {
//         assert.equal(isSymmetric([1,2,3,2,1]), true);
//         assert.isTrue(isSymmetric([1,2,3,2,1]), true);
//     });
//     it('input array is NOT symmetric', () => {
//         assert.equal(isSymmetric([1,2,3,2,2]), false);
//         assert.isTrue(isSymmetric([1,2,3,2,2]), false);
//     });
// });

module.exports = {
    isSymmetric,
};