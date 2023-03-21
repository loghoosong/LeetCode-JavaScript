/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
    return new Array(1 << n).fill()
        .map((_, i) => (i >> 1) ^ i ^ start);
};