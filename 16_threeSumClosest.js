/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let min = Infinity;
    let ans = nums[0] + nums[1] + nums[2];

    for (let idx1 = 0; idx1 < len - 2; idx1++) {
        let idx2 = idx1 + 1;
        if (nums[idx1] + nums[idx2] + nums[idx2 + 1] - target > min) break;
        let idx3 = len - 1;
        if (target - nums[idx1] - nums[idx3] - nums[idx3 - 1] > min) continue;
        while (idx2 < idx3) {
            const sum = nums[idx1] + nums[idx2] + nums[idx3];
            if (sum == target) {
                return sum;
            } else if (sum > target) {
                if (sum - target < min) {
                    ans = sum;
                    min = sum - target;
                }
                idx3--;
            } else {
                if (target - sum < min) {
                    ans = sum;
                    min = target - sum;
                }
                idx2++;
            }
        }
    }

    return ans;
};