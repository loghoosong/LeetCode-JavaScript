/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ans = [];

    (function iterator(n, str, left, right) {
        if (right === n) {
            ans.push(str);
            return;
        }
        if (left < n) iterator(n, str + '(', left + 1, right);
        if (right < left) iterator(n, str + ')', left, right + 1);
    })(n, [], 0, 0);

    return ans;
};