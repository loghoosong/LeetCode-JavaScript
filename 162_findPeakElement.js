/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    const l = nums.length;
    nums.unshift(-Infinity);
    nums.push(-Infinity);

    function find(from, end) {
        if (from > end) return null;

        const mid = from + end >> 1;
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if (mid != from && nums[mid] < nums[mid - 1]) {
            if (nums[mid] >= nums[from] || nums[from] < nums[from + 1]) {
                return find(from, mid - 1);
            }
        }
        if (mid != end && nums[mid] < nums[mid + 1]) {
            if (nums[mid] >= nums[end] || nums[end] < nums[end - 1]) {
                return find(mid + 1, end);
            }
        }
        return find(from, mid - 1) || find(mid + 1, end);
    }

    return find(1, l) - 1;
};