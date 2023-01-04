/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(true));
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && (s[i] == s[j])
        }
    }

    let ans = [], ret = [];
    function iterator(from) {
        if (from == s.length) ret.push(ans.slice());

        for (let i = from; i < s.length; i++) {
            if (dp[from][i]) {
                ans.push(s.slice(from, i + 1));
                iterator(i + 1);
                ans.pop();
            }
        }
    }

    iterator(0);
    return ret;
};