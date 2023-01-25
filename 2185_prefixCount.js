/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    const len = pref.length;
    const judge = word => {
        if (word.length < len) return 0;
        for (let i = 0; i < len; i++) {
            if (word[i] !== pref[i]) return 0;
        }
        return 1;
    }
    return words.reduce((s, v) => s + judge(v), 0);
};