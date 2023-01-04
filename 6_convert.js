/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s;

    const len = s.length;
    let ans = '';
    for (let i = 0; i < numRows; i++) {
        const k = numRows * 2 - 2;
        let j = i;
        let step = k - i * 2;
        while (j < len) {
            if (step != 0) ans += s[j];
            j += step;
            step = k - step;
        }
    }
    return ans;
};