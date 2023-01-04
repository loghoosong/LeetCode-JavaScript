/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let ans = [[1]];
    for (let i = 2; i <= numRows; i++) {
        let row = new Array(i);
        row[0] = 1;
        row[i - 1] = 1;
        for (let j = 1; j < i - 1; j++) {
            row[j] = ans[i - 2][j - 1] + ans[i - 2][j];
        }
        ans.push(row);
    }
    return ans;
};