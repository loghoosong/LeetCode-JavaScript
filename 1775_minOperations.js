/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
    let min = Math.max(nums1.length, nums2.length);
    let max = Math.min(nums1.length, nums2.length) * 6;
    if (min > max) return -1;

    function minOps(counts1, counts2, diff) {
        let ans = 0;
        for (let i = 1; i <= 5; i++) {
            if (diff <= (6 - i) * (counts1[7 - i] + counts2[i])) {
                ans += Math.ceil(diff / (6 - i));
                break;
            } else {
                ans += (counts1[7 - i] + counts2[i]);
                diff -= (6 - i) * (counts1[7 - i] + counts2[i]);
            }
        }
        return ans;
    }

    let counts1 = new Array(7).fill(0), counts2 = new Array(7).fill(0);
    nums1.map(n => counts1[n]++);
    nums2.map(n => counts2[n]++);
    const sum1 = counts1.reduce((s, v, i) => s + v * i, 0);
    const sum2 = counts2.reduce((s, v, i) => s + v * i, 0);

    if (sum1 > sum2) {
        return minOps(counts1, counts2, sum1 - sum2);
    } else {
        return minOps(counts2, counts1, sum2 - sum1);
    }
};