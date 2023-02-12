/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    const newNums = nums.map((n, i) => (i & 1) === 1 ? n : -n);
    //diff = oddSum - evenSum
    let diff = newNums.reduce((d, n) => d + n, 0);
    let ans = 0;
    newNums.map(n => {
        diff -= n;
        ans += diff === 0;
        diff -= n;
    });

    return ans;
};