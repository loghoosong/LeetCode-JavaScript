/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let down = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (down) return false;
            down = true;
        }
    }

    if (down) return nums[0] >= nums[nums.length - 1];
    return true;
};