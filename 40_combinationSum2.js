/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    const len = candidates.length;
    let ans = [];
    function iteator(picked, sum, startIdx) {
        for (let i = startIdx; i < len;) {
            const num = candidates[i];
            if (num == sum) {
                picked.push(num);
                ans.push([].concat(picked))
                picked.pop();
                return;
            } else if (num > sum) {
                return;
            } else {
                picked.push(num);
                iteator(picked, sum - num, i + 1);
                picked.pop();
            }

            do {
                i++;
            } while (candidates[i] == num);
        }
    }

    iteator([], target, 0);
    return ans;
};