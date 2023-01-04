/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    function distance(p1, p2) {
        const x = p1[0] - p2[0];
        const y = p1[1] - p2[1];
        return x * x + y * y;
    }

    let map = new Map();
    let ans = 0;
    const len = points.length;
    for (let i = 0; i < len; i++) {
        map.clear();
        for (let j = 0; j < len; j++) {
            let d = distance(points[i], points[j]);
            if (map.has(d)) {
                map.set(d, map.get(d) + 1);
            } else {
                map.set(d, 1);
            }
        }
        for (let count of map.values()) {
            if (count > 1) {
                ans += count * (count - 1);
            }
        }
    }
    return ans;
};