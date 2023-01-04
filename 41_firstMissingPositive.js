/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    function swap(i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let missing = nums.length + 1;
    for (let i = 0; i < missing - 1;) {
        if (nums[i] >= missing || nums[i] < i + 1) {
            missing--;
            nums[i] = nums[missing - 1];
        } else if (nums[i] > i + 1) {
            if (nums[i] == nums[nums[i] - 1]) {
                missing--;
                nums[i] = nums[missing - 1];
            } else {
                swap(i, nums[i] - 1);
            }
        } else {
            i++;
        }
    }

    return missing;
};