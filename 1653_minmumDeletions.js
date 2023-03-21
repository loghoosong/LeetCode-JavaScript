/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let ans = 0, bCnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            ans = Math.min(ans + 1, bCnt);
        } else {
            bCnt++;
        }
    }
    return ans;
};