/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
    const MOD = 1e9 + 7;
    const len = nums.length;
    nums.sort((a, b) => a - b);

    let pow2 = [];
    let num = 1;
    for (let count = 0; count < len; count++) {
        pow2.push(num);
        num = (num << 1) % MOD;
    }

    let ans = 0;
    for (let i = 0; i < len; i++) {
        ans = (ans + nums[i] * (pow2[i] - pow2[len - i - 1] + MOD)) % MOD;
    }

    return ans;
};