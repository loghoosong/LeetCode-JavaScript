/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map();
    let ans = [];
    nums1.map(n => {
        const cnt = map.get(n) || 0;
        map.set(n, cnt + 1);
    });

    nums2.map(n => {
        const cnt = map.get(n) || 0;
        if (cnt > 0) {
            ans.push(n);
            map.set(n, cnt - 1);
        }
    });
    return ans;
};