/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const len = nums.length;

    nums[0] %= k;
    let allSum = nums[0];
    for (let i = 1; i < len; i++) {
        nums[i] %= k;
        allSum += nums[i];
        if (nums[i] == 0 && nums[i - 1] == 0) return true;
    }

    function check(target) {
        let start = 0;
        let end = 1;
        let sum = nums[0] + nums[1];
        while (end < len) {
            if (sum == target) {
                return true;
            } else if (sum < target) {
                end++;
                sum += nums[end];
            } else {
                sum -= nums[start];
                start++;
                if (start == end) {
                    end++;
                    sum += nums[end];
                }
            }
        }
        return false;
    }

    for (let i = 0; i <= Math.trunc(allSum / k); i++) {
        if (check(i * k)) return true;
    }

    return false;
};