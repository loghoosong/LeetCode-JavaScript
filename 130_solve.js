/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const row = board.length;
    const col = board[0].length;
    if (row <= 2 || col <= 2) return;

    function traversal(r, c) {
        board[r][c] = 'a';
        if (c - 1 >= 0 && board[r][c - 1] == 'O') traversal(r, c - 1);
        if (c + 1 < col && board[r][c + 1] == 'O') traversal(r, c + 1);
        if (r - 1 >= 0 && board[r - 1][c] == 'O') traversal(r - 1, c);
        if (r + 1 < row && board[r + 1][c] == 'O') traversal(r + 1, c);
    }

    for (let j = 0; j < col; j++) {
        if (board[0][j] == 'O') traversal(0, j);
        if (board[row - 1][j] == 'O') traversal(row - 1, j);
    }
    for (let i = 1; i < row - 1; i++) {
        if (board[i][0] == 'O') traversal(i, 0);
        if (board[i][col - 1] == 'O') traversal(i, col - 1);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] == 'a') {
                board[i][j] = 'O';
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
};