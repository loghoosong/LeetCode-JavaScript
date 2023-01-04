/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
    function isStretchy(s, word) {
        let wStart = 0, sStart = 0;
        while (wStart < word.length && sStart < s.length) {
            if (s[sStart] != word[wStart]) return false;

            let i = wStart + 1;
            while (i < word.length && word[wStart] == word[i]) {
                i++;
            }
            let j = sStart + 1;
            while (j < s.length && s[sStart] == s[j]) {
                j++;
            }

            if (j - sStart == i - wStart || (j - sStart > i - wStart && j - sStart >= 3)) {
                wStart = i;
                sStart = j;
            } else {
                console.log('---------')
                return false;
            }
        }

        return wStart == word.length && sStart == s.length;
    }

    return words.reduce((count, word) => count + isStretchy(s, word), 0);
};