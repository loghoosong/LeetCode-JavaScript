/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
    let xor = nums.reduce((x, num) => x ^ num, 0);
    if (xor == 0) return true;
    return nums.length % 2 == 0 ? true : false;
};