/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1
    for (; i >= 0; i--) {
        if (s[i] != ' ') break;
    }

    i--;
    let count = 1;
    for (; i >= 0; i--) {
        if (s[i] != ' ') {
            count++;
        } else {
            break;;
        }
    }

    return count;
};