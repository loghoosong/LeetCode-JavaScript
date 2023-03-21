/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const rows = [0, 0, 0];
    const cols = [0, 0, 0];
    const diagonals = [0, 0];

    res = '';
    const judge = code => {
        if (code == 7) {
            res = 'A';
            return true;
        } else if (code == 56) {
            res = 'B';
            return true;
        }
        return false;
    }

    for (let i = 0; i < moves.length; i++) {
        const base = (i & 1) ? 8 : 1;
        const r = moves[i][0], c = moves[i][1];
        rows[r] |= (base << c);
        if (judge(rows[r])) return res;

        cols[c] |= (base << r);
        if (judge(cols[c])) return res;

        if (r == c) {
            diagonals[0] |= (base << r);
            if (judge(diagonals[0])) return res;
        }
        if (r + c == 2) {
            diagonals[1] |= (base << r);
            if (judge(diagonals[1])) return res;
        }
    }

    return moves.length == 9 ? 'Draw' : 'Pending'
};