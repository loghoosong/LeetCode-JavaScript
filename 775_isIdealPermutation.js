/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
    const len = nums.length;
    let max = nums[0];
    let min = -Infinity;

    for (let i = 1; i < len; i++) {
        if (nums[i] >= max) {
            min = max;
            max = nums[i]
        } else if (nums[i] > min) {
            min = max;
        } else {
            return false;
        }
    }

    return true;
};