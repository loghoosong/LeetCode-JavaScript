/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((sum, v) => sum ^ v, 0);
};