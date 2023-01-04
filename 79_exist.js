/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const wLen = word.length;
    let arr = new Array(rows).fill(0).map(() => new Array(cols).fill(false))

    function iteator(r, c, wordIdx) {
        if (board[r][c] != word[wordIdx]) return false;
        if (wordIdx == wLen - 1) return true;
        arr[r][c] = true;

        if (r - 1 >= 0) {
            if (!arr[r - 1][c]) {
                if (iteator(r - 1, c, wordIdx + 1)) return true;
            }
        }
        if (c - 1 >= 0) {
            if (!arr[r][c - 1]) {
                if (iteator(r, c - 1, wordIdx + 1)) return true;
            }
        }
        if (r + 1 < rows) {
            if (!arr[r + 1][c]) {
                if (iteator(r + 1, c, wordIdx + 1)) return true;
            }
        }
        if (c + 1 < cols) {
            if (!arr[r][c + 1]) {
                if (iteator(r, c + 1, wordIdx + 1)) return true;
            }
        }
        arr[r][c] = false;
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (iteator(i, j, 0)) return true;
        }
    }

    return false;
};