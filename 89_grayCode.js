/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    if (n == 1) return [0, 1];
    let preArr = grayCode(n - 1);
    let ans = [];
    ans = ans.concat(preArr);
    ans = ans.concat(preArr.reverse());
    let temp = Math.pow(2, n - 1);
    for (let i = temp; i < 2 * temp; i++) {
        ans[i] += temp;
    }
    return ans;
};