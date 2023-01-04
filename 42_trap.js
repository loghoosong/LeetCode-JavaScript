/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;
    let ans = 0;
    let one = 0;
    let startIdx = 0;
    for (let i = 1; i < len; i++) {
        if (height[i] < height[startIdx]) {
            one += (height[startIdx] - height[i]);
        } else {
            ans += one;
            startIdx = i;
            one = 0;
        }
    }

    const maxIdx = startIdx;
    startIdx = len - 1;
    one = 0;
    for (let i = len - 2; i >= maxIdx; i--) {
        if (height[i] < height[startIdx]) {
            one += (height[startIdx] - height[i]);
        } else {
            ans += one;
            startIdx = i;
            one = 0;
        }
    }

    return ans;
};