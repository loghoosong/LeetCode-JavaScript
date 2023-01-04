/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = nums[0];
    let second = Infinity;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > second) return true;

        if (nums[i] > first) {
            second = nums[i];
        } else {
            first = nums[i];
        }
    }

    return false;
};