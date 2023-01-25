/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    function swap(i, j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    const len = s.length;
    const n = len >> 1;
    for (let i = 0; i < n; i++) {
        swap(i, len - 1 - i);
    }
};