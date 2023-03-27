/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
    const dp = new Array(s.length + 1).fill()
        .map(() => new Array(t.length + 1).fill(0));
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
                const lastDiffI = i - dp[i][j] - 1;
                const lastDiffJ = j - dp[i][j] - 1;
                if (lastDiffI >= 0 && lastDiffJ >= 0) {
                    ans += dp[lastDiffI][lastDiffJ] + 1;
                }
            } else {
                ans += dp[i][j] + 1;
            }
        }
    }
    return ans;
};