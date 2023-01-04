/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (nums[end] == 2) {
        end--;
    }
    while (start < end) {
        if (nums[start] == 2) {
            nums[start] = nums[end];
            nums[end] = 2;
            end--;
            while (nums[end] == 2) {
                end--;
            }
        }
        start++;
    }

    start = 0;
    while (nums[end] == 1) {
        end--;
    }
    while (start < end) {

        if (nums[start] == 1) {
            nums[start] = 0;
            nums[end] = 1;
            end--;
            while (nums[end] == 1) {
                end--;
            }
        }
        start++;
    }
};