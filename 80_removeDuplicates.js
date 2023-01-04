/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length;
    if (len <= 2) return len;

    let idx = 2;
    for (let i = 2; i < len; i++) {
        if (nums[i] != nums[idx - 2]) {
            nums[idx] = nums[i];
            idx++;
        }
    }
    return idx;
};