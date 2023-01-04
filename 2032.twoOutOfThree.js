/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let map = new Map();
    function count(n, cnter) {
        const cnt = map.get(n) || 0;
        map.set(n, cnt | cnter);
    }

    nums1.map(n => count(n, 1));
    nums2.map(n => count(n, 2));
    nums3.map(n => count(n, 4));
    return Array.from(map.keys()).filter(n => map.get(n) === 3 || map.get(n) > 4);
};