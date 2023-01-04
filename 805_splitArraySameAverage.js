/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
    const len = nums.length;
    if (len == 1) return false;
    const mid = len >> 1;
    const sum = nums.reduce((s, n) => s + n, 0);
    nums = nums.map((n) => n * len - sum);

    let set = new Set();
    for (let i = 1; i < (1 << mid); i++) {
        let tot = 0;
        for (let j = 0; j < mid; j++) {
            if (i & (1 << j)) {
                tot += nums[j];
            }
        }
        if (tot == 0) return true;
        if (i != (1 << mid) - 1) set.add(tot);
    }

    for (let i = 1; i < (1 << len - mid); i++) {
        let tot = 0;
        for (let j = 0; j < (len - mid); j++) {
            if (i & (1 << j)) {
                tot += nums[mid + j];
            }
        }
        if (tot == 0 || set.has(-tot)) return true;
    }
    return false;
};

console.log(splitArraySameAverage([9990, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]))