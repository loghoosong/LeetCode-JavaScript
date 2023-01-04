/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const len = intervals.length;
    if (len == 0) return [newInterval];

    function myFindIdx(target, i) {
        let start = 0;
        let end = len - 1;
        while (start <= end) {
            const mid = start + end >> 1;
            if (intervals[mid][i] == target) {
                return mid + 1 - i;
            } else if (intervals[mid][i] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    let l = myFindIdx(newInterval[0], 1);
    if (l == len) {
        intervals.push(newInterval);
        return intervals;
    }

    let r = myFindIdx(newInterval[1], 0) - 1;
    if (r == -1) {
        intervals.unshift(newInterval);
        return intervals;
    }
    newInterval = [Math.min(intervals[l][0], newInterval[0]), Math.max(intervals[r][1], newInterval[1])];
    intervals.splice(l, r - l + 1, newInterval);
    console.log(l);
    console.log(r);
    return intervals;
};

console.log(insert([[1, 2]], [-2, 1]));