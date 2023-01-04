/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    let ans = [n];
    let last = n;
    let sign = -1;
    for (let i = k; i > 0; i--) {
        last += sign * i;
        ans.push(last);
        sign = -sign;
    }

    for (let i = n - k - 1; i > 0; i--) {
        ans.push(i);
    }

    return ans;
};