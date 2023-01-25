/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    function binary_search(arr, i, target) {
        let start = 0, end = arr.length - 1;
        let mid;
        while (start < end) {
            mid = start + end >> 1;
            if (arr[mid][i] >= target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    function isInCircle(point, querie) {
        const dx = point[0] - querie[0];
        const dy = point[1] - querie[1];
        const r = querie[2];
        return dx * dx + dy * dy <= r * r;
    }

    function isInRectY(point, querie) {
        return point[1] >= querie[1] - querie[2]
            && point[1] <= querie[1] + querie[2];
    }

    let ans = new Array(queries.length).fill(0);
    points.sort((a, b) => a[0] - b[0]);

    for (let j = 0; j < queries.length; j++) {
        let left = binary_search(points, 0, queries[j][0] - queries[j][2]);
        for (let i = left; i < points.length; i++) {
            if (points[i][0] <= queries[j][0] + queries[j][2]) {
                if (isInRectY(points[i], queries[j])
                    && isInCircle(points[i], queries[j]))
                    ans[j]++;
            } else {
                break;
            }
        }
    }

    return ans;
};