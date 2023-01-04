/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    let result = 0;
    result = left.reduce((result, item) => item > result ? item : result, result);
    result = right.reduce((result, item) => n - item > result ? n - item : result, result);
    return result;
};