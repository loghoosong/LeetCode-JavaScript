/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let c = 1;
    let count = 0;
    for (let char of s) {
        if (char == c) count++;
        c = !c;
    }
    return Math.min(count, s.length - count);
};