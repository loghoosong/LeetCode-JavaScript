/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
    let merge = '';
    let idx1 = 0, idx2 = 0;
    while (idx1 < word1.length || idx2 < word2.length) {
        if (idx1 < word1.length && word1.slice(idx1) > word2.slice(idx2)) {
            merge += word1[idx1];
            idx1++;
        } else {
            merge += word2[idx2];
            idx2++;
        }
    }

    return merge;
};