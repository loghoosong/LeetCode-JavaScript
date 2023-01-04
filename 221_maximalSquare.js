/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let dp = new Array(n).fill(0);

    let ans = 0;
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] == '1') {
            dp[j] = 1;
            ans = 1;
        }
    }

    for (let i = 1; i < m; i++) {
        let temp = new Array(n).fill(0);
        if (matrix[i][0] == '1') {
            temp[0] = 1;
            ans = Math.max(ans, 1);
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == '1') {
                temp[j] = Math.min(temp[j - 1] + 1, dp[j] + 1, dp[j - 1] + 1);
                ans = Math.max(ans, temp[j]);
            }
        }
        dp = temp;
    }

    return ans * ans;
};