/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let len = points.length;
    if (len == 1) return 1;

    function calTan(p1, p2) {
        if (p1[0] == p2[0]) return 'infi'
        return (p2[1] - p1[1]) / (p2[0] - p1[0])
    }

    let tanMap = new Map();
    let ans = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j) continue;
            let temp = calTan(points[i], points[j])
            if (tanMap.has(temp)) {
                tanMap.set(temp, tanMap.get(temp) + 1);
            } else {
                tanMap.set(temp, 2);
            }
        }
        let max = 0;
        for (let v of tanMap.values()) {
            if (v > max) max = v;
        }
        if (max > ans) ans = max;
        tanMap.clear();
    }
    return ans;
};