/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let ans = [];
    let row = matrix.length - 1;
    let col = matrix[0].length;
    let r = 0, c = -1;
    let count = 0;
    while (true) {
        if (col == 0) break;
        while (count < col) {
            c++;
            count++;
            ans.push(matrix[r][c]);
        }
        count = 0;
        col--;
        if (row == 0) break;
        while (count < row) {
            r++;
            count++;
            ans.push(matrix[r][c]);
        }
        count = 0;
        row--;
        if (col == 0) break;
        while (count < col) {
            c--;
            count++;
            ans.push(matrix[r][c]);
        }
        count = 0;
        col--;
        if (row == 0) break;
        while (count < row) {
            r--;
            count++;
            ans.push(matrix[r][c]);
        }
        count = 0;
        row--;
    }

    return ans;
};