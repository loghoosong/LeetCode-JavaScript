/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const midIdx1 = (len1 + len2 + 1) >> 1;
    const midIdx2 = ((len1 + len2) >> 1) + 1;

    function findNthNum(from1, from2, nth, defult) {
        let count = 0;
        let ret = defult;
        for (; count < nth; count++) {
            if (from1 >= len1) {
                return [nums2[from2 + nth - count - 1], from1, from2 + nth - count];
            }
            if (from2 >= len2) {
                return [nums1[from1 + nth - count - 1], from1 + nth - count, from2]
            }
            if (nums1[from1] < nums2[from2]) {
                ret = nums1[from1]
                from1++;
            } else {
                ret = nums2[from2];
                from2++;
            }
        }
        return [ret, from1, from2];
    }

    let l = findNthNum(0, 0, midIdx1, 0);
    let r = findNthNum(l[1], l[2], midIdx2 - midIdx1, l[0]);
    return (r[0] + l[0]) / 2;
};