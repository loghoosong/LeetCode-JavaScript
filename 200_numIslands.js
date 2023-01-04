/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    function island(i, j) {
        grid[i][j] = 'A';
        if (i > 0 && grid[i - 1][j] == '1') island(i - 1, j);
        if (i < m - 1 && grid[i + 1][j] == '1') island(i + 1, j);
        if (j > 0 && grid[i][j - 1] == '1') island(i, j - 1);
        if (j < n - 1 && grid[i][j + 1] == '1') island(i, j + 1);
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                ans++;
                island(i, j);
            }
        }
    }
    return ans;
};