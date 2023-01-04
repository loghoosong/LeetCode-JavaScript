/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = -Infinity;
    let sum = 0;
    nums.forEach(x => {
        sum = Math.max(x, sum + x);
        ans = Math.max(ans, sum);
    })

    return ans;
};


console.log(maxSubArray([-2]));