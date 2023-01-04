/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n));
    let row = n - 1;
    let col = n;
    let r = 0, c = -1;
    let count = 0;
    let num = 1;
    while (true) {
        if (col == 0) break;
        while (count < col) {
            c++;
            count++;
            matrix[r][c] = num;
            num++;
        }
        count = 0;
        col--;
        if (row == 0) break;
        while (count < row) {
            r++;
            count++;
            matrix[r][c] = num;
            num++;
        }
        count = 0;
        row--;
        if (col == 0) break;
        while (count < col) {
            c--;
            count++;
            matrix[r][c] = num;
            num++;
        }
        count = 0;
        col--;
        if (row == 0) break;
        while (count < row) {
            r--;
            count++;
            matrix[r][c] = num;
            num++;
        }
        count = 0;
        row--;
    }
    return matrix;
};
console.log(generateMatrix(3));