/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    const checkArithmetic = (lIdx, rIdx) => {
        let min = nums[lIdx], max = nums[rIdx];
        for (let i = lIdx; i <= rIdx; i++) {
            min = Math.min(min, nums[i]);
            max = Math.max(max, nums[i]);
        }

        if (max === min) return true;

        const step = (max - min) / (rIdx - lIdx);
        if (!Number.isInteger(step)) return false;

        const flag = new Array(rIdx - lIdx + 1).fill(false);
        for (let i = lIdx; i <= rIdx; i++) {
            if ((nums[i] - min) % step !== 0) return false;

            const j = (nums[i] - min) / step;
            if (flag[j]) return false;
            flag[j] = true;
        }

        return true;
    }

    return l.map((v, i) => checkArithmetic(v, r[i]));
};