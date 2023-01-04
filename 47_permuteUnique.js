/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;
    let ans = [];
    let arr = [];
    let unUsed = new Map();
    for (let n of nums) {
        const count = unUsed.get(n) || 0;
        unUsed.set(n, count + 1);
    }

    function iteator() {
        if (arr.length == len) {
            ans.push([].concat(arr));
            return;
        }
        let usedThisPos = new Set();
        for (let n of nums) {
            const count = unUsed.get(n);
            if (count > 0 && !usedThisPos.has(n)) {
                arr.push(n);
                unUsed.set(n, count - 1);
                usedThisPos.add(n);
                iteator();
                unUsed.set(n, count);
                arr.pop();
            }
        }
    }

    iteator();
    return ans;
};