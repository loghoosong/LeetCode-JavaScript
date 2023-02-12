/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);

    const set = new Set();
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        set.add(nums[i] + nums[j]);
    }
    return set.size;
};