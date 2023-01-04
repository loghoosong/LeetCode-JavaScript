/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let x = 0, y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        } else if (matrix[x][y] > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};