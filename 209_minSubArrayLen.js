/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0, right = 0;
    let sum = nums[0];
    let ans = 100001;
    end: while (true) {
        while (sum < target) {
            right++;
            if (right == nums.length) break end;
            sum += nums[right];
        }
        ans = Math.min(ans, right - left + 1);

        while (sum >= target) {
            if (left == right) return 1;
            sum -= nums[left];
            left++;
        }
        ans = Math.min(ans, right - left + 2);
    }

    return ans == 100001 ? 0 : ans;
};