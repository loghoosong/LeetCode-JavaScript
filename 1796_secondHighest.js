/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let ans = [-1, -1];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            const n = +s[i];
            if (n > ans[1]) {
                ans.push(n);
                ans.shift();
            } else if (n > ans[0] && n < ans[1]) {
                ans[0] = n;
            }
        }
    }
    return ans[0];
};