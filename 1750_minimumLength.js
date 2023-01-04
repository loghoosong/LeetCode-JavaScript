/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right && s[left] === s[right]) {
        const char = s[left];
        while (s[left] === char && left <= right) {
            left++;
        }
        while (s[right] === char && right >= left) {
            right--;
        }
    }
    return right - left + 1;
};