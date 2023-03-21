/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    const len = piles.length;

    const sum = new Array(len);
    sum[len - 1] = piles[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        sum[i] = sum[i + 1] + piles[i];
    }

    const memo = new Map();
    //从第i个位置开始取，最多可以取M个
    const dfs = (i, m) => {
        if (i + (m << 1) >= len) return sum[i];

        const code = (i << 7) + m;
        if (memo.has(code)) return memo.get(code);

        let next = sum[i];
        for (let x = 1; x <= (m << 1); x++) {
            next = Math.min(next, dfs(i + x, Math.max(x, m)));
        }
        memo.set(code, sum[i] - next);
        return sum[i] - next;
    }

    return dfs(0, 1);
};