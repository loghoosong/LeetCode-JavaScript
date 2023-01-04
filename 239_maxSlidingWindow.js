/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const len = nums.length;
    let stack = [];
    for (let i = 0; i < k; i++) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
    }

    let ans = [nums[stack[0]]];
    for (let i = k; i < len; i++) {
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);

        while (stack[0] <= i - k) {
            stack.shift();
        }
        ans.push(nums[stack[0]]);
    }

    return ans;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)