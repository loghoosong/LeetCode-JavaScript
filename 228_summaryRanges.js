/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let ans = [];
    function getRange(idx) {
        let str = '' + nums[idx];
        let i = idx + 1
        for (; i < nums.length; i++) {
            if (nums[i] != nums[i - 1] + 1) break;
        }
        if (i == idx + 1) {
            ans.push(str);
        } else {
            ans.push(str + '->' + nums[i - 1]);
        }
        return i;
    }

    let idx = 0;
    while (idx < nums.length) {
        idx = getRange(idx);
    }
    return ans;
};