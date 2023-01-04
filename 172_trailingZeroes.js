/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let temp = 5;
    let ans = 0;
    while (temp <= n) {
        ans += Math.trunc(n / temp);
        temp *= 5;
    }

    return ans;
};