/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let from = 0;
    let end = nums.length - 1;
    while (true) {
        if (nums[from] <= nums[end]) return nums[from];
        const mid = from + end >> 1;
        if (nums[mid] < nums[from]) {
            end = mid;
        } else {
            from = mid + 1;
        }
    }
};