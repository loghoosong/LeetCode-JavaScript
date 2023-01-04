/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let min = nums[0];
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
        min = Math.max(min + 1, nums[i]);
        ans += min - nums[i];
    }
    return ans;
};