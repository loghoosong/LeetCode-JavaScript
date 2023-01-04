/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (word1.length == 0 || word2.length == 0) return word1.length + word2.length;

    let arr = new Array(word2.length + 1).fill(0).map((v, i) => i);
    for (let i = 1; i <= word1.length; i++) {
        let temp = [].concat(arr);
        temp[0] = i;
        for (let j = 1; j <= word2.length; j++) {
            temp[j] = Math.min(arr[j], temp[j - 1],
                arr[j - 1] - (word1[i - 1] == word2[j - 1])) + 1;
        }
        arr = temp;
    }

    return arr[word2.length];
};