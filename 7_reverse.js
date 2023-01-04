/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0;
    while (x != 0) {
        ans = x % 10 + ans * 10;
        x = Math.trunc(x / 10);
    }
    if (ans > 2147483647 || ans < -2147483648) return 0;
    return ans;
};