/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let area = (ay2 - ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1);
    let overlapX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    let overlapY = Math.min(ay2, by2) - Math.max(ay1, by1);
    if (overlapX > 0 && overlapY > 0) area -= (overlapX * overlapY);
    return area;
};