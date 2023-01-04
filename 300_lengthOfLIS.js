/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let maxLength = 0;
    let arr = [];
    arr.push(nums[0]);
    for (let i = 0; i < nums.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (nums[i] > arr[j]) {
                arr[j + 1] = nums[i];
                break;
            }
        }
        if (nums[i] < arr[0]) arr[0] = nums[i];
    }
    return arr.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));