/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;
    outer: for (let i = 0; i <= hLen - nLen; i++) {
        for (let j = 0; j < nLen; j++) {
            if (haystack[i + j] != needle[j]) {
                continue outer;
            }
        }
        return i;
    }

    return -1;
};