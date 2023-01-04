/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    if (nums[0] >= target) return 0;
    if (nums[end] < target) return end + 1;

    while (start <= end) {
        const mid = start + end >> 1;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

console.log(searchInsert([1, 3], 2));