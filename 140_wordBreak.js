/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict);
    let memo = new Array(s.length).fill(0).map(() => new Array(10).fill(false));
    for (let i = 0; i < s.length; i++) {
        let w = '';
        for (let j = i; j < Math.min(s.length, i + 10); j++) {
            w += s[j];
            if (wordSet.has(w)) memo[i][j] = w;
        }
    }

    let ans = [];
    function iterator(str, idx) {
        if (idx == s.length) {
            ans.push(str.slice(1));
            return;
        }

        for (let i = idx; i < idx + 10; i++) {
            if (memo[idx][i]) {
                iterator(str + ' ' + memo[idx][i], i + 1);
            }
        }
    }

    iterator('', 0);
    return ans;
};