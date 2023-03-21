/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    const m = grid.length, n = grid[0].length;
    const dpRow = [...grid[0]];
    for (let j = 1; j < n; j++) {
        dpRow[j] += dpRow[j - 1];
    }

    for (let i = 1; i < m; i++) {
        dpRow[0] += grid[i][0];
        for (let j = 1; j < n; j++) {
            dpRow[j] = Math.max(dpRow[j], dpRow[j - 1]) + grid[i][j];
        }
    }

    return dpRow[n - 1];
};