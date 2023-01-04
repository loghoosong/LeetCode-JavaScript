/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let arr = new Array(3).fill(-Infinity);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == arr[0] || nums[i] == arr[1] || nums[i] == arr[2]) {
            continue;
        }
        if (nums[i] > arr[2]) {
            arr[0] = arr[1];
            arr[1] = arr[2];
            arr[2] = nums[i];
        } else if (nums[i] > arr[1]) {
            arr[0] = arr[1];
            arr[1] = nums[i];
        } else if (nums[i] > arr[0]) {
            arr[0] = nums[i];
        }
    }

    return arr[0] == -Infinity ? arr[2] : arr[0];
};