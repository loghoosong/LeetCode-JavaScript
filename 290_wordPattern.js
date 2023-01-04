/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let sArr = s.split(' ');
    if (sArr.length !== pattern.length) return false;

    let charArr = new Array(26).fill(false);
    for (let i = 0; i < pattern.length; i++) {
        const idx = pattern[i].codePointAt() - 97;
        if (charArr[idx]) {
            if (charArr[idx] !== sArr[i]) return false;
        } else {
            charArr[idx] = sArr[i];
        }
    }

    let set = new Set();
    for (let i = 0; i < 26; i++) {
        if (charArr[i]) {
            if (set.has(charArr[i])) return false;
            set.add(charArr[i]);
        }
    }
    return true;
};