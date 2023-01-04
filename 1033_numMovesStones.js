/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    function sortedNumMovesStones(x, y, z) {
        let min, max;
        max = z - x - 2;
        if (max < 2) {
            min = max;
        } else if (z - y <= 2 || y - x <= 2) {
            min = 1;
        } else {
            min = 2;
        }
        return [min, max];
    }

    if (a < b) {
        if (b < c) {
            return sortedNumMovesStones(a, b, c);
        } else if (a < c) {
            return sortedNumMovesStones(a, c, b);
        } else {
            return sortedNumMovesStones(c, a, b);
        }
    } else {
        if (a < c) {
            return sortedNumMovesStones(b, a, c);
        } else if (c < b) {
            return sortedNumMovesStones(c, b, a);
        } else {
            return sortedNumMovesStones(b, c, a);
        }
    }
};