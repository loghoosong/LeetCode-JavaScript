/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let from = 0;
    let end = nums.length - 1;
    while (true) {
        if (from >= end) return nums[from];
        if (nums[from] < nums[end]) return nums[from];

        const mid = from + end >> 1;
        if (nums[mid] < nums[from]) {
            end = mid;
        } else if (nums[mid] > nums[from]) {
            from = mid + 1;
        } else {
            if (nums[mid] > nums[end]) {
                from = mid + 1;
            } else if (nums[mid] < nums[end]) {
                end = mid;
            } else {
                end--;
                from++;
            }
        }
    }
};