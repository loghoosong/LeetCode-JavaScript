/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const len = nums.length;
    let left = 0, right = 0;
    while (right < len) {
        if (nums[right] !== 0) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    for (let i = left; i < len; i++) {
        nums[i] = 0;
    }
};