/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let xor = 0;
    if (nums1.length % 2 == 1) {
        nums2.forEach(item => (xor ^= item));
    }
    if (nums2.length % 2 == 1) {
        nums1.forEach(item => (xor ^= item));
    }
    return xor;
};