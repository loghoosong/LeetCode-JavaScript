/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let cnt = 0;

    function mergeSort(nums, left, right, temp) {
        const maxStep = right - left + 1;
        let step = 1;
        while (step < maxStep) {
            const doubleStep = step << 1;
            for (let left = 0; left <= right; left += doubleStep) {
                merge(nums, left, left + step - 1, Math.min(right, left + doubleStep - 1), temp);
            }
            step = doubleStep;
        }
    }

    function merge(nums, left, mid, right, temp) {
        for (let i = left; i <= right; i++) {
            temp[i] = nums[i];
        }

        let i = left, j = mid + 1;
        for (let k = left; k <= right; k++) {
            if (i > mid) {
                nums[k] = temp[j];
                j++;
            } else if (j > right) {
                nums[k] = temp[i];
                i++;
            } else if (temp[i] <= temp[j]) {
                nums[k] = temp[i];
                i++;
            } else {
                nums[k] = temp[j];
                j++;
                cnt += (mid - i + 1);
            }
        }
    }

    const len = nums.length;
    let temp = new Array(len);
    mergeSort(nums, 0, len - 1, temp);
    return cnt;
};