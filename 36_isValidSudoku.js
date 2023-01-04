/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Array(9).fill(0);
    let cols = new Array(9).fill(0);
    let cube = new Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                const flag = (1 << board[i][j]);
                const idx = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
                if (rows[i] & flag || cols[j] & flag || cube[idx] & flag) {
                    return false;
                } else {
                    rows[i] |= flag;
                    cols[j] |= flag;
                    cube[idx] |= flag;
                }
            }
        }
    }
    return true;
};