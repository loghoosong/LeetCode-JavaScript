/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let set = new Set(Array.from(allowed));

    let count = 0;
    outer: for (let word of words) {
        for (let char of word) {
            if (!set.has(char)) {
                continue outer;
            }
        }
        count++;
    }

    return count;
};