/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
    const MOD = Math.pow(10, 9) + 7;
    const rev = n => {
        let ans = 0;
        while (n > 0) {
            const m = n % 10;
            n = Math.trunc(n / 10);
            ans = ans * 10 + m;
        }
        return ans;
    }

    const map = new Map();
    const revDiff = nums.map(n => n - rev(n));
    revDiff.map(n => {
        const cnt = map.get(n) || 0;
        map.set(n, cnt + 1);
    });

    let cnt = 0;
    for (let v of map.values()) {
        cnt = (cnt + v * (v - 1) / 2) % MOD
    }
    return cnt;
};