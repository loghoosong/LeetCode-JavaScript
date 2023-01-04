/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const f = n => {
        while ((n & 1) === 0) {
            n >>= 1;
        }
        return n >> 1;
    }

    let ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[f(i)] + 1;
    }
    return ans;
};