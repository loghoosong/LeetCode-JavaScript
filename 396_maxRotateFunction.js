/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    let len = nums.length;
    let sum = nums.reduce((sum, num) => sum + num, 0);
    let f = nums.reduce((sum, num, index) => sum + num * index, 0);
    let ans = f;
    for (let i = len - 1; i > 0; i--) {
        f += sum - len * nums[i]
        ans = Math.max(f, ans);
    }
    return ans;
};

maxRotateFunction([4, 3, 2, 6]);