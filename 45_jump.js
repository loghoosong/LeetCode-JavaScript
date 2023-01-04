/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    function next(current, uBound) {
        let max = nums[current];
        const n = current + nums[current];
        if (n >= uBound) return uBound;

        let ans = 0;
        for (let i = current + 1; i <= n; i++) {
            if (nums[i] + i > max) {
                max = nums[i] + i;
                ans = i;
            }
        }
        return ans;
    }

    const len = nums.length;
    let idx = 0;
    let count = 0;
    while (idx < len - 1) {
        idx = next(idx, len - 1);
        count++;
    }
    return count;
};