/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let ans = 1;
    let max = m + n - 2;
    let min = m < n ? m - 1 : n - 1;
    for (let i = 1; i <= min; i++) {
        ans *= (max / i);
        max--;
    }
    return ans;
};