/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = nums.reduce((sum, n) => sum + n, 0);
    let len = nums.length;
    return len * (len + 1) / 2 - sum;
};