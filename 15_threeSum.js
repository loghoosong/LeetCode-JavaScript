/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let ans = [];
    let last = undefined;
    for (let idx1 = 0; idx1 < len; idx1++) {
        if (nums[idx1] > 0) return ans;
        if (nums[idx1] == last) continue;
        last = nums[idx1];

        let idx2 = idx1 + 1;
        let idx3 = len - 1;
        while (idx2 < idx3) {
            if (nums[idx1] + nums[idx2] + nums[idx3] == 0) {
                ans.push([nums[idx1], nums[idx2], nums[idx3]]);
            }
            if (nums[idx1] + nums[idx2] + nums[idx3] >= 0) {
                const num3 = nums[idx3];
                do {
                    idx3--;
                } while (num3 == nums[idx3]);
            } else {
                const num2 = nums[idx2];
                do {
                    idx2++;
                } while (num2 == nums[idx2]);
            }
        }
    }

    return ans;
};