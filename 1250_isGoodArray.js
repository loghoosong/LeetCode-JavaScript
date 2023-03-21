/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function (nums) {
    const gcd = (a, b) =>
        b === 0
            ? a
            : gcd(b, a % b);

    let devisor = nums[0];
    for (let i = 1; i < nums.length; i++) {
        devisor = gcd(devisor, nums[i]);
        if (devisor === 1) break;
    }

    return devisor === 1;
};