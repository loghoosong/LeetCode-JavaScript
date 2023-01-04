/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k %= len;
    if (k == 0) return;

    let temp = [];
    for (let i = len - 1; i >= len - k; i--) {
        temp.push(nums[i]);
    };
    for (let i = len - 1; i >= k; i--) {
        nums[i] = nums[i - k];
    }
    for (let i = k - 1; i >= 0; i--) {
        nums[i] = temp[k - 1 - i];
    }
};