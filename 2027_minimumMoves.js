/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    let ans = 0;
    for (let i = 0; i < s.length;) {
        if (s[i] === 'X') {
            i += 3;
            ans++;
        } else {
            i++;
        }
    }
    return ans;
};