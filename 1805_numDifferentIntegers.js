/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    function removeLeadingZeros(s) {
        if (!s) return '';
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] != '0') return s.slice(i);
        }
        return s.slice(s.length - 1);
    }

    let set = new Set()
    let num = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= '0' && word[i] <= '9') {
            num += word[i];
        } else if (num) {
            set.add(removeLeadingZeros(num));
            num = '';
        }
    }
    if (num) set.add(removeLeadingZeros(num));

    return set.size;
};