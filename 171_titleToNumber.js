/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let base = 1;
    let ans = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let temp = columnTitle[i].codePointAt() - 64;
        ans += temp * base;
        base *= 26;
    }
    return ans;
};