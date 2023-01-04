/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ans = 0, count = 0;
    nums.map(n => {
        if (count == 0) {
            ans = n;
        }
        count += 2 * (ans == n) - 1;
    });
    return ans;
};