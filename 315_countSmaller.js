/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    const len = nums.length;
    let ans = new Array(len).fill(0);
    let temp = new Array(len);
    let index = new Array(len).fill(0).map((_, i) => i);
    let tempIndex = new Array(len).fill(0).map((_, i) => i);

    function mergeSort(nums, index, left, right, temp, tempIndex) {
        const maxStep = right - left + 1;
        let step = 1;
        while (step < maxStep) {
            const doubleStep = step << 1;
            for (let left = 0; left <= right; left += doubleStep) {
                merge(nums, index, left, left + step - 1,
                    Math.min(right, left + doubleStep - 1),
                    temp, tempIndex);
            }
            step = doubleStep;
        }
    }

    function merge(nums, index, left, mid, right, temp, tempIndex) {
        for (let i = left; i <= right; i++) {
            temp[i] = nums[i];
            tempIndex[i] = index[i];
        }

        let i = left, j = mid + 1;
        for (let k = left; k <= right; k++) {
            if (i > mid) {
                nums[k] = temp[j];
                index[k] = tempIndex[j];
                j++;
            } else if (j > right) {
                nums[k] = temp[i];
                index[k] = tempIndex[i];
                i++;
                ans[index[k]] += (j - mid - 1);
            } else if (temp[i] <= temp[j]) {
                nums[k] = temp[i];
                index[k] = tempIndex[i];
                i++;
                ans[index[k]] += (j - mid - 1);
            } else {
                nums[k] = temp[j];
                index[k] = tempIndex[j];
                j++;
            }
        }
    }

    mergeSort(nums, index, 0, len - 1, temp, tempIndex);
    return ans;
};