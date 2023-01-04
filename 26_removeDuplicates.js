/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1;
        if (nums[i] != nums[j]) continue;
        while (nums[i] == nums[j]) {
            if (j == nums.length - 1) {
                nums.splice(i + 1, j - i);
                return;
            }
            j++;
        }
        nums.splice(i + 1, j - i - 1);
    }
};