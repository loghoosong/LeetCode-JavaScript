/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    let ans = '';
    for (let i = n - 1; i >= 0; i--) {
        const cp = Math.min(26, k - i);
        k -= cp;
        ans = String.fromCodePoint(96 + cp) + ans;
    }
    return ans;
};