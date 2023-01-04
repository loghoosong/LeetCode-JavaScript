/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    let ans = 0;
    let lastBig = -1, lastMid = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > right) {
            lastBig = i;
            lastMid = -1;
        } else {
            if (nums[i] >= left) lastMid = i;
            if (lastMid != -1) ans += (lastMid - lastBig);
        }
    };

    return ans;
};