/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let set = new Set(nums1);
    let ans = new Set();
    nums2.map(n => {
        if (set.has(n)) ans.add(n);
    });
    return Array.from(ans);
};