/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
    let ans = 1;
    const half = n >> 1;
    let x = half;
    while (x !== 1) {
        if ((x & 1) === 0) {
            x >>= 1;
        } else {
            x = half + (x >> 1);
        }
        ans++;
    }
    return ans;
};