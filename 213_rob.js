/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let l = nums.length;
    if (l == 1) return nums[0];

    let dp1 = new Array(l);
    dp1[0] = nums[0];
    dp1[1] = Math.max(nums[0], nums[1]);
    if (l == 2) return dp1[1];
    for (let i = 2; i < l - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
    }

    let dp2 = new Array(l);
    dp2[l - 1] = nums[l - 1];
    dp2[l - 2] = Math.max(nums[l - 1], nums[l - 2]);
    for (let i = l - 3; i > 0; i--) {
        dp2[i] = Math.max(dp2[i + 1], dp2[i + 2] + nums[i]);
    }

    return Math.max(dp1[l - 2], dp2[1]);
};