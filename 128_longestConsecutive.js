/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) return 0;

    nums.sort((a, b) => a - b);
    let ans = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            count++;
        } else if ((nums[i] > nums[i - 1] + 1)) {
            ans = Math.max(ans, count);
            count = 1;
        }
    }
    ans = Math.max(ans, count);

    return ans;
};