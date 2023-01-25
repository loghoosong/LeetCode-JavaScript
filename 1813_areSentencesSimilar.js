/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');

    const minLen = Math.min(words1.length, words2.length);
    let left = 0, right = 1;
    while (left < minLen
        && words1[left] === words2[left]) {
        left++;
    }
    while (right + left <= minLen
        && words1[words1.length - right] === words2[words2.length - right]) {
        right++;
    }

    return left + right === minLen + 1;
};