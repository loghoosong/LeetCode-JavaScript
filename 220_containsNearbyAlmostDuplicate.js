/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    let buckets = new Map();
    valueDiff++;
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.floor(nums[i] / valueDiff);
        if (buckets.has(idx)) {
            if (i - buckets.get(idx) <= indexDiff) return true;
        }
        if (buckets.has(idx - 1)) {
            let j = buckets.get(idx - 1);
            if (i - j <= indexDiff && nums[i] - nums[j] < valueDiff) return true;
        }
        if (buckets.has(idx + 1)) {
            let j = buckets.get(idx + 1);
            if (i - j <= indexDiff && nums[j] - nums[i] < valueDiff) return true;
        }
        buckets.set(idx, i);
    }
    return false;
};