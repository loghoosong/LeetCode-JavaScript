/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    const sum = nums.reduce((s, n) => s + n, 0);
    const x = sum % p;
    if (x === 0) return 0;

    const remainderToIndex = new Map();
    let y = 0, ans = nums.length;
    for (let i = 0; i < nums.length; i++) {
        // (y-z)%p=x%p <==> (y-x)%p=z%p
        remainderToIndex.set(y, i);
        y = (y + nums[i] + p) % p;
        const remainderToFind = (y - x + p) % p;
        if (remainderToIndex.has(remainderToFind)) {
            ans = Math.min(ans, i - remainderToIndex.get(remainderToFind) + 1);
        }
    }

    return ans === nums.length ? -1 : ans;
};