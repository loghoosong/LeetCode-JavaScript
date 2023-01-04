/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    const len = nums.length;
    let start = 0;
    let end = len - 1;

    while (start <= end) {
        const mid = start + end >> 1;
        if (nums[mid] == target) {
            return true;
        } else if (nums[start] == nums[mid] && nums[end] == nums[mid]) {
            end--;
            start++;
        } else if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[end] >= target && nums[mid] < target) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }

    return false;
};

console.log(search([13, 1, 1, 1], 13));