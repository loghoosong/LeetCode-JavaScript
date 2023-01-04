/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    const wordLen = word.length;
    const end = sequence.length - wordLen;
    let max = 0;
    let current = 0;
    let i = 0;
    while (i <= end) {
        if (sequence.slice(i, i + wordLen) == word) {
            current++;
            i += wordLen;
        } else {
            max = Math.max(current, max);
            if (current > 0) {
                current = 0;
                i -= (wordLen - 1);
            } else {
                i++;
            }
        }
    }
    max = Math.max(current, max);

    return max;
};

console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));