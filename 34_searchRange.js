/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = start + end >> 1;
        if (nums[mid] == target) {
            start = mid;
            while (start >= 0 && nums[start] == target) {
                start--;
            }
            start++;

            end = mid;
            while (end < nums.length && nums[end] == target) {
                end++;
            }
            end--;

            return [start, end];
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return [-1, -1];
};