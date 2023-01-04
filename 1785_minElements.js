/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
    return Math.ceil(Math.abs(nums.reduce((s, v) => s + v, -goal)) / limit);
};