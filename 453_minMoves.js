/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let sum = 0,
        min = Infinity;
    nums.map(num => {
        sum += num;
        min = Math.min(min, num);
    });
    return sum - min * nums.length;
};