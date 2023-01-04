/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    if (nums.length == 1) return 0;
    let max = -Infinity;
    let min = Infinity;
    nums.forEach(num => {
        max = max > num ? max : num;
        min = min < num ? min : num;
    })
    let sum = nums.reduce((sum, num) => sum + max - num, 0);
    return (max - min) * nums.length - sum;
};