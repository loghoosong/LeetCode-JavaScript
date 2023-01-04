/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    function isValid(point) {
        return x == point[0] || y == point[1];
    }

    function manhattan(point) {
        return Math.abs(point[0] - x) + Math.abs(point[1] - y);
    }

    let ans = -1;
    let min = 20000;
    points.map((p, i) => {
        if (isValid(p)) {
            const m = manhattan(p);
            if (m < min) {
                ans = i;
                min = m;
            }
        }
    });
    return ans;
};