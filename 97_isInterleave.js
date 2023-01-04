/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;

    let arr = new Array(s2.length + 1).fill(true);
    for (let j = 1; j <= s2.length; j++) {
        arr[j] = arr[j - 1] && s2[j - 1] == s3[j - 1];
    }

    for (let i = 1; i <= s1.length; i++) {
        arr[0] = arr[0] && s1[i - 1] == s3[i - 1];
        for (let j = 1; j <= s2.length; j++) {
            arr[j] = (arr[j] && s1[i - 1] == s3[i + j - 1]) ||
                (arr[j - 1] && s2[j - 1] == s3[i + j - 1]);
        }
    }
    return arr[s2.length];
};