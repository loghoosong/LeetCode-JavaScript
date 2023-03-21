/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const r = rowSum.length, c = colSum.length;
    const ans = new Array(r).fill().map(() => new Array(c).fill(0));
    let i = j = 0;
    while (i < r && j < c) {
        const v = Math.min(rowSum[i], colSum[j])
        ans[i][j] = v;
        rowSum[i] -= v;
        colSum[j] -= v;
        if (rowSum[i] === 0) {
            i++;
        } else {
            j++;
        }
    }

    return ans;
};