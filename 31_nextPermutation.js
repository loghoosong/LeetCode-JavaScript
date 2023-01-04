/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    function swap(p1, p2) {
        const t = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = t;
    }

    function mySort(from, end = nums.length) {
        for (let i = from, j = end - 1; i < j; i++, j--) {
            swap(i, j);
        }
    }

    const len = nums.length;
    for (let i = len - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            let idx = i;
            for (let j = i + 1; j < len; j++) {
                if (nums[j] > nums[i - 1]) {
                    idx = j;
                } else {
                    break;
                }
            }
            swap(idx, i - 1);
            mySort(i);
            return;
        }
    }

    mySort(0);
};