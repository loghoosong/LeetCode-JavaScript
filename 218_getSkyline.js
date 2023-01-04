/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    let pts = new Array(buildings.length << 1);
    buildings.map((v, i) => {
        pts[i << 1] = [v[0], -v[2]];//标记左
        pts[(i << 1) + 1] = [v[1], v[2]];//标记右
    });
    pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let ans = [];
    let prev = 0, heights = [0];
    for (let i = 0; i < pts.length; i++) {
        const x = pts[i][0], h = pts[i][1];
        if (h < 0) {
            heights.splice(serch(heights, -h), 0, -h);
        } else {
            heights.splice(serch(heights, h), 1);
        }
        if (heights[0] !== prev) {
            ans.push([x, heights[0]]);
            prev = heights[0];
        }
    }
    return ans;
};

function serch(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start < end) {
        const mid = (start + end) >> 1;
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}