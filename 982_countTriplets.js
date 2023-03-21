/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
    const cnt = new Array(1 << 16).fill(0);
    for (let i of nums) {
        for (let j of nums) {
            cnt[i & j]++;
        }
    }

    let ans = 0;
    for (let k of nums) {
        const tar = k ^ 0xffff;
        for (let sub = tar; sub != 0; sub = (sub - 1) & tar) {
            ans += cnt[sub];
        }
        ans += cnt[0];
    }

    return ans;
};