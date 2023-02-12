/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    let n = grid.length;

    const isInDiagonals = (r, l) => {
        return r === l
            || r + l === n - 1;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isInDiagonals(i, j)) {
                if (grid[i][j] === 0) return false;
            } else {
                if (grid[i][j] !== 0) return false;
            }
        }
    }
    return true;
};