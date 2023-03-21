/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
    const len = nums.length;
    if (len === 1) return 0;

    const cnt = (start) => {
        let res = 0;
        if (start === 0) {
            start += 2;
            res += Math.max(0, nums[0] - nums[1] + 1);
        }
        for (let i = start; i < len - 1; i += 2) {
            res += Math.max(0, nums[i] - nums[i - 1] + 1, nums[i] - nums[i + 1] + 1);
        }
        if (len - start & 1) {
            res += Math.max(0, nums[len - 1] - nums[len - 2] + 1);
        }

        return res;
    }

    return Math.min(cnt(0), cnt(1));
};