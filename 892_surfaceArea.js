/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    const len1 = grid.length;
    const len2 = grid[0].length;

    let area1 = len1 * len2;

    let area2 = 0;
    for (let i = 0; i < len1; i++) {
        area2 += grid[i][0];
        if (grid[i][0] == 0) area1--;
        for (let j = 1; j < len2; j++) {
            area2 += Math.max(grid[i][j] - grid[i][j - 1], 0);
            if (grid[i][j] == 0) area1--;
        }
    }

    let area3 = 0;
    for (let i = 0; i < len2; i++) {
        area3 += grid[0][i];
        for (let j = 1; j < len1; j++) {
            area3 += Math.max(grid[j][i] - grid[j - 1][i], 0);
        }
    }

    return (area1 + area2 + area3) << 1;
};


console.log(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]]));