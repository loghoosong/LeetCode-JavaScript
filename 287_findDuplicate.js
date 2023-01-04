/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let fast = 0, slow = 0;
    do {
        slow = nums[slow];
        fast = nums[fast];
        fast = nums[fast];
    } while (slow !== fast);

    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};