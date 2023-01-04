/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    function isMagic(sRow, sCol) {
        let set = new Set();
        let s = 0;
        for (let i = sCol; i < sCol + 3; i++) {
            const n = grid[sRow][i];
            if (set.has(n) || n > 9 || n == 0) return false;
            set.add(n);
            s += n;
        }

        for (let j = sRow + 1; j < sRow + 3; j++) {
            let tempS = 0;
            for (let i = sCol; i < sCol + 3; i++) {
                const n = grid[j][i];
                if (set.has(n) || n > 9 || n == 0) return false;
                set.add(n);
                tempS += n;
            }
            if (tempS != s) return false;
        }

        if (s != grid[sRow][sCol] + grid[sRow + 1][sCol] + grid[sRow + 2][sCol]) return false;
        if (s != grid[sRow][sCol + 1] + grid[sRow + 1][sCol + 1] + grid[sRow + 2][sCol + 1]) return false;
        if (s != grid[sRow][sCol + 2] + grid[sRow + 1][sCol + 2] + grid[sRow + 2][sCol + 2]) return false;
        if (s != grid[sRow][sCol] + grid[sRow + 1][sCol + 1] + grid[sRow + 2][sCol + 2]) return false;
        if (s != grid[sRow + 2][sCol] + grid[sRow + 1][sCol + 1] + grid[sRow][sCol + 2]) return false;

        return true;
    }

    let ans = 0;
    const rowLen = grid.length;
    const colLen = grid[0].length;
    for (let i = 0; i < rowLen - 2; i++) {
        for (let j = 0; j < colLen - 2; j++) {
            if (isMagic(i, j)) ans++;
        }
    }
    return ans;
};