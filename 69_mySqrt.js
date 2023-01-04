/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let ans = 1;
    while (true) {
        ans = Math.trunc((x / ans + ans) / 2);
        if (ans * ans <= x && (ans + 1) * (ans + 1) > x) break;
    }
    return ans;
};