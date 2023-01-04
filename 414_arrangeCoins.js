/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let k = Math.trunc(Math.sqrt(n * 2));
    if (k * (k + 1) / 2 > n) {
        return k - 1;
    } else {
        return k;
    }
};
