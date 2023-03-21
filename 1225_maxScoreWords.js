/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
    const lettersCnt = new Array(26).fill(0);
    letters.map(l => {
        lettersCnt[l.codePointAt() - 97]++;
    });

    const wl = words.length;
    let ans = 0;
    for (let w = 1; w < (1 << wl); w++) {
        const wordsLettersCnt = new Array(26).fill(0);
        for (let d = 0; d < wl; d++) {
            if ((w & 1 << d) > 0) {
                for (let i = 0; i < words[d].length; i++) {
                    wordsLettersCnt[words[d][i].codePointAt() - 97]++;
                }
            }
        }

        if (wordsLettersCnt.every((c, i) => c <= lettersCnt[i])) {
            let s = wordsLettersCnt.reduce((s, c, i) => s + c * score[i], 0);
            ans = Math.max(ans, s);
        }
    }

    return ans;
};