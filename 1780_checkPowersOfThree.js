/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    const max = Math.trunc(Math.log(n) / Math.log(3));
    for (let i = max; i >= 0; i--) {
        const p = Math.pow(3, i);
        if (n >= p) n -= p;
    }
    return n == 0;
};