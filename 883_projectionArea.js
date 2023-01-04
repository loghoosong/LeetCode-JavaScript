/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let area1 = 0;
    let area2 = [].concat(grid[0]);
    const lenRow = grid.length;
    const lenCol = area2.length;

    for (let i = 0; i < lenRow; i++) {
        let max = 0;
        for (let j = 0; j < lenCol; j++) {
            const num = grid[i][j];
            if (num > 0) area1++;
            max = Math.max(num, max);
            area2[j] = Math.max(num, area2[j]);
        }
        area1 += max;
    }

    return area1 + area2.reduce((sum, num) => sum + num, 0);
};