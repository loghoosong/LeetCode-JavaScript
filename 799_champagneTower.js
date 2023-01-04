/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
    //if (query_glass == 0 || query_glass == query_row) return Math.min(1, Math.max(0, (poured + 1) / (1 << query_row) - 1));

    let arr = [poured];
    for (let i = 1; i <= query_row; i++) {
        let nextRow = new Array(query_row + 1);
        nextRow[0] = Math.max(0, arr[0] - 1) / 2;
        nextRow[i] = nextRow[0];
        for (let j = 1; j < i; j++) {
            nextRow[j] = Math.max(0, arr[j - 1] - 1) / 2 + Math.max(0, arr[j] - 1) / 2;
        }
        arr = nextRow;
    }

    return Math.min(1, arr[query_glass]);
};