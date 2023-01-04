/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function swap(arr, idx1, idx2) {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    function buildMaxHeap(arr) {
        for (let i = 1; i < arr.length; i++) {
            let left = i;
            let parent = Math.trunc((i - 1) / 2);
            while (arr[left] > arr[parent]) {
                swap(arr, left, parent);
                left = parent;
                parent = Math.trunc((left - 1) / 2);
            }
        }
    }

    function heapify(heap, idx, heapSize) {
        let left = idx * 2 + 1;
        while (left < heapSize) {
            let largest = left;
            if (left + 1 < heapSize && heap[left + 1] > heap[left]) largest++;
            if (heap[largest] > heap[idx]) {
                swap(heap, largest, idx);
                idx = largest;
                left = idx * 2 + 1;
            } else {
                break;
            }
        }
    }

    buildMaxHeap(nums);
    let len = nums.length;
    for (let i = 1; i <= k; i++) {
        swap(nums, 0, len - i);
        heapify(nums, 0, len - i);
    }
    return nums[len - k];
};

findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 3);