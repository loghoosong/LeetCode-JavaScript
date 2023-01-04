/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    const last = nums.length - 1;
    nums.sort((a, b) => a - b)
    return Math.max(nums[last] * nums[last - 1] * nums[last - 2], nums[last] * nums[0] * nums[1]);
};