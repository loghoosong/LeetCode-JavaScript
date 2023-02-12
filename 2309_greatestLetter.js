/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    const chars = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const pt = s[i].codePointAt();
        if (pt >= 65 && pt <= 90) {
            chars[pt - 65] |= 1;
        } else {
            chars[pt - 97] |= 2;
        }
    }

    for (let i = 25; i >= 0; i--) {
        if (chars[i] === 3) return String.fromCodePoint(65 + i);
    }
    return '';
};