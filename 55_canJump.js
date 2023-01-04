/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let ans = true

    function findZero(idx) {
        for (let i = idx - 1; i >= 0; i--) {
            if (nums[i] == 0) {
                ans = false;
                f(i);
                return;
            }
        }
    }

    function f(idx) {
        for (let i = idx - 1; i >= 0; i--) {
            if (nums[i] > idx - i) {
                ans = true;
                findZero(i);
                return;
            }
        }
    }

    findZero(nums.length - 1);
    return ans;
};