/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    const m = grid.length, n = grid[0].length;
    const right = new Array(m).fill().map(() => new Array(n).fill(0));
    const down = new Array(m).fill().map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        right[i][n - 1] = grid[i][n - 1];
        for (let j = n - 2; j >= 0; j--) {
            right[i][j] = grid[i][j] === 0 ? 0 : right[i][j + 1] + 1;
        }
    }
    for (let j = 0; j < n; j++) {
        down[m - 1][j] = grid[m - 1][j];
        for (let i = m - 2; i >= 0; i--) {
            down[i][j] = grid[i][j] === 0 ? 0 : down[i + 1][j] + 1;
        }
    }

    let max1Length = 0;
    const traverseDiag = (r, c) => {
        const stack = [];
        for (let j = 0; j < Math.min(m - r, n - c); j++) {
            if (grid[r + j][c + j] !== 0) {
                if (stack.length) {
                    const [x, y] = stack[stack.length - 1];
                    //如果当前元素向下向右扩展的距离大于栈顶，就push进栈
                    if (x + Math.min(right[x][y], down[x][y]) <=
                        r + j + Math.min(right[r + j][c + j], down[r + j][c + j])) {
                        stack.push([r + j, c + j]);
                    }
                } else {
                    stack.push([r + j, c + j]);
                }
            }
        }

        const judge = (j) => {
            if (!stack.length) return false;
            const [x, y] = stack[stack.length - 1];
            return Math.min(right[x][y], down[x][y], right[r + j][y], down[x][c + j]) > r + j - x;
        }
        //逆序遍历对角线元素
        for (let j = Math.min(m - r - 1, n - c - 1); j >= 0; j--) {
            //如果栈顶元素能与当前元素组成正方形就出栈
            while (judge(j)) {
                max1Length = Math.max(r + j - stack.pop()[0] + 1, max1Length);
            }
        }
    }

    for (let j = 0; j < n; j++) {
        traverseDiag(0, j);
    }
    for (let i = 1; i < m; i++) {
        traverseDiag(i, 0);
    }

    return Math.pow(max1Length, 2);
};