/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let ans = new Array(rowIndex + 1).fill(1);
    let num = 1;
    for (let i = 1; i <= (rowIndex >> 1); i++) {
        num = num * (rowIndex - i + 1) / i;
        ans[i] = num;
        ans[rowIndex - i] = num;
    }
    return ans;
};