/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    const len = candidates.length;
    let ans = [];
    function iteator(picked, sum, startIdx) {
        for (let i = startIdx; i < len; i++) {
            if (candidates[i] == sum) {
                picked.push(candidates[i]);
                ans.push([].concat(picked))
                picked.pop();
                return;
            } else if (candidates[i] > sum) {
                return;
            } else {
                picked.push(candidates[i]);
                iteator(picked, sum - candidates[i], i);
                picked.pop();
            }
        }
    }

    iteator([], target, 0);
    return ans;
};