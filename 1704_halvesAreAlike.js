/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const len = s.length;
    const mid = len >> 1;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0, right = 0;

    for (let i = 0; i < mid; i++) {
        if (set.has(s[i])) left++;
    }

    for (let i = mid; i < len; i++) {
        if (set.has(s[i])) right++;
    }

    return left == right;
};