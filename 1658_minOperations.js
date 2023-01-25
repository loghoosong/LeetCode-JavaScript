/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    const len = nums.length;
    let sum = nums.reduce((s, v) => s + v);
    if (sum < x) return -1;

    let ans = len + 1;
    let r = 0;
    for (l = 0; l < len; l++) {
        while (sum > x && l <= r) {
            sum -= nums[r];
            r++;
        }
        if (sum === x) ans = Math.min(ans, l + len - r);
        sum += nums[l];
    }

    return ans > len ? -1 : ans;
};