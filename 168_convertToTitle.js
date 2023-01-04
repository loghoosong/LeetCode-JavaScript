/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans = '';
    while (columnNumber > 0) {
        let temp = (columnNumber - 1) % 26;
        ans = (String.fromCodePoint(65 + temp)) + ans;
        columnNumber = Math.trunc((columnNumber - 1) / 26);
    }
    return ans;
};