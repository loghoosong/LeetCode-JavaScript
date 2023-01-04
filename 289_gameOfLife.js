/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length;
    const n = board[0].length;

    function countAround(i, j) {
        let count = 0;
        if (i > 0) {
            if (j > 0 && board[i - 1][j - 1] === 1) count++;
            if (board[i - 1][j] === 1) count++;
            if (j < n - 1 && board[i - 1][j + 1] === 1) count++;
        }
        if (j > 0 && board[i][j - 1] === 1) count++;
        if (j < n - 1 && board[i][j + 1] === 1) count++;
        if (i < m - 1) {
            if (j > 0 && board[i + 1][j - 1] === 1) count++;
            if (board[i + 1][j] === 1) count++;
            if (j < n - 1 && board[i + 1][j + 1] === 1) count++;
        }
        return count;
    }

    let countArr = new Array(m).fill(0).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            countArr[i][j] = countAround(i, j);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (countArr[i][j] < 2 || countArr[i][j] > 3) {
                board[i][j] = 0;
            } else if (countArr[i][j] === 3) {
                board[i][j] = 1;
            }
        }
    }
};

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]);