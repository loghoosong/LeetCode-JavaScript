/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
    const diff = n * n - mines.length;
    if (diff == 0) return 0;
    if (diff == 1) return 1;
    maxK = Math.min(n + 1 >> 1, Math.ceil(diff / 4));

    let minesSet = new Set();
    mines.forEach(v => minesSet.add(v[0] << 9 | v[1]));

    let dp = new Array(n).fill(0).map(() => new Array(n));

    for (let i = 1; i < n; i++) {
        dp[0][i] = 1 - minesSet.has(i);
        dp[n - 1][n - 1 - i] = 1 - minesSet.has((n - 1 << 9) | (n - 1 - i));
        dp[n - 1 - i][0] = 1 - minesSet.has(n - 1 - i << 9);
        dp[i][n - 1] = 1 - minesSet.has(i << 9 | (n - 1));
    }

    let ans = 1;
    for (let i = 1; i < n - 1; i++) {
        //左到右
        for (let j = 1; j < n - 1; j++) {
            if (minesSet.has(i << 9 | j)) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i][j - 1] + 1;
            }
        }
        //右到左
        for (let j = n - 2; j > 0; j--) {
            dp[i][j] = Math.min(dp[i][j + 1] + 1, dp[i][j]);
        }
    }

    for (let j = 1; j < n - 1; j++) {
        //上到下
        let count = dp[0][j];
        for (let i = 1; i < n - 1; i++) {
            if (minesSet.has(i << 9 | j)) {
                count = 0;
            } else {
                count++;
                dp[i][j] = Math.min(count, dp[i][j]);
            }
        }
        //下到上
        count = dp[n - 1][j];
        for (let i = n - 2; i > 0; i--) {
            if (minesSet.has(i << 9 | j)) {
                count = 0;
            } else {
                count++;
                dp[i][j] = Math.min(count, dp[i][j]);
                if (dp[i][j] == maxK) return dp[i][j];
                ans = Math.max(dp[i][j], ans);
            }
        }
    }

    return ans;
};