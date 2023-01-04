/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    const xorsum = nums.reduce((s, v) => s ^ v, 0);
    const lsb = xorsum & (-xorsum);
    const t1 = nums.reduce((s, v) => v & lsb ? s : s ^ v, 0);
    return [t1, xorsum ^ t1];
};