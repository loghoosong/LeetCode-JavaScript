/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let start = 0;
    let end = rows * cols - 1;
    while (start <= end) {
        const mid = start + end >> 1;
        const r = Math.trunc(mid / cols);
        const c = mid % cols;
        if (matrix[r][c] == target) {
            return true;
        } else if (matrix[r][c] > target) {
            end = r * cols + c - 1;
        } else {
            start = r * cols + c + 1;
        }
    }

    return false;
};