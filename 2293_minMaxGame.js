/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
    let n = nums.length;
    while (n !== 1) {
        n >>= 1;
        for (let i = 0; i < n; i++) {
            if ((i & 1) === 0) {
                nums[i] = Math.min(nums[i << 1], nums[(i << 1) + 1]);
            } else {
                nums[i] = Math.max(nums[i << 1], nums[(i << 1) + 1]);
            }
        }
    }
    return nums[0];
};