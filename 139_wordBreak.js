/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);
    function judge(from, end) {
        const w = s.slice(from, end + 1);
        return wordSet.has(w);
    }

    let dp = new Array(s.length + 1).fill(true);
    nextChar: for (let i = 1; i <= s.length; i++) {
        for (let j = i; j >= Math.max(i - 19, 0); j--) {
            if (dp[j - 1] && judge(j - 1, i - 1)) {
                dp[i] = true;
                continue nextChar;
            }
            dp[i] = false;
        }
    }
    return dp[s.length];
};

wordBreak('leetcode',
    ["a", "aa", "aaa", "aaaa", "leet", "code", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);