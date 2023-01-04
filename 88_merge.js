/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const len = m + n;
    let idx1 = m - 1, idx2 = n - 1;
    for (let i = len - 1; i >= 0; i--) {
        if (idx2 < 0) return;

        if (idx1 < 0 || nums1[idx1] < nums2[idx2]) {
            nums1[i] = nums2[idx2];
            idx2--;
        } else {
            nums1[i] = nums1[idx1];
            idx1--;
        }
    }
};