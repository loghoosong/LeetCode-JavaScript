/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let ans = [];
    intervals.sort((a, b) => a[0] - b[0]);
    const len = intervals.length;
    let idx = 0;
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] <= intervals[idx][1]) {
            intervals[idx][1] = Math.max(intervals[idx][1], intervals[i][1]);
        } else {
            ans.push(intervals[idx]);
            idx = i;
        }
    }
    ans.push(intervals[idx]);

    return ans;
};