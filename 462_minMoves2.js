/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    let target = nums[Math.trunc(nums.length / 2)];
    return nums.reduce((ans, num) => ans + Math.abs(num - target), 0);
};