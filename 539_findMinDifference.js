/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const len = timePoints.length;
    for (let i = 0; i < len; i++) {
        const h = timePoints[i].slice(0, 2);
        const m = timePoints[i].slice(3);
        timePoints[i] = h * 60 + +m;
    }

    timePoints.sort((a, b) => a - b);
    let min = Math.min(timePoints[len - 1] - timePoints[0], 1440 + timePoints[0] - timePoints[len - 1]);
    for (let i = 0; i < len - 1; i++) {
        min = Math.min(min, timePoints[i + 1] - timePoints[i]);
    }
    return min;
};