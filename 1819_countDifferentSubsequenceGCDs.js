/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
    const gcd = (small, large) => {
        while (small !== 0) {
            const temp = large;
            large = small;
            small = temp % small;
        }
        return large;
    }

    const max = Math.max(...nums);
    const numsBool = new Array(max + 1).fill(false);
    nums.map(n => numsBool[n] = true);

    let ans = 0;
    for (let i = 1; i <= max; i++) {
        let tempGcd = -1;
        for (let j = i; j <= max; j += i) {
            if (numsBool[j]) {
                tempGcd = tempGcd === -1 ? j : gcd(tempGcd, j);
            }
            if (tempGcd === i) {
                ans++;
                break;
            }
        }
    }

    return ans;
};