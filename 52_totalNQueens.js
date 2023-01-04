/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function (n) {
    function solve(cols, diagonals1, diagonals2, posArr) {
        if (posArr.length == n) {
            ans++;
            return;
        }

        for (let i = 0; i < n; i++) {
            if (isSafePos(i, cols, diagonals1, diagonals2)) {
                posArr.push(i);
                const pos = 1 << i;
                const nc = cols | pos;
                const nd1 = ((diagonals1 | pos) << 1) & AllDigits;//左移动
                const nd2 = (diagonals2 | pos) >> 1;//右移动
                solve(nc, nd1, nd2, posArr);
                posArr.pop();
            }
        }
    }

    function isSafePos(c, cols, diagonals1, diagonals2) {
        let pos = 1 << c;
        return ((pos & cols) == 0) && ((pos & diagonals1) == 0) && ((pos & diagonals2) == 0);
    }

    const AllDigits = (1 << n) - 1;
    let ans = 0;
    solve(0, 0, 0, []);
    return ans;
};