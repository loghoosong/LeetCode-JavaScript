/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function (board) {
    const size = board.length;
    const half = size >> 1;
    let countOfOne = board[0].reduce((sum, current) => sum + current, 0);
    if (countOfOne != half || countOfOne != size - half) return -1;
    let colOne = 0;
    for (let i = 0; i < size; i++) {
        colOne += board[i][0];
    }
    if (colOne != countOfOne) return -1;

    let row0 = 0;
    let col0 = 0;
    let start = 0;
    for (let i = 0; i < size; i++) {
        if (start != board[0][i]) row0++;
        if (start != board[i][0]) col0++;
        start = 1 - start;
    }
    if (row0 & 1 || col0 & 1) return -1;

    for (let j = 0; j < size; j++) {
        start = (j & 1);
        let row0Temp = 0;
        let col0Temp = 0;
        for (let i = 0; i < size; i++) {
            if (start != board[j][i]) row0Temp++;
            if (start != board[i][j]) col0Temp++;
            start = 1 - start;
        }
        if (row0 != row0Temp || col0 != col0Temp) return -1;
    }

    start = 1;
    let row1 = 0;
    let col1 = 0;
    for (let i = 0; i < size; i++) {
        if (start != board[0][i]) row1++;
        if (start != board[i][0]) col1++;
        start = 1 - start;
    }
    if (row1 & 1 || col1 & 1) return -1;

    return Math.min((row0 + col0) >> 1, (row1 + col1) >> 1);
};

console.log(movesToChessboard([[1, 1, 0], [0, 0, 1], [0, 0, 1]]));