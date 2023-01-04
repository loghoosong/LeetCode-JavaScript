/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
    const MOD = 1000000007;
    const f = n => (n * (n + 1) / 2) % MOD;

    let ans = 0;
    let charIdx = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[charIdx]) {
            ans = (ans + f(i - charIdx)) % MOD;
            charIdx = i;
        }
    }
    ans = (ans + f(s.length - charIdx)) % MOD;

    return ans;
};