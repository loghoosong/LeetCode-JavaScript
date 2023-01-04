/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const len = height.length;
    let area = 0;
    let leftIdx = 0;
    let rightIdx = len - 1;
    let max = rightIdx * Math.min(height[0], height[len - 1]);
    while (leftIdx != rightIdx) {
        if (height[leftIdx] <= height[rightIdx]) {
            area = height[leftIdx] * (rightIdx - leftIdx);
            leftIdx++;
        } else {
            area = height[rightIdx] * (rightIdx - leftIdx);
            rightIdx--;
        }
        max = Math.max(area, max)
    }

    return max;
};