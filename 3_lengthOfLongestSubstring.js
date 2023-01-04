/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const len = s.length;
    let max = 0;
    let leftIdx = 0;
    let map = new Map();
    for (let rightIdx = 0; rightIdx < len; rightIdx++) {
        const findIdx = map.get(s[rightIdx]);
        if (findIdx != undefined && findIdx >= leftIdx) {
            max = Math.max(max, rightIdx - leftIdx);
            leftIdx = findIdx + 1;
        }
        map.set(s[rightIdx], rightIdx);
    }

    max = Math.max(max, len - leftIdx);
    return max;
};