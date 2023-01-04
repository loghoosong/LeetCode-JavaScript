/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length;
    const mid = (len + 1) >> 1;

    function expandCheck(left, right) {
        while (left >= 0 && right < len && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    let left = 0;
    let right = 0;
    for (let i = 0; i < len - 1; i++) {
        const len1 = expandCheck(i, i);
        const len2 = expandCheck(i, i + 1);
        const len = len2 > len1 ? len2 : len1;
        if (len > (right - left)) {
            left = i - ((len - 1) >> 1);
            right = i + (len >> 1);
        }
    }

    return s.slice(left, right + 1);
};