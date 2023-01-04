/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let ans = 0;
    let len = nums.length;
    for (let i = 0; i < 30; i++) {
        let count = 0;
        for (let num of nums) {
            count += (num >> i) & 1;
        }
        ans += count * (len - count);
    }
    return ans;
};