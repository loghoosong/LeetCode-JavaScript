/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    const len = heights.length;
    let stack = [];
    let left = [];
    let right = new Array(len).fill(len);
    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            right[stack.pop()] = i;
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    let ans = 0;
    for (let i = 0; i < len; i++) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }
    return ans;
};