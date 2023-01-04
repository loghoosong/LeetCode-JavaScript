/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const rows = matrix.length;
    if (rows == 0) return 0;
    const cols = matrix[0].length;

    for (let j = 0; j < cols; j++) {
        let count = 1;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][j] == 0) {
                count = 1;
            } else {
                matrix[i][j] = count;
                count++;
            }
        }
    }

    function largestRectangleArea(heights) {
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
    }

    let ans = 0;
    for (const arr of matrix) {
        ans = Math.max(ans, largestRectangleArea(arr));
    }
    return ans;
};