/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    if (end < 10) {
        for (let i = 0; i <= end; i++) {
            if (nums[i] == target) return i;
        }
        return -1;
    }

    if (target == nums[0]) {
        return 0;
    } else if (target > nums[0]) {
        while (start <= end) {
            const mid = start + end >> 1;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                if (nums[mid] >= nums[0]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
    } else {
        while (start <= end) {
            const mid = start + end >> 1;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                if (nums[mid] >= nums[0]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;
};