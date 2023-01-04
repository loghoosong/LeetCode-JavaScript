/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const n = grid.length;
    const m = grid[0].length;

    let sum = grid[0][0];
    for (let j = 1; j < m; j++) {
        sum += grid[0][j];
        grid[0][j] = sum;
    }
    sum = grid[0][0];
    for (let i = 1; i < n; i++) {
        sum += grid[i][0];
        grid[i][0] = sum;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
        }
    }

    return grid[n - 1][m - 1];
};