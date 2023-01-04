/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let Sudoku = function () {
        this.rows = new Array(9).fill(0);
        this.cols = new Array(9).fill(0);
        this.cubes = new Array(9).fill(0);
    }

    Sudoku.prototype.possible = function* (row, col) {
        const cube = Math.trunc(row / 3) * 3 + Math.trunc(col / 3);
        const p = this.rows[row] | this.cols[col] | this.cubes[cube];
        for (let i = 1; i <= 9; i++) {
            if ((p & 1 << i) == 0) yield i;
        }
    }

    Sudoku.prototype.add = function (row, col, num) {
        num = 1 << num;
        const cube = Math.trunc(row / 3) * 3 + Math.trunc(col / 3);
        this.rows[row] ^= num;
        this.cols[col] ^= num;
        this.cubes[cube] ^= num;
    }

    let s = new Sudoku();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                s.add(i, j, +board[i][j]);
            }
        }
    }

    let solved = false;
    function iterator(index) {
        if (index > 80) {
            solved = true;
            return;
        }

        const row = Math.trunc(index / 9);
        const col = index % 9;
        if (board[row][col] == '.') {
            let g = s.possible(row, col);
            for (let k of g) {
                s.add(row, col, k);
                board[row][col] = '' + k;
                iterator(index + 1);
                if (solved) return;
                s.add(row, col, k);
            }
            board[row][col] = '.';
            return;//no safe number
        } else {
            iterator(index + 1);
        }

    }

    iterator(0);
    return board;
};