/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;

    let ans = [];
    let idx1 = 0;
    while (idx1 < len - 3) {
        const t1 = target - nums[idx1];
        let idx2 = idx1 + 1;
        if (nums[idx2] + nums[idx2 + 1] + nums[idx2 + 2] > t1) break;
        while (idx2 < len - 2) {
            const t2 = t1 - nums[idx2];
            let idx3 = idx2 + 1;
            if (nums[idx3] + nums[idx3 + 1] > t2) break;
            let idx4 = len - 1;
            if (nums[idx4] + nums[idx4 - 1] >= t2) {
                while (idx3 < idx4) {
                    if (nums[idx3] + nums[idx4] == t2) {
                        ans.push([nums[idx1], nums[idx2], nums[idx3], nums[idx4]]);
                        idx4--;
                        while (nums[idx4] == nums[idx4 + 1]) {
                            idx4--;
                        }
                        idx3++;
                        while (nums[idx3] == nums[idx3 - 1]) {
                            idx3++;
                        }
                    } else if (nums[idx3] + nums[idx4] > t2) {
                        idx4--;
                        while (nums[idx4] == nums[idx4 + 1]) {
                            idx4--;
                        }
                    } else {
                        idx3++;
                        while (nums[idx3] == nums[idx3 - 1]) {
                            idx3++;
                        }
                    }
                }
            }
            idx2++;
            while (nums[idx2] == nums[idx2 - 1]) {
                idx2++;
            }
        }
        idx1++
        while (nums[idx1] == nums[idx1 - 1]) {
            idx1++;
        }
    }

    return ans;
};