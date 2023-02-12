/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
    const reg = /(.)\1{2,}/;
    const clean = str => {
        while (reg.test(str)) {
            str = str.replace(reg, '');
        }
        return str;
    }

    hand = hand.split('').sort().join('');
    let res = 6;
    const dfs = (board, hand) => {
        if (board === '') return 0;
        for (let i = 0; i <= board.length; i++) {
            for (let j = 0; j < hand.length; j++) {
                if (j > 0 && hand[j] === hand[j - 1]) continue;

                if (i > 0 && board[i - 1] === hand[j]) continue;

                let choose = false;
                if (i < board.length && board[i] === hand[j]) {
                    choose = true;
                }
                if (i > 0 && i < board.length &&
                    board[i - 1] === board[i] && board[i] !== hand[j]) {
                    choose = true;
                }
                if (!choose) continue;

                const b = clean(board.slice(0, i) + hand[j] + board.slice(i));
                const h = hand.slice(0, j) + hand.slice(j + 1);
                res = Math.min(res, dfs(b, h) + 1);
            }
        }
        return res;
    }

    let ans = dfs(board, hand);
    return ans > 5 ? -1 : ans;
};