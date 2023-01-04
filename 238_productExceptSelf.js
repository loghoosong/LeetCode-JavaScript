/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let arr = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i - 1] * nums[i - 1];
    }

    let right = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right *= nums[i + 1];
        arr[i] *= right;
    }

    return arr;
};