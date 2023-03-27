/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    let set = new Set();
    for (let i = 1; i < nums.length; i++) {
        const and = nums[i] + nums[i - 1];
        if (set.has(and)) return true;
        set.add(and);
    }
    return false;
};