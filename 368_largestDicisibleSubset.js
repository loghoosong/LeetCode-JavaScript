/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let maxAmountArr = [];
    let maxValue = 0;
    let maxReturnLen = 0;
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        maxAmountArr[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] == 0) {
                maxAmountArr[i] = Math.max(maxAmountArr[j] + 1, maxAmountArr[i]);
            }
        }
        if (maxAmountArr[i] >= maxReturnLen) {
            maxReturnLen = maxAmountArr[i];
            maxValue = nums[i];
        }
    }

    for (let i = len - 1; i >= 0; i--) {
        if (maxAmountArr[i] == maxReturnLen && maxValue % nums[i] == 0) {
            ans.push(nums[i]);
            maxValue = nums[i];
            maxReturnLen--;
        }
    }

    return ans;
};