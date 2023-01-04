/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = '';
    const len = strs.length;
    const l = strs[0].length;
    for (let i = 0; i < l; i++) {
        const s = strs[0][i];
        for (let j = 1; j < len; j++) {
            if (strs[j].length == i || strs[j][i] != s) return ans;
        }
        ans += s;
    }

    return ans;
};