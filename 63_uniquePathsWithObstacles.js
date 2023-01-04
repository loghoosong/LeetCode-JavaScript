/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;

    obstacleGrid[0][0] = 1 - obstacleGrid[0][0];
    for (let j = 1; j < m; j++) {
        obstacleGrid[0][j] = obstacleGrid[0][j] == 1 ? 0 : obstacleGrid[0][j - 1];
    }
    for (let i = 1; i < n; i++) {
        obstacleGrid[i][0] = obstacleGrid[i][0] == 1 ? 0 : obstacleGrid[i - 1][0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            obstacleGrid[i][j] = obstacleGrid[i][j] == 1 ? 0 : obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        }
    }

    return obstacleGrid[n - 1][m - 1];
};