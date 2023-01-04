/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
    const len = nums.length;
    const prefix = new Array(len + 1).fill(0);
    for (let i = 0; i < len; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const dp = new Array(len + 1).fill(0);
    for (let i = 1; i <= len; i++) {
        dp[i] = prefix[i] / i;
    }
    for (let j = 2; j <= k; j++) {
        for (let i = len; i > 0; i--) {
            for (let mid = j - 1; mid < i; mid++) {
                dp[i] = Math.max(dp[i], dp[mid] + (prefix[i] - prefix[mid]) / (i - mid));
            }
        }
    }

    return dp[len];
};
console.log(
    largestSumOfAverages([3748, 521, 7935, 3665, 5337], 3))